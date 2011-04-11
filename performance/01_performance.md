!SLIDE full-page
# 3. Performance #
- Handling a lot of data!

<!--
How do you handle 30 000 markers on a maps?
How do you handle highres lines or data heavy applications?

* user perceived latency – how long it takes for the page to appear usable, in
this case for the map to be rendered
* page ready time - how long it takes for the page to become usable, e.g. for
the map to be draggable
-->

!SLIDE full-page

# Why?

* Too many markers on the map
* Marker rendering is slow
* To much data, load time
* Many js-objects or DOM elements
* Usability problem

### (byt mot bild med massa markers, eller demo?)

<!--
# Solution? Depends on reqs?
* map interaction
* information detail on different levels
* target platform, ipad or chrome
* data structure, volatile, size, update frequency
-->

!SLIDE full-page

# Knuth?

[Root of all evil](rootevil.jpg)

<!--
how do you measure it, find problems
-->

!SLIDE full-page

# Measure it
 * Chrome developer tools or Firebug
   * Network time for request
   * Profiling, function calls
 * http://jsperf.com/browse
 * Online Marker tests
 * Try different browsers

!SLIDE full-page

# Methods of improvement

!SLIDE full-page

# Sida eller Bild before,after clustering
[Cluster Image](http://media.svennerberg.com/2008/12/unclustered.jpg)

!SLIDE full-page

* Bild Grid-based Clustering
* Bild Area Clustering
* Bild Distance based clustering
* [Handle large amounts if markers in google maps](http://www.svennerberg.com/2009/01/handling-large-amounts-of-markers-in-google-maps/)
* [K-means clustering](http://en.wikipedia.org/wiki/K-means_clustering)
* [Clustering basics](http://home.dei.polimi.it/matteucc/Clustering/tutorial_html/)

<!--
# Clustering
  * Client side clustering
  * Server side clustering

- Beratta att det finns lite olika tekniker, visa bilder lite snabbt
Often distance-based Clusteringm but attributes works good also
-->

!SLIDE full-page

# MarkerClusterer
[MarkerClusterer by google](http://google-maps-utility-library-v3.googlecode.com/svn/trunk/markerclusterer/examples/advanced_example.html)

<!--
all of you have probably seen this
what is it
settings
gridbased!
demo
-->

!SLIDE full-page

#MarkerManager
[MarkerManger by google](http://google-maps-utility-library-v3.googlecode.com/svn/tags/markermanager/1.0/docs/reference.html)

<!--
MarkerManager
what is it
settings
demo
-->

!SLIDE full-page

* MarkerClusterer
* MarkerManager
* Supermarker
* Markerlight
* References
  * [MarkerTest, inline](http://gmaps-samples-v3.googlecode.com/svn/trunk/toomanymarkers/toomanymarkers.html)
  * [Speed test clustering](http://www.svennerberg.com/examples/markers/markerPerformance.html)
  * [Too many Markers by Google](http://code.google.com/intl/sv-SE/apis/maps/articles/toomanymarkers.html)
  * [SuperMarker style](http://nickjohnson.com/b/google-maps-v3-how-to-quickly-add-many-markers)

!SLIDE full-page


# Server Side clustering
<!--
what is it
why and when?
demo
hitta bra exempel!
http://www.usda.gov/recovery/map/
-->


!SLIDE full-page

# Add Layers
* Generated tiles
* Heatmaps (gheatmap, api etc)
* FusionTable
* KML
* (Som bilder?)

<!--
Generated tiles, how? tile server?
-->

!SLIDE full-page googlemap
# Standard Google map #
This is what you get!
<div class="gmaps"><div id="perf1_canvas"></div></div>
<script>
  var map = new google.maps.Map(document.getElementById("perf1_canvas"), Gmap.Options());
  $('.googlemap').bind("showoff:show", function() {
    google.maps.event.trigger(map, 'resize');
    map.setCenter(Gmap.LatLng());
  });
</script>


!SLIDE full-page googlemap

# Google Fusion Table (Beta!)

<div class="gmaps"><div id="perf2_canvas"></div></div>
<script>
  var tableid_1 = 628739;
  var tableid_2 = 685404;
  var zoom = 5;
  var center = new google.maps.LatLng(55, 13);

  var map = new google.maps.Map(document.getElementById('perf2_canvas'), {
    center: center,
    zoom: zoom,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  });

  layer_1 = new google.maps.FusionTablesLayer(tableid_1);
  layer_1.setQuery("SELECT * FROM " + tableid_1);
  layer_1.setMap(map);

  layer_2 = new google.maps.FusionTablesLayer(tableid_2);
  layer_2.setMap(map);
</script>

<!--
google fusion table example
Vad erbjuder fusion table for maps
intensity map
markers with interaction, custom marker and overlay
sql-like api from your javascript!
-->

!SLIDE full-page

# Data simplification
* Simplify polylines
* Fetch data more efficient
  * Slim down your protocol
  * Fetch using boundingbox
  * Divide data, overlayinfo, markerinfo

<!--

http://code.google.com/intl/sv-SE/apis/maps/documentation/utilities/polylinealgorithm.html
how to code polylines smart, raksträckor tex brezenhams?

DOM elements, listeners js objects
The latter pattern is more efficient, with 1 modification.  Rather than
creating a listener function in each call to .addListener(), create your
listener function once and add that same listener to all markers.  Reducing
the number of Objects like this helps older browsers especially.
Render GIFs for IE, instead of alpha PNGs
GMarker ger 5 DOM nodes, egen div ger div med img ger 2.

Render GIFs for IE, instead of alpha PNGs
-->

!SLIDE full-page

# bra exempel, flytta var?

* [Custom tiles?](https:////maptd.com/map/earthquake_activity_vs_nuclear_power_plants/)
* [Google Maps Mania](http://googlemapsmania.blogspot.com/)
* [Goole Maps Media gallery](http://code.google.com/intl/sv-SE/apis/maps/documentation/javascript/v2/mediagallery.html)
* [1](http://move.rmi.org/features/oilmap.html)
* [2](http://maptd.com/map/earthquake_activity_vs_nuclear_power_plants/)
* http://www.redfin.com/homes-for-sale#!lat=37.78681721535732&long=-122.44922089716879&market=sanfrancisco&region_id=17151&region_type=6&sf=1,2&v=6&zoomLevel=12
* http://www.nytimes.com/interactive/2010/01/10/nyregion/20100110-netflix-map.html?src=tp
* http://projects.nytimes.com/crime/homicides/map
* http://maptd.com/map/earthquake_activity_vs_nuclear_power_plants/
* http://boston.povo.com/Boston?heatmap&query=pizza&tags=pizza%2csandwiches,pasta&center=42.30879983710441,-71.0595703125&zoom=11

