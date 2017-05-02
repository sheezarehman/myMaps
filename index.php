<!DOCTYPE html>
<html>
  <head>
      <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet">
      <link rel="stylesheet" type="text/css" href="css/style.css">
  </head>
  <body>
    <h3>My Google Maps Demo</h3>
    <div class="right">
        <form action="" method="GET" class="form-inline">
            <div class="form-group">
                <label for="start">Départ:</label>
                <input type="text" name="start" class="form-control" id="start">
                <label for="start2"><input type="checkbox">current location</label>
            </div>
            <br>
            <div class="form-group">
                <label for="end">Arrivée:</label>
                <input type="text" name="end" class="form-control" id="end">
                <label for="end2"><input type="checkbox">current location</label>
            </div>
            <br>
            <button type="submit" class="btn btn-default">Submit</button>
        </form>
    </div>
    <div id="map"></div>
    <script src="js/javascript.js"></script>
    <script async defer
    src="https://maps.googleapis.com/maps/api/js?key=AIzaSyB8ulqiypfh1h1_4llCrZgcvhf5LDns27c&callback=initMap">
    </script>
  </body>
</html>
