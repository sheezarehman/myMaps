var points;
function initMap() {

       if (urlParam('start') != '' || urlParam('start2') != ''&& urlParam('end') != '' || urlParam('end2') != '' ) {
        if(urlParam('start') !== '' && urlParam('end') !== '' ){
            console.log("start and end not definned 1111 ")
            console.log(urlParam('end'));
            if (urlParam('start') !== '') {
                start = urlParam('start');
            } else {
                console.log(2);
                mylocation();
                start = points;
            }

            if (urlParam('end') != '') {
                end = urlParam('end');
            } else {
                console.log("rtyui");
                mylocation();

                end = points;
            }
            direction();
        }else{
            console.log("start and end not definned")
            if (urlParam('start') != '') {
                console.log(1);
                start = urlParam('start');
            } else {
                console.log(2);
                mylocation( "start");
                start = points;
            }

            if (urlParam('end') != '') {
                end = urlParam('end');
            } else {
                mylocation("end");
                end = points;
            }

        }
        console.log("called direction");
    }else{
        console.log('get not present');
        general();
    }
}
var map ;
var boxpolys = null;
var directions = null;
var routeBoxer = null;
var distance = null; // km
//if both set then this is call to get path from start to end
function direction(){

    directionsService = new google.maps.DirectionsService;
    directionsDisplay = new google.maps.DirectionsRenderer;
    map = new google.maps.Map(document.getElementById('map'), {
        zoom: 7,
        center: {lat: 48.864716, lng:  2.349014}
    });
    directionsDisplay.setMap(map);


    onChangeHandler( map);

    //AUTOCOMPLETE
    autocomplete(map);
}

function onChangeHandler(map) {
    calculateAndDisplayRoute(directionsService, directionsDisplay , map);
};


function calculateAndDisplayRoute(directionsService, directionsDisplay ,map ) {
    console.log(start);
    console.log(end);


    directionsService.route({
        origin: start,
        destination: end,
        travelMode: 'DRIVING'
    }, function(response, status) {
        if (status === 'OK') {
            var path = response.routes[0].overview_path;

           places(path  ,  directionsService, directionsDisplay ,map );
        } else {
            general();
            window.alert('Directions request failed due to ' + status);
        }
    });
    //click
    clickMap(map);
    autocomplete(map);
}

var allpoints = [];
var listing = 0;
var my_types = ["museum","amusement_park" , "aquarium" , "city_hall","art_gallery"];
function places(path  , directionsService, directionsDisplay ,map){
    console.log(directionsService)
    var placesService = new google.maps.places.PlacesService(map);
    var waypoints = [];
    var coords = [];
    var i = 0;
    for (i = 1; i <= 8; i += 1) {
        coords.push(path[(i * (Math.floor(path.length / 10)) - 1)]);
    }
    console.log(coords);

    coords.forEach(function (coord) {
        // console.log(usertype);
        var request = {
            location: coord,
            radius: 1000, /*"museum"|"amusement_park"|"natural_feature"*/
            types: my_types
        };
        placesService.nearbySearch(request, function (results) {
            var locate

            if (results !== null) {

                var used = function(name) {
                    if(allpoints.indexOf(name) !== -1) {
                        locate = results[listing].geometry.location;
                        allpoints.push(results[listing].name);
                        listing ++;
                        used(results[listing].name);
                    } else {
                        locate = results[listing].geometry.location;
                        allpoints.push(results[listing].name);
                    }
                };
                used(results[listing].name);
            }
            waypoints.push({
                location: locate ,
                stopover: true,
            });
        });
    });

   setTimeout(function (){
       console.log(waypoints);
       console.log(end);
       directionsService.route({
           origin: start,
           destination: end,
           waypoints: waypoints,
           travelMode: 'DRIVING'
       }, function(response, status) {
           console.log(status)
           if (status === 'OK') {
               console.log(response);
               directionsDisplay.setDirections(response);
               directionsDisplay.setPanel(document.getElementById('path'));
               localStorage.setItem('path', JSON.stringify(document.getElementById('path').value));

               var bounds = response.routes[0].bounds;
               map.fitBounds(bounds);
               map.setCenter(bounds.getCenter());

               var path = response.routes[0].overview_path;

           } else {
               general();
               window.alert('Directions request failed due to ' + status);
           }
       });
       //click
       clickMap(map);
       autocomplete(map);
   },1000);
}




