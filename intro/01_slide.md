!SLIDE full-page family

# The google maps family
* google maps
* google earth
* layers (kml, fusion, trafic, bicycle)
* panoramio
* elevation
* geocoding
* streetview
* directions
* ad sense maps
* transit

!SLIDE full-page
# Introduction, Google Maps V3#
* Released May 2009
* Completely re-written from V2
* Optimized "bootstrap" process
* Works well in mobile devices (webkit)


!SLIDE full-page incremental
# GIS Basics gis
## Image tiles ##
  - Bitmap images
  - For all zoom levels
  - Non-interactive

## Primitives ##
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
  var map = new google.maps.Map(document.getElementById("canvas"), Gmap.Options());
  $('.googlemap').bind("showoff:show", function() {
    google.maps.event.trigger(map, 'resize');
    map.setCenter(Gmap.LatLng());
  });
</script>

!SLIDE full-page features
# Some Google maps features
Google maps has quite alot of built in features ready to be used. Here are a few:
<br>
![Marker](../img/google-marker.jpeg)
![Infowindow](../img/infowindow.png)
![Polygons](../img/polygon.png)
## Marker ##
`var marker = new google.maps.Marker({...});`
## Info Window ##
`var infowindow = new google.maps.InfoWindow({});`
## Circles/Rectangles ##
`var cicle = new google.maps.Circle({...});`

### See them all at [Google Maps Javascript API V3 Overlays](http://code.google.com/intl/sv-SE/apis/maps/documentation/javascript/overlays.html) ###
