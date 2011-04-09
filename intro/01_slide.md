!SLIDE full-page
# Google Maps on the web #
## Popdevelop 13/4 - 2011 ##

!SLIDE full-page
# Introduction #
* Google Maps V3
* Completely re-written from V2


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

`var map = new google.maps.Map(document.getElementById(...), { ... });`

!SLIDE full-page googlemap
# Standard Google map #
This is what you get!
<div id="gmaps"><div id="canvas"></div></div>
<script>
  var latlng = new google.maps.LatLng(-34.397, 150.644);
  var myOptions = {
    zoom: 8,
    center: latlng,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };
  var map = new google.maps.Map(document.getElementById("canvas"), myOptions);
  google.maps.event.trigger(map, 'resize');
  $('.googlemap').bind("showoff:show", function() {
    google.maps.event.trigger(map, 'resize');
    map.setCenter(latlng);
  });
</script>

