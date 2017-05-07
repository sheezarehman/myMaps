var batman = [{"elementType":"geometry","stylers":[{"color":"#212121"}]},{"elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"elementType":"labels.text.fill","stylers":[{"color":"#757575"}]},{"elementType":"labels.text.stroke","stylers":[{"color":"#212121"}]},{"featureType":"administrative","elementType":"geometry","stylers":[{"color":"#757575"}]},{"featureType":"administrative.country","elementType":"labels.text.fill","stylers":[{"color":"#9e9e9e"}]},{"featureType":"administrative.land_parcel","stylers":[{"visibility":"off"}]},{"featureType":"administrative.locality","elementType":"labels.text.fill","stylers":[{"color":"#bdbdbd"}]},{"featureType":"poi","elementType":"labels.text.fill","stylers":[{"color":"#757575"}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#181818"}]},{"featureType":"poi.park","elementType":"labels.text.fill","stylers":[{"color":"#616161"}]},{"featureType":"poi.park","elementType":"labels.text.stroke","stylers":[{"color":"#1b1b1b"}]},{"featureType":"road","elementType":"geometry.fill","stylers":[{"color":"#2c2c2c"}]},{"featureType":"road","elementType":"labels.text.fill","stylers":[{"color":"#8a8a8a"}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#373737"}]},{"featureType":"road.highway","elementType":"geometry","stylers":[{"color":"#3c3c3c"}]},{"featureType":"road.highway.controlled_access","elementType":"geometry","stylers":[{"color":"#4e4e4e"}]},{"featureType":"road.local","elementType":"labels.text.fill","stylers":[{"color":"#616161"}]},{"featureType":"transit","elementType":"labels.text.fill","stylers":[{"color":"#757575"}]},{"featureType":"water","elementType":"geometry","stylers":[{"color":"#000000"}]},{"featureType":"water","elementType":"labels.text.fill","stylers":[{"color":"#3d3d3d"}]}]
var styles = [{"featureType":"landscape","stylers":[{"hue":"#FFBB00"},{"saturation":43.400000000000006},{"lightness":37.599999999999994},{"gamma":1}]},{"featureType":"road.highway","stylers":[{"hue":"#FFC200"},{"saturation":-61.8},{"lightness":45.599999999999994},{"gamma":1}]},{"featureType":"road.arterial","stylers":[{"hue":"#FF0300"},{"saturation":-100},{"lightness":51.19999999999999},{"gamma":1}]},{"featureType":"road.local","stylers":[{"hue":"#FF0300"},{"saturation":-100},{"lightness":52},{"gamma":1}]},{"featureType":"water","stylers":[{"hue":"#0078FF"},{"saturation":-13.200000000000003},{"lightness":2.4000000000000057},{"gamma":1}]},{"featureType":"poi","stylers":[{"hue":"#00FF6A"},{"saturation":-1.0989010989011234},{"lightness":11.200000000000017},{"gamma":1}]}];
var retro = [{"featureType":"administrative","stylers":[{"visibility":"off"}]},{"featureType":"poi","stylers":[{"visibility":"simplified"}]},{"featureType":"road","elementType":"labels","stylers":[{"visibility":"simplified"}]},{"featureType":"water","stylers":[{"visibility":"simplified"}]},{"featureType":"transit","stylers":[{"visibility":"simplified"}]},{"featureType":"landscape","stylers":[{"visibility":"simplified"}]},{"featureType":"road.highway","stylers":[{"visibility":"off"}]},{"featureType":"road.local","stylers":[{"visibility":"on"}]},{"featureType":"road.highway","elementType":"geometry","stylers":[{"visibility":"on"}]},{"featureType":"water","stylers":[{"color":"#84afa3"},{"lightness":52}]},{"stylers":[{"saturation":-17},{"gamma":0.36}]},{"featureType":"transit.line","elementType":"geometry","stylers":[{"color":"#3f518c"}]}];
var red = [{"featureType":"all","elementType":"labels.text.fill","stylers":[{"color":"#ffffff"}]},{"featureType":"all","elementType":"labels.text.stroke","stylers":[{"visibility":"off"}]},{"featureType":"all","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#c9323b"}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#c9323b"},{"weight":1.2}]},{"featureType":"administrative.locality","elementType":"geometry.fill","stylers":[{"lightness":"-1"}]},{"featureType":"administrative.neighborhood","elementType":"labels.text.fill","stylers":[{"lightness":"0"},{"saturation":"0"}]},{"featureType":"administrative.neighborhood","elementType":"labels.text.stroke","stylers":[{"weight":"0.01"}]},{"featureType":"administrative.land_parcel","elementType":"labels.text.stroke","stylers":[{"weight":"0.01"}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#c9323b"}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#99282f"}]},{"featureType":"road","elementType":"geometry.stroke","stylers":[{"visibility":"off"}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#99282f"}]},{"featureType":"road.highway.controlled_access","elementType":"geometry.stroke","stylers":[{"color":"#99282f"}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#99282f"}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#99282f"}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#99282f"}]},{"featureType":"water","elementType":"geometry","stylers":[{"color":"#090228"}]}];
var mon = [{"elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"geometry.fill","stylers":[{"color":"#0F0919"}]},{"featureType":"water","elementType":"geometry.fill","stylers":[{"color":"#E4F7F7"}]},{"elementType":"geometry.stroke","stylers":[{"visibility":"off"}]},{"featureType":"poi.park","elementType":"geometry.fill","stylers":[{"color":"#002FA7"}]},{"featureType":"poi.attraction","elementType":"geometry.fill","stylers":[{"color":"#E60003"}]},{"featureType":"landscape","elementType":"geometry.fill","stylers":[{"color":"#FBFCF4"}]},{"featureType":"poi.business","elementType":"geometry.fill","stylers":[{"color":"#FFED00"}]},{"featureType":"poi.government","elementType":"geometry.fill","stylers":[{"color":"#D41C1D"}]},{"featureType":"poi.school","elementType":"geometry.fill","stylers":[{"color":"#BF0000"}]},{"featureType":"transit.line","elementType":"geometry.fill","stylers":[{"saturation":-100}]}];

var lastpoint = [];
var increment = 0;
var state = true;
var usertype = ["museum","amusement_park","place_of_worship","art_gallery"];/* church "museum"|"amusement_park"|"place_of_worship"*/
var body = document.body;
var map;

var origin_autocomplete;
var destination_autocomplete;
var pan = document.getElementById("pan");

var panel;
var travel_mode;
var directionsService;
var directionsDisplay;
var geocoder;
var marker;
var placesService;
var styledMap;


function initMap() {
    travel_mode = google.maps.TravelMode.DRIVING;

    styledMap = new google.maps.StyledMapType(styles, {name: "default"});

    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 46.622405, lng: 2.96719},
        zoom: 6,
        fullscreenControl: true
    });

    map.mapTypes.set('default', styledMap);
    map.setMapTypeId('default');

    var origin_input = document.getElementById('input_from');
    var destination_input = document.getElementById('input_to');

    origin_autocomplete = new google.maps.places.Autocomplete(origin_input);
    origin_autocomplete.bindTo('bounds', map);

    destination_autocomplete = new google.maps.places.Autocomplete(destination_input);
    destination_autocomplete.bindTo('bounds', map);

    geocoder = new google.maps.Geocoder;

    directionsService = new google.maps.DirectionsService;
    panel = document.getElementById('panel');
    directionsDisplay = new google.maps.DirectionsRenderer({
        map   : map,
        panel : panel,
        draggable : true
    });

    directionsDisplay.addListener('directions_changed', function() {
        computeTotalDistance(directionsDisplay.getDirections());
    });

    google.maps.event.addListener(map, 'click', function(event) {
        addMarker(event.latLng, map);
    });

    placesService = new google.maps.places.PlacesService(map);

    geolocalisation();

}


window.onload = function(e){
    var plan_off = localStorage.getItem('plan');
    console.log(plan_off);
    if(plan_off === null) {

    } else {
        var txt = '<h3>Historique</h3>';
        document.getElementById("historique").innerHTML = txt + plan_off;
    }
}




function addMarker(pos, map) {
    if(marker) {
        marker.setPosition(pos);
    }

    else {
        marker = new google.maps.Marker({
            position: pos,
            title:"Tu est ici !",
            draggable: false,
            animation: google.maps.Animation.DROP,
        });
    }
    geocodeLatLng(pos);
    marker.setMap(map);
}


/*
 ** Fonction Geolocalisation
 */
function geolocalisation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            var pos = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            };
            if(marker) {
                marker.setPosition(pos);
            }
            else {
                marker = new google.maps.Marker({
                    position: pos,
                    title:"Tu est ici !",
                    draggable: false,
                    animation: google.maps.Animation.DROP,
                });
            }
            marker.setMap(map);
            map.setCenter(pos);
            geocodeLatLng(pos);

            map.setZoom(13);
        }, function() {
        });
    } else {
    }
}


