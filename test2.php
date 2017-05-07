var lastpoint = [];
var increment = 0;
var state = true;
var usertype = ["museum","amusement_park","place_of_worship","art_gallery"];
function places(path){
var placesService = new google.maps.places.PlacesService(map);
var waypoints = [];
var coords = [];
var i = 0;
for (i = 1; i <= 8; i += 1) {
coords.push(path[(i * (Math.floor(path.length / 8)) - 1)]);
console.log(path[(i * (Math.floor(path.length / 8)) - 1)]);

}
console.log(coords);

coords.forEach(function (coord) {
console.log(usertype);
var request = {
location: coord,
radius: 50,/*"museum"|"amusement_park"|"natural_feature"*/
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

}

