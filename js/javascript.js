var points;
function initMap() {
    if (urlParam('start') != '' || urlParam('start2') != ''&& urlParam('end') != '' || urlParam('end2') != '' ) {
        if(urlParam('start') == '' && urlParam('end') == ''){
            console.log("start and end not definned 1111 ")
            if (urlParam('start') != '') {
                console.log(1);
                start = urlParam('start');
            } else {
                console.log(2);
                mylocation();
                console.log(points);
                start = points;
            }
            console.log(start);

            if (urlParam('end') != '') {
                end = urlParam('end');
            } else {
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
//if both set then this is call to get path from start to end
function direction(){

    directionsService = new google.maps.DirectionsService;
    directionsDisplay = new google.maps.DirectionsRenderer;
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 7,
        center: {lat: 41.85, lng: -87.65}
    });
    directionsDisplay.setMap(map);
    onChangeHandler();
}

function onChangeHandler() {
    calculateAndDisplayRoute(directionsService, directionsDisplay);
};


function calculateAndDisplayRoute(directionsService, directionsDisplay) {
    console.log(start);
    console.log(end);
    directionsService.route({
        origin: start,
        destination: end,
        travelMode: 'DRIVING'
    }, function(response, status) {
        if (status === 'OK') {
            directionsDisplay.setDirections(response);
        } else {
            window.alert('Directions request failed due to ' + status);
        }
    });
}
// Try HTML5 geolocation.
var map, infoWindow;
function mylocation( when){
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: -34.397, lng: 150.644},
        zoom: 6
    });
    infoWindow = new google.maps.InfoWindow;

    // Try HTML5 geolocation.
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            var pos = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            };
            // console.log(pos);
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
        center: {lat: -34.397, lng: 150.644},
        zoom: 6
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
}

//form validation 
function formcheck() {
    console.log("dyhgbjdfhb");
    var from =document.getElementById('start').value;
    var from2=document.getElementById('start2').checked;
    var to =document.getElementById('end').value;
    var to2=document.getElementById('end2').checked;

    if( from !== null ||  from2 !== false && to !== null || to2 !== false && !(from2 == true && to2 == true )){
        return true;
    }
    alert("please fill a starting and ending point!")
    return false;

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