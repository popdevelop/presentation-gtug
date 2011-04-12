document.writeln('<script type="text/javascript" src="http://maps.google.com/maps/api/js?sensor=false"></script>');
document.writeln('<script type="text/javascript" src="http://google-maps-utility-library-v3.googlecode.com/svn/trunk/markerclusterer/src/markerclusterer.js"></script>');

/* XXX: This is ugly */
$(document).ready(function() {
  setTimeout(function() {
    Cufon.replace('h1');
    Cufon.replace('h2');
    Cufon.replace('h3');
    Cufon.replace('li');

    /* Open all links in a new window */
    $("a[href^=http]").each(function(){
       console.log('a')
       if(this.href.indexOf(location.hostname) == -1) {
          $(this).attr({
             target: "_blank",
             title: "Opens in a new window"
          });
       }
    })

  }, 400);
});

$(function() {
  $('div.content').live('showoff:show', function(evt) {
    var bg_img = $('img[alt=background]', evt.target);
    if (bg_img.size() > 0) {
      var src = bg_img.attr('src');
      bg_img.hide();
      
      // Set new background on body
      $('body')
        .css('background-image', 'url(' + src + ')')
        .css('background-repeat', 'no-repeat')
        .css('background-position', 'center center')
        .css('background-attachment', 'fixed')
        .css('-webkit-background-size', 'cover')
        .css('-moz-background-size', 'cover')
        .css('-o-background-size', 'cover')
        .css('background-size', 'cover');
    } else {
      $('body').css('background-image', '');
    }
  });
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