/*
 ** Ma Fonction d'appel pour faire l'itinéraire
 */
function sendloc() {
    route(document.getElementById('input_from').value, document.getElementById('input_to').value, travel_mode,
        directionsService, directionsDisplay);
}

/*
 ** Fonction Pour avoir l'adresse a partir d'une latitude, longitude
 */
function geocodeLatLng(pos) {
    geocoder.geocode({'location': pos}, function(results, status) {
        if (status === google.maps.GeocoderStatus.OK) {
            if (results[1]) {
                if(state === false) {
                    document.getElementById('input_to').value = results[0].formatted_address;
                }
                else {
                    document.getElementById('input_from').value = results[0].formatted_address;
                }

            } else {
                window.alert('J"ai pas trouvé sorry');
            }
        } else {
            window.alert('J"ai pas trouvé sorry');
        }
    });
}


/*
 ** Fonction Pour faire l'itineraire
 */
function route(origin_latlong, destination_latlong, travel_mode,
               directionsService, directionsDisplay) {
    if (!origin_latlong || !destination_latlong) {
        return;
    }

    directionsService.route({
        origin: origin_latlong,
        destination: destination_latlong,
        travelMode: google.maps.TravelMode.DRIVING
    }, function(response, status) {
        if (status === google.maps.DirectionsStatus.OK) {
            if(marker !== undefined) {
                marker.setMap(null);
            }
            if(document.getElementById("pan") !== null) {
                document.getElementById("pan").removeAttribute("id");
            }

            var recurs_interst = function (miles) {
                var waypoints = [];
                var coords = [];
                var i = 0;
                for (i = 1; i <= 8; i += 1) {
                    coords.push(miles[(i * (Math.floor(miles.length / 8)) - 1)]);
                }

                coords.forEach(function (coord) {
                    console.log(usertype);
                    var request = {
                        location: coord,
                        radius: 50000,/*"museum"|"amusement_park"|"natural_feature"*/
                        types: usertype
                    };
                    placesService.nearbySearch(request, function (results) {
                        var locate;
                        if (results !== null) {

                            var check_pos = function(name) {
                                if(lastpoint.indexOf(name) !== -1) {
                                    locate = results[increment].geometry.location;
                                    name = results[increment].name;
                                    lastpoint.push(name);
                                    increment += 1;
                                    check_pos(results[increment].name);
                                } else {
                                    locate = results[increment].geometry.location;
                                    name = results[increment].name;
                                    lastpoint.push(name);
                                }
                            };
                            check_pos(results[increment].name);
                        }
                        waypoints.push({
                            location: locate,
                            stopover: true,
                        });

                    });
                });

                setTimeout(function () {
                    request = {
                        origin: origin_latlong,
                        destination: destination_latlong,
                        travelMode: google.maps.TravelMode.DRIVING,
                        waypoints: waypoints,
                        optimizeWaypoints: true
                    };

                    directionsService.route(request, function (response, status) {
                        if (status === google.maps.DirectionsStatus.OK) {
                            directionsDisplay.setDirections(response);
                            increment = 0;
                            savepanel(response);

                        }
                    });

                }, 1500);
            };
            recurs_interst(response.routes[0].overview_path);
        }

        else {
            window.alert('Pas trouvé');
        }
    });
}


