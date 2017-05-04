<!--<!-- <!DOCTYPE html>-->
<!--<html>-->
<!--  <head>-->
<!--    <meta name="viewport" content="initial-scale=1.0, user-scalable=no">-->
<!--    <meta charset="utf-8">-->
<!--    <title>Marker Clustering</title>-->
<!--    <style>-->
<!--      /* Always set the map height explicitly to define the size of the div-->
<!--       * element that contains the map. */-->
<!--      #map {-->
<!--        height: 100%;-->
<!--      }-->
<!--      /* Optional: Makes the sample page fill the window. */-->
<!--      html, body {-->
<!--        height: 100%;-->
<!--        margin: 0;-->
<!--        padding: 0;-->
<!--      }-->
<!--    </style>-->
<!--  </head>-->
<!--  <body>-->
<!--    <div id="map"></div>-->
<!--    <script>-->
<!---->
<!--      function initMap() {-->
<!---->
<!--        var map = new google.maps.Map(document.getElementById('map'), {-->
<!--          zoom: 3,-->
<!--          center: {lat: -28.024, lng: 140.887}-->
<!--        });-->
<!---->
<!--        // Create an array of alphabetical characters used to label the markers.-->
<!--        var labels = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';-->
<!---->
<!--        // Add some markers to the map.-->
<!--        // Note: The code uses the JavaScript Array.prototype.map() method to-->
<!--        // create an array of markers based on a given "locations" array.-->
<!--        // The map() method here has nothing to do with the Google Maps API.-->
<!--        var markers = locations.map(function(location, i) {-->
<!--          return new google.maps.Marker({-->
<!--            position: location,-->
<!--            label: labels[i % labels.length]-->
<!--          });-->
<!--        });-->
<!---->
<!--        // Add a marker clusterer to manage the markers.-->
<!--        var markerCluster = new MarkerClusterer(map, markers,-->
<!--            {imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'});-->
<!--      }-->
<!--      var locations = [-->
<!--        {lat: 48.85 , lng: 2.3},-->
<!--        {lat: -33.718234, lng: 150.363181},-->
<!--        {lat: -33.727111, lng: 150.371124},-->
<!--        {lat: -33.848588, lng: 151.209834},-->
<!--        {lat: -33.851702, lng: 151.216968},-->
<!--        {lat: -34.671264, lng: 150.863657},-->
<!--        {lat: -35.304724, lng: 148.662905},-->
<!--        {lat: -36.817685, lng: 175.699196},-->
<!--        {lat: -36.828611, lng: 175.790222},-->
<!--        {lat: -37.750000, lng: 145.116667},-->
<!--        {lat: -37.759859, lng: 145.128708},-->
<!--        {lat: -37.765015, lng: 145.133858},-->
<!--        {lat: -37.770104, lng: 145.143299},-->
<!--        {lat: -37.773700, lng: 145.145187},-->
<!--        {lat: -37.774785, lng: 145.137978},-->
<!--        {lat: -37.819616, lng: 144.968119},-->
<!--        {lat: -38.330766, lng: 144.695692},-->
<!--        {lat: -39.927193, lng: 175.053218},-->
<!--        {lat: -41.330162, lng: 174.865694},-->
<!--        {lat: -42.734358, lng: 147.439506},-->
<!--        {lat: -42.734358, lng: 147.501315},-->
<!--        {lat: -42.735258, lng: 147.438000},-->
<!--        {lat: -43.999792, lng: 170.463352}-->
<!--      ]-->
<!--    </script>-->
<!--    <script src="https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/markerclusterer.js">-->
<!--    </script>-->
<!--    <script async defer-->
<!--    src="https://maps.googleapis.com/maps/api/js?key=AIzaSyB8ulqiypfh1h1_4llCrZgcvhf5LDns27c&callback=initMap">-->
<!--    </script>-->
<!--  </body>-->
<!--</html> -->
<!---->
<!---->
<!---->
<!---->
<!---->
<!---->
<!---->
<!---->
<!---->
<!---->
<!--<!DOCTYPE html>-->
<!--<html>-->
<!--  <head>-->
<!--    <title>Place Autocomplete Address Form</title>-->
<!--    <meta name="viewport" content="initial-scale=1.0, user-scalable=no">-->
<!--    <meta charset="utf-8">-->
<!--    <style>-->
<!--      /* Always set the map height explicitly to define the size of the div-->
<!--       * element that contains the map. */-->
<!--      #map {-->
<!--        height: 100%;-->
<!--      }-->
<!--      /* Optional: Makes the sample page fill the window. */-->
<!--      html, body {-->
<!--        height: 100%;-->
<!--        margin: 0;-->
<!--        padding: 0;-->
<!--      }-->
<!--    </style>-->
<!--    <link type="text/css" rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500">-->
<!--    <style>-->
<!--      #locationField, #controls {-->
<!--        position: relative;-->
<!--        width: 480px;-->
<!--      }-->
<!--      #autocomplete {-->
<!--        position: absolute;-->
<!--        top: 0px;-->
<!--        left: 0px;-->
<!--        width: 99%;-->
<!--      }-->
<!--      .label {-->
<!--        text-align: right;-->
<!--        font-weight: bold;-->
<!--        width: 100px;-->
<!--        color: #303030;-->
<!--      }-->
<!--      #address {-->
<!--        border: 1px solid #000090;-->
<!--        background-color: #f0f0ff;-->
<!--        width: 480px;-->
<!--        padding-right: 2px;-->
<!--      }-->
<!--      #address td {-->
<!--        font-size: 10pt;-->
<!--      }-->
<!--      .field {-->
<!--        width: 99%;-->
<!--      }-->
<!--      .slimField {-->
<!--        width: 80px;-->
<!--      }-->
<!--      .wideField {-->
<!--        width: 200px;-->
<!--      }-->
<!--      #locationField {-->
<!--        height: 20px;-->
<!--        margin-bottom: 2px;-->
<!--      }-->
<!--    </style>-->
<!--  </head>-->
<!---->
<!--  <body>-->
<!--    <div id="locationField">-->
<!--      <input id="autocomplete" placeholder="Enter your address"-->
<!--             onFocus="geolocate()" type="text"></input>-->
<!--    </div>-->
<!---->
<!---->
<!--    <script>-->
<!--      // This example displays an address form, using the autocomplete feature-->
<!--      // of the Google Places API to help users fill in the information.-->
<!---->
<!--      // This example requires the Places library. Include the libraries=places-->
<!--      // parameter when you first load the API. For example:-->
<!--      // <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places">-->
<!---->
<!--      var placeSearch, autocomplete;-->
<!--      var componentForm = {-->
<!--        street_number: 'short_name',-->
<!--        route: 'long_name',-->
<!--        locality: 'long_name',-->
<!--        administrative_area_level_1: 'short_name',-->
<!--        country: 'long_name',-->
<!--        postal_code: 'short_name'-->
<!--      };-->
<!---->
<!--      function initAutocomplete() {-->
<!--        // Create the autocomplete object, restricting the search to geographical-->
<!--        // location types.-->
<!--        autocomplete = new google.maps.places.Autocomplete(-->
<!--            /** @type {!HTMLInputElement} */(document.getElementById('autocomplete')),-->
<!--            {types: ['geocode']});-->
<!---->
<!--        // When the user selects an address from the dropdown, populate the address-->
<!--        // fields in the form.-->
<!--        autocomplete.addListener('place_changed', fillInAddress);-->
<!--      }-->
<!---->
<!---->
<!--      // Bias the autocomplete object to the user's geographical location,-->
<!--      // as supplied by the browser's 'navigator.geolocation' object.-->
<!--      function geolocate() {-->
<!--        if (navigator.geolocation) {-->
<!--          navigator.geolocation.getCurrentPosition(function(position) {-->
<!--            var geolocation = {-->
<!--              lat: position.coords.latitude,-->
<!--              lng: position.coords.longitude-->
<!--            };-->
<!--            var circle = new google.maps.Circle({-->
<!--              center: geolocation,-->
<!--              radius: position.coords.accuracy-->
<!--            });-->
<!--            autocomplete.setBounds(circle.getBounds());-->
<!--          });-->
<!--        }-->
<!--      }-->
<!--    </script>-->
<!--    <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyB8ulqiypfh1h1_4llCrZgcvhf5LDns27c&libraries=places&callback=initAutocomplete"-->
<!--        async defer></script>-->
<!--  </body>-->
<!--</html>-->





