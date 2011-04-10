!SLIDE full-page
# Performance #
Handling a lot of data (or "getting hardcore")

* user perceived latency – how long it takes for the page to appear usable, in
this case for the map to be rendered
* page ready time - how long it takes for the page to become usable, e.g. for
the map to be draggable
* page load time - how long it takes for all the elements to be present, in the
case of maps this includes all of the map controls to be loaded and working

!SLIDE full-page

## to many markers on map

## marker rendering speed

## to much data, load time

## to many javascript objects or dom elements

## usability problem

!SLIDE full-page

# Solution? Depends on reqs?
* map interaction
* information detail on different levels
* target platform, ipad or chrome
* data structure, volatile, size, update frequency

!SLIDE full-page

# Measure it
* how do you measure it, find problems
 * firebug/chrome developer tools
  * data loading time
  * profiling, function calls
  * console.log, events when overlay added, map events
 * http://jsperf.com/browse
 * Online Marker tests
 * Test with different browsers on a slow computer?

!SLIDE full-page

# Methods of improvement

* clustering
  * client side clustering
  * server side clustering

Clustering techniques
- Beratta att det finns lite olika tekniker, visa bilder lite snabbt
Grid-based Clustering
Regional clusrering
Distance-based Clustering
K-means clustering
http://en.wikipedia.org/wiki/K-means_clustering
http://www.svennerberg.com/2009/01/handling-large-amounts-of-markers-in-google-maps/

MarkerClusterer
-what is it
gridbased!
-demo
-http://google-maps-utility-library-v3.googlecode.com/svn/trunk/markerclusterer/examples/advanced_example.html
speed test clustering
http://www.svennerberg.com/examples/markers/markerPerformance.html

MarkerManager
-what is it
-demo
- http://google-maps-utility-library-v3.googlecode.com/svn/tags/markermanager/1.0/docs/reference.html

Marker Manager

Serverside clustering
-what is it
-demo
http://www.usda.gov/recovery/map/
http://www.geograph.org.uk/mapper/clusters.php#ll=54.55,-3.88&z=6&t=p&r=c
Try ZeeMaps (http://www.zeemaps.com). We apply several heuristics to improve
the loading time when you have large number of markers. For less than 5,000
markers we use a fast clustering algorithm, and only display visible markers.
For more than 5,000 markers we use server-side tiling.

Marker light

SuperMarker

!SLIDE full-page

Static view (with interaction)
KML
Heatmaps (gheatmap, api etc)
Generated tiles
FusionTable

!SLIDE full-page

* google fusion table example
Vad erbjuder fusion table for maps, areamap, heartmap, custom border

!SLIDE full-page

* data simplification
* simplify polylines
* fetch data more efficient
 * slim down your protocol
 * fetch using boundingbox
 * divide data, overlayinfo, markerinfo

http://code.google.com/intl/sv-SE/apis/maps/documentation/utilities/polylinealgorithm.html
how to code polylines smart, raksträckor tex brezenhams?

DOM elements, listeners js objects 
The latter pattern is more efficient, with 1 modification.  Rather than
creating a listener function in each call to .addListener(), create your
listener function once and add that same listener to all markers.  Reducing
the number of Objects like this helps older browsers especially.
Render GIFs for IE, instead of alpha PNGs
GMarker ger 5 DOM nodes, egen div ger div med img ger 2.

!SLIDE full-page

# RANDOM STUFF?

http://nickjohnson.com/b/google-maps-v3-how-to-quickly-add-many-markers

Render GIFs for IE, instead of alpha PNGs
http://www.svennerberg.com/2009/01/handling-large-amounts-of-markers-in-google-maps/

http://code.google.com/intl/sv-SE/apis/maps/articles/toomanymarkers.html

http://gmaps-samples-v3.googlecode.com/svn/trunk/toomanymarkers/toomanymarkers.html

http://code.google.com/intl/sv-SE/apis/maps/documentation/javascript/v2/mediagallery.html

Andra delar
 - google streetview
 - google earth
 - google direction

 - om popdevelop
 - om mig/seb

Visa vad man kan göra, ingen teknik?

# bra exempel

# slutet

http://map.baidu.com/
the wilderness downtown
svenska varianten, malmo
 android 3d maps
http:// - mapnificient.com?
http://www.youtube.com/watch?v=XNsrj5bE2qI
http://www.youtube.com/watch?v=w44cdIOor7E

http://googlemapsmania.blogspot.com/
http://move.rmi.org/features/oilmap.html
http://fundrace.huffingtonpost.com/
http://maptd.com/map/earthquake_activity_vs_nuclear_power_plants/
http://www.redfin.com/homes-for-sale#!lat=37.78681721535732&long=-122.44922089716879&market=sanfrancisco&region_id=17151&region_type=6&sf=1,2&v=6&zoomLevel=12
http://www.nytimes.com/interactive/2010/01/10/nyregion/20100110-netflix-map.html?src=tp
http://projects.nytimes.com/crime/homicides/map
http://maptd.com/map/earthquake_activity_vs_nuclear_power_plants/
geocoding av tweets location to state
2210 mashups online
http://www.programmableweb.com/api/google-maps/mashups
heatmap
http://boston.povo.com/Boston?heatmap&query=pizza&tags=pizza%2csandwiches,pasta&center=42.30879983710441,-71.0595703125&zoom=11

