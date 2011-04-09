!SLIDE full-page
# Google Maps on the web #
## Popdevelop 13/4 - 2011 ##

!SLIDE full-page
# Introduction #

!SLIDE full-page
# Google Maps basics #

!SLIDE full-page googlemap
# Standard Google map #
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
