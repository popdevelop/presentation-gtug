!SLIDE full-page

# Problems with performance

## to many markers on map

## marker rendering speed

## to much data, load time

## usability problem

## to many javascript objects?
 - vissa browsers?

!SLIDE full-page
# Solution
## depends on the requirements of you application
* map interaction
* information detail on different levels
* target platform, ipad or chrome
* data structure, volatile, size, update frequency

!SLIDE full-page

# ROI
* how do you measure it, find problems
 * firebug/chrome developer tools
  * data loading time
  * profiling, function calls
  * console.log, events when overlay added, map events
 * http://jsperf.com/browse
 * Online Marker tests

!SLIDE full-page

# Methods of improvement
* clustering
  * client side clustering
  * server side clustering
* kml layer
* browser/client optimizations
 * use different techniques depending on browser
 * use different techniques depending on speed
* hide/show is fast, rendering is slow
* fetch data more efficient
 * slim down your protocol
 * fetch using boundingbox
 * divide data, overlayinfo, markerinfo

!SLIDE full-page

* google fusion table example

!SLIDE full-page
# performance #

Its a usability problem, most methods of performance improvements relate somehow to interaction?

Prestanda, visa lite olika matningar, vad tar tid

Vad erbjuder fusion table for maps, areamap, heartmap, custom border


http://code.google.com/p/google-maps-utility-library-v3/wiki/Libraries

http://www.svennerberg.com/2009/01/handling-large-amounts-of-markers-in-google-maps/

http://nickjohnson.com/b/google-maps-v3-how-to-quickly-add-many-markers

The latter pattern is more efficient, with 1 modification.  Rather than
creating a listener function in each call to .addListener(), create your
listener function once and add that same listener to all markers.  Reducing
the number of Objects like this helps older browsers especially.

Render GIFs for IE, instead of alpha PNGs

http://code.google.com/intl/sv-SE/apis/maps/articles/toomanymarkers.html
These varied approaches are outlined in the following sections:
Viewport Marker Management
Flash
Fusion Tables
MarkerClusterer
MarkerManager

Serverside clustering
http://www.usda.gov/recovery/map/
http://www.geograph.org.uk/mapper/clusters.php#ll=54.55,-3.88&z=6&t=p&r=c
Try ZeeMaps (http://www.zeemaps.com). We apply several heuristics to improve
the loading time when you have large number of markers. For less than 5,000
markers we use a fast clustering algorithm, and only display visible markers.
For more than 5,000 markers we use server-side tiling.


Clustering techniques
http://www.appelsiini.net/2008/11/introduction-to-marker-clustering-with-google-maps

speed test clustering
http://www.svennerberg.com/examples/markers/markerPerformance.html

http://en.wikipedia.org/wiki/K-means_clustering
Grid-based Clustering
Distance-based Clustering
Grid Clustering


Andra delar
 - google streetview
 - google earth
 - google direction
 - om popdevelop
 - om mig/seb

util librarys
http://google-maps-utility-library-v3.googlecode.com/svn/tags/keydragzoom/