// Try HTML5 geolocation.
var map, infoWindow;
function mylocation( when){
    console.log('tada');
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 48.864716, lng:  2.349014},
        zoom: 6
    });
    infoWindow = new google.maps.InfoWindow;

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            var pos = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            };
            point =  new google.maps.LatLng( pos.lat,  pos.lng);
            setpoints(point , when);
            direction();
        }, function() {
            handleLocationError(true, infoWindow, map.getCenter());
        });
    } else {
        // Browser doesn't support Geolocation
        handleLocationError(false, infoWindow, map.getCenter());
    }
}

function setpoints(point , when ){
    // points=point;
    console.log(point);
    console.log("test");
    if(when == "start"){
        start = point;
    }else{
        end = point;
    }
}
function handleLocationError(browserHasGeolocation, infoWindow, pos) {
    infoWindow.setPosition(pos);
    infoWindow.setContent(browserHasGeolocation ?
        'Error: The Geolocation service failed.' :
        'Error: Your browser doesn\'t support geolocation.');
    infoWindow.open(map);
}

// geolocatisation function called if nothing in get
var map, infoWindow;
function general() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 48.864716, lng:  2.349014},
        zoom: 14
    });
    infoWindow = new google.maps.InfoWindow;

    // Try HTML5 geolocation.
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            var pos = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            };

            infoWindow.setPosition(pos);
            infoWindow.setContent('Location found.');
            infoWindow.open(map);
            map.setCenter(pos);
        }, function() {
            handleLocationError(true, infoWindow, map.getCenter());
        });
    } else {
        // Browser doesn't support Geolocation
        handleLocationError(false, infoWindow, map.getCenter());
    }
    clickMap(map);
    autocomplete(map);
}

//form validation 
function formcheck() {
    var from =document.getElementById('start').value;
    var from2=document.getElementById('start2').checked;
    var to =document.getElementById('end').value;
    var to2=document.getElementById('end2').checked;

    if( (from !== null ||  from2 == true) && (to !== null || to2 == true )   && (!(from2== true && to2 == true))){
        return true;
    }
    alert("please fill a starting and ending point!");
    return false;

}

//autocomplete
function autocomplete(map) {

    var starting = /** @type {!HTMLInputElement} */(
        document.getElementById('start'));
    var autocomplete1 = new google.maps.places.Autocomplete(starting);
    autocomplete1.bindTo('bounds', map);
    autocomplete1.setTypes([]);

    var ending = /** @type {!HTMLInputElement} */(
        document.getElementById('end'));
    var autocomplete2 = new google.maps.places.Autocomplete(ending);
    autocomplete2.bindTo('bounds', map);
    autocomplete2.setTypes([]);

}

var lastactive;

function setId(id) {
    lastactive = id;
}
//    CLICK
function clickMap(map){
    var geocoder = new google.maps.Geocoder();


    google.maps.event.addListener(map, 'click', function(event) {
        geocoder.geocode({
        'latLng': event.latLng
    }, function(results, status) {
            if (status == google.maps.GeocoderStatus.OK) {
                if (results[0]) {
                    var input1 = document.getElementById("start");
                    var input2 = document.getElementById("end");

                    if(lastactive == null  || lastactive== "start"){
                        input1.value=results[0].formatted_address;
                    }else if(lastactive == "end" ){
                        input2.value=results[0].formatted_address;
                    }
                }

            }
        });
    });
}

//to reset url
function reset(){
    window.location.href =  window.location.href.split("?")[0];
}

//my url checking function
function urlParam(name){
    if(new RegExp('[\\?&]' + name + '=([^&#]*)').exec(window.location.href) !== null ){
        var results = new RegExp('[\\?&]' + name + '=([^&#]*)').exec(window.location.href);
        return  results[1];
    }
    return false;
    // return true;
}




// window.onload = function() {
//
//     if (urlParam('start') != '') {  // variable_name would be the name of your variable within your url following the ? symbol
//         //
//     } else {
//         general();
//     }
// };