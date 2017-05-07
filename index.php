<!DOCTYPE html>
<html>
  <head>
      <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet">
      <link rel="stylesheet" type="text/css" href="css/style.css">
  </head>
  <body>
    <h3>My Google Maps Demo</h3>
    <div class="right">
        <form action="" method="GET" class="form-inline" onsubmit="return formcheck()">
            <div class="form-group">
                <label for="start" >Départ:</label>
                <input type="text"  name="start" class="form-control" id="start" onBlur="setId(this.id)">
                <label for="start2"><input type="checkbox" name="start2" id="start2">current location</label>
            </div>
            <br>
            <div class="form-group">
                <label for="end">Arrivée:</label>
                <input type="text" name="end"  class="form-control" id="end" onBlur="setId(this.id)">
                <label for="end2"><input type="checkbox" name="end2" id="end2">current location</label>
            </div>
            <br>
            <button type="submit" class="btn btn-default">Submit</button>
        </form>

        <button onclick="reset()"> RESET</button>
    </div>
    <div id="map"></div>
    <div id="path"></div>
    <script src="js/javascript.js"></script>

    <script async defer
    src="https://maps.googleapis.com/maps/api/js?key=AIzaSyB8ulqiypfh1h1_4llCrZgcvhf5LDns27c&libraries=places&callback=initMap">
    </script>
    <script type="text/javascript" src="js/routeboxer-master/src/RouteBoxer.js"></script>
    <!--    <script type="text/javascript" src="https://maps.googleapis.com/maps/api/js?key=AIzaSyB8ulqiypfh1h1_4llCrZgcvhf5LDns27c&libraries=places"></script>-->
  </body>
</html>
