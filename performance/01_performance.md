!SLIDE center light-on-dark
![background](performance.jpg)
# 4. Performance #

<!--
Image cred to:
http://thefixedgear.wordpress.com/
-->

!SLIDE full-page googlemap_perf1

# Why?

<button id="addmarkers">Add 100 Markers</button>
<button id="clearmarkers">Clear Markers</button>
<div class="gmaps">
  <div id="perf1_canvas">
  </div>
</div>

<script>
(function() {

  var zoom = 5;
  var center = new google.maps.LatLng(55, 13);

  var map = new google.maps.Map(document.getElementById('perf1_canvas'), {
    center: center,
    zoom: zoom,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  });

  var markers = [];
  google.maps.event.addListenerOnce(map, 'bounds_changed', function() {
    $('#addmarkers').click(function() {
      var bounds = map.getBounds();
      var southWest = bounds.getSouthWest();
      var northEast = bounds.getNorthEast();
      var lngSpan = northEast.lng() - southWest.lng();
      var latSpan = northEast.lat() - southWest.lat();
      var j = 100;
      while(j--) {
        var point = new google.maps.LatLng(southWest.lat() + latSpan * Math.random(), southWest.lng() + lngSpan * Math.random());
        var marker = new google.maps.Marker({position:point, map:map});
        markers.push(marker);
      }
    });
  });
  $('#clearmarkers').click(function() {
    var i = markers.length;
    while(i--){
      markers[i].setMap(null);
    }
    markers = [];
  });
  $('.googlemap_perf1').bind("showoff:show", function() {
    google.maps.event.trigger(map, 'resize');
    map.setCenter(Gmap.LatLng());
  });
}());
</script>

(livedemo, markers)

!SLIDE full-page

# Knuth?

![Root of all evil](rootevil.jpg)

!SLIDE full-page

# Measure it
 * Chrome developer tools or Firebug
   * Network time for request
   * Profiling, function calls
 * [http://jsperf.com/browse](http://jsperf.com/browse)
 * Online Marker tests
 * Try different browsers/computers

!SLIDE full-page

# Methods of improvement

!SLIDE full-page

# Clustering
![Before Cluster](uncluster.jpg)
![After Cluster](cluster2.jpg)

!SLIDE full-page

# Clustering
* Grid-based Clustering
* Area Clustering
* Distance based clustering
* [K-means clustering](http://en.wikipedia.org/wiki/K-means_clustering)
* [Article: Clustering basics](http://home.dei.polimi.it/matteucc/Clustering/tutorial_html/)

!SLIDE full-page

# MarkerClusterer & MarkerManager

![MarkerClusterer](markerclusterer.jpg)

[MarkerManger by google](http://google-maps-utility-library-v3.googlecode.com/svn/tags/markermanager/1.0/docs/reference.html)
[MarkerClusterer by google](http://google-maps-utility-library-v3.googlecode.com/svn/trunk/markerclusterer/examples/advanced_example.html)

!SLIDE full-page googlemap_perf2

# MarkerClusterer

<button id="addmarkerscluster">Add 100 Markers with MarkerClusterer</button>
<button id="clearmarkerscluster">Clear Markers</button>
<div class="gmaps">
  <div id="perf2_canvas">
  </div>
</div>

<script>
(function() {

  var zoom = 5;
  var center = new google.maps.LatLng(55, 13);

  var map = new google.maps.Map(document.getElementById('perf2_canvas'), {
    center: center,
    zoom: zoom,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  });


  var markerCluster = new MarkerClusterer(map);
  google.maps.event.addListenerOnce(map, 'bounds_changed', function() {
    $('#addmarkerscluster').click(function() {
      var markers = [];
      var bounds = map.getBounds();
      var southWest = bounds.getSouthWest();
      var northEast = bounds.getNorthEast();
      var lngSpan = northEast.lng() - southWest.lng();
      var latSpan = northEast.lat() - southWest.lat();
      var j = 100;
      while(j--){
        var point = new google.maps.LatLng(southWest.lat() + latSpan * Math.random(), southWest.lng() + lngSpan * Math.random());
        var marker = new google.maps.Marker({'position': point});
        markers.push(marker);
      }
      markerCluster.addMarkers(markers);
      markers = [];
    });
  });
  $('#clearmarkerscluster').click(function() {
    markerCluster.clearMarkers();
  });

  $('.googlemap_perf2').bind("showoff:show", function() {
    google.maps.event.trigger(map, 'resize');
    map.setCenter(Gmap.LatLng());
  });

}());
</script>

!SLIDE full-page

# Fetch data more efficient
* Slim down your protocol
* Fetch using boundingbox

<!-- ge ett exempel -->

!SLIDE full-page

# Data simplification
![Simplify polylines](line.gif)

* Simplify data
* Encoded polylines

!SLIDE full-page

# Add Layers


    @@@ javascript
    var lay1 = new google.maps.KmlLayer('url/data.kmz');
    lay1.setMap(map);

    var lay2 = new google.maps.FusionTablesLayer(id);
    lay2.setQuery("SELECT * FROM " + id);
    lay2.setMap(map);

* Generated tiles
* Google Fusion Tables
* KML

!SLIDE full-page

#[Custom Tiles](http://maps.google.com/help/maps/elections/index.html#fundrace)

<iframe title="Us elections" width="800" height="410"
src="http://maps.google.com/help/maps/elections/index.html#fundrace"
framborder="0"></iframe>

!SLIDE full-page googlemap_perf3

# KML

<div class="gmaps">
  <div id="perf3_canvas">
  </div>
</div>
<script>
(function() {
  var zoom = 5;
  var center = new google.maps.LatLng(55, 13);

  var map = new google.maps.Map(document.getElementById('perf3_canvas'), {
    center: center,
    zoom: zoom,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  });

  var layer = new google.maps.KmlLayer(
      'http://sewa.se/municipalities.kmz', {
      preserveViewport: true, suppressInfoWindows:
      true });
  layer.setMap(map);

  $('.googlemap_perf3').bind("showoff:show", function() {
    google.maps.event.trigger(map, 'resize');
    map.setCenter(Gmap.LatLng());
  });

}());
</script>

!SLIDE full-page googlemap_perf4

# [Google Fusion Tables (Beta!)](http://www.google.com/fusiontables/DataSource?dsrcid=693476)
<div class="gmaps">
  <div id="perf4_canvas">
  </div>
</div>
<script>
(function() {
  var tableid_1 = 693476;
  var tableid_2 = 685404;
  var zoom = 5;
  var center = new google.maps.LatLng(55, 13);

  var map = new google.maps.Map(document.getElementById('perf4_canvas'), {
    center: center,
    zoom: zoom,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  });

  var layer_1 = new google.maps.FusionTablesLayer(tableid_1);
  layer_1.setQuery("SELECT * FROM " + tableid_1);
  layer_1.setMap(map);

  var layer_2 = new google.maps.FusionTablesLayer(tableid_2);
  layer_2.setMap(map);
  $('.googlemap_perf4').bind("showoff:show", function() {
    google.maps.event.trigger(map, 'resize');
    map.setCenter(Gmap.LatLng());
  });
}());
</script>
