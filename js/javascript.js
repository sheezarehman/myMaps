console.log("tada");

function initMap() {
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
}