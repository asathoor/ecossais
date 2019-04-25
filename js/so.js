$(document).ready(function(){

  let showSelected = function(a,z){ // will show the selected time interval
  let myToken = 'pk.eyJ1IjoiYXNhdGhvb3IiLCJhIjoiY2oyd3hlbzU3MDA5NzJxbm9iMjczanJndCJ9.HahDB7Z1rrD5THIYQh6t4g';

    // get data
    $.getJSON("js/so.geojson", function(json) {

      // Mapbox
      mapboxgl.accessToken = 'pk.eyJ1IjoiYXNhdGhvb3IiLCJhIjoiY2oyd3hlbzU3MDA5NzJxbm9iMjczanJndCJ9.HahDB7Z1rrD5THIYQh6t4g';
      const map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/asathoor/cju2l8xd307yp1gs48wjaq5xo',
        center: [10.000, 60.0],
        zoom: 3.0,
      });

      // Add zoom and rotation controls to the map.
      map.addControl(new mapboxgl.NavigationControl());

      // array in order to save and sort data
      // format: year, what
      // will also clear data
      historik = new Array();

      // clear the #info box
      $('#info').html('');

      for( i = 0; i < json.features.length ; i++ ){

        if (json.features[i].properties.year >= a && json.features[i].properties.year <= z) { // ok

          // console.log(json.features[i].properties.year);

          // create a HTML element for each feature
          var el = document.createElement('div');
          el.className = 'marker';

          // check whether year is defined
          if(json.features[i].properties.year){
            year = json.features[i].properties.year;
          }
          else {
            year = '';
          }

          // check whether what is defined
          if(json.features[i].properties.what){
            what = json.features[i].properties.what;
          }
          else {
            what = '';
          }

          // check whether month is defined
          if(json.features[i].properties.month){
            month = json.features[i].properties.month;
          }
          else {
            month = '';
          }

          // check whether day is defined
          if(json.features[i].properties.day){
            day = json.features[i].properties.day;
          }
          else {
            day = '';
          }

          // check whether day is defined
          if(json.features[i].properties.url){
            url = '<br><a href="' + json.features[i].properties.url + '">Read more</a>';
          }
          else {
            url = '';
          }

          // check whether day is defined
          if(json.features[i].properties.source){
            source = 'Source: ' + json.features[i].properties.source;
          }
          else {
            source = '';
          }

          // +year, +month, +day, +what, +url, source

          // save our findings
          historik.push( [year, what] );

          // make a marker for each feature and add to the map
          new mapboxgl.Marker(el)
            .setLngLat(json.features[i].geometry.coordinates)
            .setPopup(new mapboxgl.Popup({ offset: 25 }) // add popups
            .setHTML('<strong>' + year + '</strong><br>' + what + '</p>'))
            .addTo(map);
          }
        }

        // SORT ARRAY AND FORMAT THE RESULT TABLE
        // options: +year, month, day, +what, url, source
        historik.sort(); // sort Array

        for (n=0;n<historik.length;n++){ // add to #info
          $('#info').append( '<tr>'
          + '<td>' +  historik[n][0] + '</td>'
          + '<td>'  + historik[n][1]
          + '<span class="source">' + source + '</span>'
          + url
          + '<br>'
          +  '</td>'
          + '</tr>');
        }
    });
  }

  // initial map
  showSelected('1717','1718');

  // Buttons: select timespan
  $('#btn1').click(function(){
    showSelected(1660,1680);
    $('#lead').text( '1660 - 1680' );
  });

  $('#btn2').click(function(){
    showSelected(1680,1700);
    $('#lead').text( '1680 - 1700' );
  });

  $('#btn3').click(function(){
    showSelected(1700,1720);
    $('#lead').text( '1700 - 1720 PGL founded' );
  });

  $('#btn4').click(function(){
    showSelected(1720,1740);
    $('#lead').text( '1720 - 1740' );
  });

  $('#btn5').click(function(){
    showSelected(1740,1760);
    $('#lead').text( '1740 - 1760' );
  });

  $('#btn6').click(function(){
    showSelected(1760,1780);
    $('#lead').text( '1760 - 1780' );
  });

  $('#btn7').click(function(){
    showSelected(1780,1800);
    $('#lead').text( '1780 - 1800' );
  });

  $('#btn8').click(function(){
    showSelected(1800,1820);
    $('#lead').text( '1800 - 1820' );
  });

  $('#btn9').click(function(){
    showSelected(1820,1840);
    $('#lead').text( '1820 - 1840' );
  });

  $('#btn10').click(function(){
    showSelected(1840,1860);
    $('#lead').text( '1840 - 1860' );
  });

  $('#btn11').click(function(){
    showSelected(0,2100);
  });

  $('#btn12').click(function(){
    showSelected(0,0);
    $('#lead').text( '1840 - 1860' );
    console.log(12);
  });

  $('#btn13').click(function(){
    console.log('btn13');
    $('#lead').text( 'The 1745 - 1746 Jacobite Rising' );
    showSelected(1745,1746);
  });

  $('#map').css('height: ' + window.clientHeight + 'px');

}); // end doc ready
