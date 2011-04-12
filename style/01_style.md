!SLIDE center light-on-dark
![background](styling.jpg)
# 3. Styling Google maps #
### Unstyled is pretty boring... ###


!SLIDE full-page
# Custom marker #
By using Googles [Custom Overlay Class](http://code.google.com/intl/sv-SE/apis/maps/documentation/javascript/overlays.html#SubClassing)
we can create our own marker using any HTML/CSS we want

![Custom marker](custom_marker.png)

### Example from [taglaget.nu](http://taglaget.nu) ###

!SLIDE full-page
# Custom marker, code #
    @@@ javascript
    /* Create marker class */
    function MyMarker(...) { ... };
    /* "Subclass" OverlayView */
    MyMarker.prototype = new google.maps.OverlayView()
    /* Implement "virtual" functions */
    MyMarker.prototype.onAdd = function() { ... };
    MyMarker.prototype.draw = function() { ... };

### [Full example](http://code.google.com/intl/sv-SE/apis/maps/documentation/javascript/overlays.html#SubClassing) ###

!SLIDE full-page
# Custom tiles #
### From [may 2010](http://googlegeodevelopers.blogspot.com/2010/05/add-touch-of-style-to-your-maps.html) Google allows styling of their tiles: ###

* Control of map features
* Simplification of features
* Control of map colors

!SLIDE full-page googlemap2
# Here we go! #
This is what google maps can look like
<div class="gmaps">
  <div id="canvas2">
  </div>
</div>
<script>
(function() {
  var theme = [
    {
      featureType: "water",
      elementType: "all",
      stylers: [
        { visibility: "on" },
        { hue: "#ff00bb" },
        { saturation: 100 }
      ]
    },{
      featureType: "landscape",
      elementType: "all",
      stylers: [
        { saturation: 94 },
        { hue: "#6e00ff" },
        { visibility: "off" }
      ]
    },{
      featureType: "road",
      elementType: "all",
      stylers: [
        { visibility: "off" }
      ]
    },{
      featureType: "administrative",
      elementType: "all",
      stylers: [
        { visibility: "off" }
      ]
    },{
      featureType: "poi",
      elementType: "all",
      stylers: [
        { visibility: "off" }
      ]
    }
  ]
  var style = new google.maps.StyledMapType(theme, { name: "hellokitty"});

  var map = new google.maps.Map(document.getElementById("canvas2"), Gmap.OptionsUI());
  map.mapTypes.set('hellokitty', style);
  map.setMapTypeId('hellokitty');
  $('.googlemap2').bind("showoff:show", function() {
    google.maps.event.trigger(map, 'resize');
    map.setCenter(Gmap.LatLng());
  });
}());
</script>

!SLIDE full-page
# ' #
# Style notation #
    @@@ javascript
    {
      featureType: "water",
      elementType: "all",
      stylers: [
        { visibility: "on" },
        { hue: "#ff00bb" },
        { saturation: 100 }
      ]
    },{
      featureType: "landscape",
      elementType: "all",
      stylers: [
        { saturation: 94 },
        { hue: "#6e00ff" },
        { visibility: "off" }
      ]
    },
    ...
Try it at [Google custom style wizard](http://gmaps-samples-v3.googlecode.com/svn/trunk/styledmaps/wizard/index.html "Wizard")

!SLIDE full-page

# Custom Static Tiles
![Custom Tiles](customtiles.png)

[Custom tiles with Mapbox](http://demo.mapbox.com/dc-nightvision.html)


!SLIDE full-page
# Custom controls #

* Default controls can be turned off

`disableDefaultUI: true /* in init-options */`

* Control map programatically

`map.setCenter(<LatLng>);`
`map.setZoom(<integer>);`

* Make controls with HTML/JS

!SLIDE full-page googlemap3
# Example: own zoom buttons #
<button id="zoomin">Zoom in</button>
<button id="zoomout">Zoom out</button>
<button id="gowest">Go west!</button>
<div class="gmaps">
  <div id="canvas3">
  </div>
</div>
<script>
(function() {
  var map = new google.maps.Map(document.getElementById("canvas3"), Gmap.OptionsUI());
  var zoom = map.getZoom();
  $('.googlemap3').bind("showoff:show", function() {
    google.maps.event.trigger(map, 'resize');
    map.setCenter(Gmap.LatLng());
  });
  $('#zoomin').click(function() { map.setZoom(++zoom); })
  $('#zoomout').click(function() { map.setZoom(--zoom); })
  $('#gowest').click(function() {
    var p = map.getCenter();
    var c = new google.maps.LatLng(p.lat(), p.lng() - 0.1);
    map.setCenter(c);
  });
}());
</script>
