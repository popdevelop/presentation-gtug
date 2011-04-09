!SLIDE full-page
<div id="map_canvas">TEXT</div>
<script>
    console.log("here");
    function initialize() {
            console.log("init me!");
            var myLatlng = new google.maps.LatLng(-34.397, 150.644);
            var myOptions = {
              zoom: 8,
              center: myLatlng,
                      mapTypeId: google.maps.MapTypeId.ROADMAP
            }
            var map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);
            console.log("done init me!");
    }
    console.log("here 2");

    var headID = document.getElementsByTagName("head")[0];
    var newScript = document.createElement('script');
    newScript.type = 'text/javascript';
    newScript.src = 'http://maps.google.com/maps/api/js?sensor=false';
    newScript.onload= function () {
         console.log("trigger me 2");
         initialize();
    }
    newScript.onreadystatechange= function () {
         console.log("trigger me");
         if (this.readyState == 'complete') initialize();
    }
    headID.appendChild(newScript);
    console.log("here 3");

</script>
!SLIDE custom_and_unique_class
# 1st Example h1
<script>
// bind to custom event
$(".custom_and_unique_class").bind("showoff:show", function (event) {
  // animate the h1
  var h1 = $(event.target).find("h1");
  h1.delay(500)
    .slideUp(300, function () { $(this).css({textDecoration: "line-through"}); })
    .slideDown(300);
});
</script>

!SLIDE full-page
# performance #

Prestanda, visa lite olika matningar, vad tar tid

Vad erbjuder fusion table for maps, areamap, heartmap, custom border

Klustering

prefetch-data

Olika delar av performance,

hämta, rendera, lagg vid många markers

minifiera datan man hämtar

Try ZeeMaps (http://www.zeemaps.com). We apply several heuristics to improve
the loading time when you have large number of markers. For less than 5,000
markers we use a fast clustering algorithm, and only display visible markers.
For more than 5,000 markers we use server-side tiling.

http://en.wikipedia.org/wiki/K-means_clustering

Grid Clustering

MarkerCluster

MarkerManager

http://code.google.com/p/google-maps-utility-library-v3/wiki/Libraries

http://www.svennerberg.com/2009/01/handling-large-amounts-of-markers-in-google-maps/

The latter pattern is more efficient, with 1 modification.  Rather than 
creating a listener function in each call to .addListener(), create your 
listener function once and add that same listener to all markers.  Reducing 
the number of Objects like this helps older browsers especially. 

Render GIFs for IE, instead of alpha PNGs

http://code.google.com/intl/sv-SE/apis/maps/articles/toomanymarkers.html
These varied approaches are outlined in the following sections:
Grid-based Clustering
Distance-based Clustering
Viewport Marker Management
Flash
Fusion Tables
MarkerClusterer
MarkerManager