<!DOCTYPE html>
<html>
<head>
    <title>Place Autocomplete</title>
    <meta name="viewport" content="initial-scale=1.0, user-scalable=no">
    <meta charset="utf-8">
    <style>
        /* Always set the map height explicitly to define the size of the div
         * element that contains the map. */
        #map {
            height: 100%;
        }
        /* Optional: Makes the sample page fill the window. */
        html, body {
            height: 100%;
            margin: 0;
            padding: 0;
        }
        .controls {
            margin-top: 10px;
            border: 1px solid transparent;
            border-radius: 2px 0 0 2px;
            box-sizing: border-box;
            -moz-box-sizing: border-box;
            height: 32px;
            outline: none;
            box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
        }

        #pac-input {
            background-color: #fff;
            font-family: Roboto;
            font-size: 15px;
            font-weight: 300;
            margin-left: 12px;
            padding: 0 11px 0 13px;
            text-overflow: ellipsis;
            width: 300px;
        }

        #pac-input:focus {
            border-color: #4d90fe;
        }

        .pac-container {
            font-family: Roboto;
        }

        #type-selector {
            color: #fff;
            background-color: #4d90fe;
            padding: 5px 11px 0px 11px;
        }

        #type-selector label {
            font-family: Roboto;
            font-size: 13px;
            font-weight: 300;
        }
    </style>
