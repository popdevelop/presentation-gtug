!SLIDE full-page
# Styling Google maps #
Unstyled is pretty boring...

!SLIDE full-page
# Custom marker #
By using Googles [Custom Overlay Class](http://code.google.com/intl/sv-SE/apis/maps/documentation/javascript/overlays.html#SubClassing) 
we can create our own marker using any HTML/CSS we want

![Custom marker](../img/custom_marker.png)

!SLIDE full-page
# Custom tiles #
* Allows control of map features
* Allows simplification of features
* Allows control of map colors


!SLIDE full-page googlemap2
# Here we go! #
This is what google maps can look like
<div class="gmaps"><div id="canvas2"></div></div>
<script>
(function() {
  var latlng = new google.maps.LatLng(-34.397, 150.644);
  var myOptions = {
      zoom: 8,
      center: latlng,
      mapTypeId: google.maps.MapTypeId.ROADMAP
  };

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

  var map = new google.maps.Map(document.getElementById("canvas2"), myOptions);
  map.mapTypes.set('hellokitty', style);
  map.setMapTypeId('hellokitty');
  $('.googlemap2').bind("showoff:show", function() {
    google.maps.event.trigger(map, 'resize');
    map.setCenter(latlng);
  });
}());
</script>

!SLIDE full-page
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
