console.log("tada");

function initMap() {
    if (urlParam('start') != '' || urlParam('start2') != ''&& urlParam('end') != '' || urlParam('end2') != '' ) {
        direction();
    } else {//general
        console.log('get not present');
        general();
    }
}

//if both set then this is call toi get path from start to end
function direction(){

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
    var start=document.getElementById('start').value;
    var start2=document.getElementById('start2').checked;
    var end=document.getElementById('end').value;
    var end2=document.getElementById('end2').checked;
    
    
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