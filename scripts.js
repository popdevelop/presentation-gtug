document.writeln('<script type="text/javascript" src="http://maps.google.com/maps/api/js?sensor=false"></script>');

$(document).ready(function() {
  setTimeout(function() {
    Cufon.replace('h1');
    Cufon.replace('h2');
    Cufon.replace('h3');
  }, 400);
});

var Gmap = {
  LatLng: function() {
    return new google.maps.LatLng(55.588047, 13.000946);
  },
  Options: function() {
    var latlng = this.LatLng();
    var myOptions = {
      zoom: 8,
      center: latlng,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    return myOptions;
  },
  OptionsUI: function() {
    var opts = this.Options();
    opts.disableDefaultUI = true;
    return opts;
  }
};
