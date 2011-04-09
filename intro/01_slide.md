!SLIDE full-page
# Google Maps on the web #
## by Popdevelop 13/4 - 2011 ##

!SLIDE full-page
# Introduction, Google Maps V3#
* Released May 2009
* Completely re-written from V2
* Optimized "bootstrap" process
* Works well in mobile devices (webkit)
* License?

!SLIDE full-page incremental
# GIS Basics
## Tiles ##
  - Bitmap images
  - For all zoom levels
  - Non-interactive

## Feature primitives ##
  - Points
  - LineString
  - PolyLine

!SLIDE full-page
# Google Maps basics #
* Easy to get started with!
* Include library:

`<script type="text/javascript" src="http://maps.google.com/maps/api/js?sensor=set_to_true_or_false"></script>`

* Instantiate maps with options:

`var map = new google.maps.Map(<DOM Element>, { ... });`

* Control width/height with CSS

!SLIDE full-page googlemap
# Standard Google map #
This is what you get!
<div class="gmaps"><div id="canvas"></div></div>
<script>
  var latlng = new google.maps.LatLng(-34.397, 150.644);
  var myOptions = {
    zoom: 8,
    center: latlng,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };
  var map = new google.maps.Map(document.getElementById("canvas"), myOptions);
  $('.googlemap').bind("showoff:show", function() {
    google.maps.event.trigger(map, 'resize');
    map.setCenter(latlng);
  });
</script>

!SLIDE full-page
# Some Google maps features
Google maps has quite alot of built in features ready to be used. Here are a few:
## Marker ##
`var marker = new google.maps.Marker({...});`
## Info Window ##
`var infowindow = new google.maps.InfoWindow({});`
## Circles/Rectangles ##
`var cicle = new google.maps.Circle({...});`

### See them all at [Google Maps Javascript API V3 Overlays](http://code.google.com/intl/sv-SE/apis/maps/documentation/javascript/overlays.html) ###
