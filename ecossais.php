<!doctype html>
<html lang="en">

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>jQuery UI Slider - Range slider</title>
  <link rel="stylesheet" href="bower_components/jquery-ui/themes/humanity/jquery-ui.css">
  <link rel="stylesheet" href="css/css.css">
  <script src="bower_components/jquery/dist/jquery.js"></script>
  <script src="bower_components/jquery-ui/jquery-ui.js"></script>

  <!-- mapbox -->
  <script src='https://api.tiles.mapbox.com/mapbox-gl-js/v0.53.0/mapbox-gl.js'></script>
  <link href='https://api.tiles.mapbox.com/mapbox-gl-js/v0.53.0/mapbox-gl.css' rel='stylesheet' />
  <link href='css/css.css' rel='stylesheet' />

  <!-- scripts: load geoJson data and the marker script -->
  <script src="js/ecossais.js"></script>
</head>

<body>
  <div class="wrapper">

      <div id="map"></div>

      <div>
        <h1>Development of the Ecossais Lodges</h1>
        <h2 id="lead"></h2>
        <table id="info"></table>
      </div>

      <nav id="btns">
        <button class="ui-button ui-widget ui-corner-all" id="btn11">Show all</button><br>
        <button class="ui-button ui-widget ui-corner-all" id="btn12">Hide all</button><br>
        <!-- button class="ui-button ui-widget ui-corner-all" id="btn1">1660 - 1680</button><br -->
        <button class="ui-button ui-widget ui-corner-all" id="btn2">1680 - 1700</button><br>
        <button class="ui-button ui-widget ui-corner-all" id="btn3">1700 - 1720</button><br>
        <button class="ui-button ui-widget ui-corner-all" id="btn4">1720 - 1740</button><br>
        <button class="ui-button ui-widget ui-corner-all" id="btn13">1745 Rising</button><br>
        <button class="ui-button ui-widget ui-corner-all" id="btn5">1740 - 1760</button><br>
        <button class="ui-button ui-widget ui-corner-all" id="btn6">1760 - 1780</button><br>
        <button class="ui-button ui-widget ui-corner-all" id="btn7">1780 - 1800</button><br>
        <button class="ui-button ui-widget ui-corner-all" id="btn8">1800 - 1820</button><br>
        <button class="ui-button ui-widget ui-corner-all" id="btn9">1820 - 1840</button><br>
        <button class="ui-button ui-widget ui-corner-all" id="btn10">1840 - 1860</button><br>
        <a href="https://en.wikipedia.org/wiki/Jacobite_risings">Jacobite Risings: 1689, 1696, 1708, 1715, 1719, 1744 - 1745, 1759</a>
      </nav>


    </div><!-- .wrapper -->

    <footer>
      &copy; Per Thykjær Jensen, 2019
    </footer>



</body>
</body>
</html>
