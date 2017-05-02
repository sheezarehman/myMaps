console.log("tada");

function initMap() {
    if (urlParam('start') != '') {  // variable_name would be the name of your variable within your url following the ? symbol

        var uluru = {lat: 48.85 , lng: 2.3};
        var map = new google.maps.Map(document.getElementById('map'), {
            zoom: 4,
            center: uluru,
            fullscreenControl: true
        });
        var marker = new google.maps.Marker({
            position: uluru,
            map: map
        });
    } else {//general

        general();
    }
}


function handleLocationError(browserHasGeolocation, infoWindow, pos) {
    infoWindow.setPosition(pos);
    infoWindow.setContent(browserHasGeolocation ?
        'Error: The Geolocation service failed.' :
        'Error: Your browser doesn\'t support geolocation.');
    infoWindow.open(map);
}
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

function urlParam(name){
    if(new RegExp('[\\?&]' + name + '=([^&#]*)').exec(window.location.href) !== null ){
        var results = new RegExp('[\\?&]' + name + '=([^&#]*)').exec(window.location.href);
        return  results[1];
    }
    return false;
    // return true;
}
window.onload = function() {

    if (urlParam('start') != '') {  // variable_name would be the name of your variable within your url following the ? symbol
        //
    } else {
        general();
    }
};