</head>
<body>
<input id="pac-input" class="controls" type="text"
       placeholder="Enter a location">

<input id="pac-input2" class="controls" type="text"
       placeholder="Enter a location">
<div id="map"></div>

<script>
    // This example requires the Places library. Include the libraries=places
    // parameter when you first load the API. For example:
    // <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places">

    function initMap() {
        var map = new google.maps.Map(document.getElementById('map'), {
            center: {lat: -33.8688, lng: 151.2195},
            zoom: 13
        });
        var input = /** @type {!HTMLInputElement} */(
            document.getElementById('pac-input'));
        var autocomplete1 = new google.maps.places.Autocomplete(input);
        autocomplete1.bindTo('bounds', map);

        var input2 = /** @type {!HTMLInputElement} */(
            document.getElementById('pac-input2'));
        var autocomplete2 = new google.maps.places.Autocomplete(input2);
        autocomplete2.bindTo('bounds', map);



//
//        var infowindow = new google.maps.InfoWindow();
//        var marker = new google.maps.Marker({
//            map: map,
//            anchorPoint: new google.maps.Point(0, -29)
//        });

        autocomplete1.setTypes([]);
        autocomplete2.setTypes([]);

        autocomplete1.addListener('place_changed', function() {
            infowindow.close();
            marker.setVisible(false);
            var place = autocomplete1.getPlace();
            if (!place.geometry) {
                // User entered the name of a Place that was not suggested and
                // pressed the Enter key, or the Place Details request failed.
                window.alert("No details available for input: '" + place.name + "'");
                return;
            }

            // If the place has a geometry, then present it on a map.
            if (place.geometry.viewport) {
                map.fitBounds(place.geometry.viewport);
            } else {
                map.setCenter(place.geometry.location);
                map.setZoom(17);  // Why 17? Because it looks good.
            }
            marker.setIcon(/** @type {google.maps.Icon} */({
                url: place.icon,
                size: new google.maps.Size(71, 71),
                origin: new google.maps.Point(0, 0),
                anchor: new google.maps.Point(17, 34),
                scaledSize: new google.maps.Size(35, 35)
            }));
            marker.setPosition(place.geometry.location);
            marker.setVisible(true);

            var address = '';
            if (place.address_components) {
                address = [
                    (place.address_components[0] && place.address_components[0].short_name || ''),
                    (place.address_components[1] && place.address_components[1].short_name || ''),
                    (place.address_components[2] && place.address_components[2].short_name || '')
                ].join(' ');
            }

            infowindow.setContent('<div><strong>' + place.name + '</strong><br>' + address);
            infowindow.open(map, marker);
        });
//        autocomplete2.addListener('place_changed', function() {
//            infowindow.close();
//            marker.setVisible(false);
//            var place = autocomplete1.getPlace();
//            if (!place.geometry) {
//                // User entered the name of a Place that was not suggested and
//                // pressed the Enter key, or the Place Details request failed.
//                window.alert("No details available for input: '" + place.name + "'");
//                return;
//            }
//
//            // If the place has a geometry, then present it on a map.
//            if (place.geometry.viewport) {
//                map.fitBounds(place.geometry.viewport);
//            } else {
//                map.setCenter(place.geometry.location);
//                map.setZoom(17);  // Why 17? Because it looks good.
//            }
//            marker.setIcon(/** @type {google.maps.Icon} */({
//                url: place.icon,
//                size: new google.maps.Size(71, 71),
//                origin: new google.maps.Point(0, 0),
//                anchor: new google.maps.Point(17, 34),
//                scaledSize: new google.maps.Size(35, 35)
//            }));
//            marker.setPosition(place.geometry.location);
//            marker.setVisible(true);
//
//            var address = '';
//            if (place.address_components) {
//                address = [
//                    (place.address_components[0] && place.address_components[0].short_name || ''),
//                    (place.address_components[1] && place.address_components[1].short_name || ''),
//                    (place.address_components[2] && place.address_components[2].short_name || '')
//                ].join(' ');
//            }
//
//            infowindow.setContent('<div><strong>' + place.name + '</strong><br>' + address);
//            infowindow.open(map, marker);
//        });
    }
</script>
<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyB8ulqiypfh1h1_4llCrZgcvhf5LDns27c&libraries=places&callback=initMap"
async defer></script>
</body>


</html>