/*
 ** Fonction Qui calcule la distance total
 */
function computeTotalDistance(result) {
    var total = 0;
    var myroute = result.routes[0];
    for (var i = 0; i < myroute.legs.length; i++) {
        total += myroute.legs[i].distance.value;
    }
    total = total / 1000;
    document.getElementById('total').innerHTML = total + ' km';
}



/*
 ** Les Theme
 */
function selectbatman() {
    document.body.setAttribute("id", "");
    document.body.setAttribute("id", "bat");
    var batmanMap = new google.maps.StyledMapType(batman, {name: "batman"});
    map.mapTypes.set('batman', batmanMap);
    map.setMapTypeId('batman');
}

function selectred() {
    document.body.setAttribute("id", "");
    document.body.setAttribute("id", "red");
    var redMap = new google.maps.StyledMapType(red, {name: "red"});
    map.mapTypes.set('red', redMap);
    map.setMapTypeId('red');
}

function selectretro() {
    document.body.setAttribute("id", "");
    document.body.setAttribute("id", "retro");
    var retroMap = new google.maps.StyledMapType(retro, {name: "retro"});
    map.mapTypes.set('retro', retroMap);
    map.setMapTypeId('retro');
}

function selectmon() {
    document.body.setAttribute("id", "");
    document.body.setAttribute("id", "mon");
    var monMap = new google.maps.StyledMapType(mon, {name: "mon"});
    map.mapTypes.set('mon', monMap);
    map.setMapTypeId('mon');
}

function selectno() {
    document.body.setAttribute("id", "");
    var stylesMap = new google.maps.StyledMapType(styles, {name: "styles"});
    map.mapTypes.set('styles', stylesMap);
    map.setMapTypeId('styles');
}

function infrom() {
    state = true;
}

function into() {
    state = false;
}

function savepanel(response) {
    setTimeout(function() {
        var current_pan = document.getElementById('panel').innerHTML;
        if(current_pan !== null || current_pan !== "") {
            localStorage.setItem('plan',current_pan);
        }
    },1250);
}

function selectmuse() {
    usertype = ["museum"];
}

function selectpark() {
    usertype = ["amusement_park"];
}

function selectrest() {
    usertype = ["food"];
}

function selectnat() {
    usertype = ["natural_feature"];
}

function selectcas() {
    usertype = ["casino"];
}