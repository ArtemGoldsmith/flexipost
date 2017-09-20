console.log('app.js has loaded!');

(function($) {
  "use strict";

  // modules requires
  let googleMaps = require('./googleMaps');
  let photoSwipe = require('./photoSwipe');
  let customFunctions = require('./customFunctions');
  let customScrollbar = require('./customScrollbar');
  let submitFunctions = require('./submitFunctions');
  let clickFunctions = require('./clickFunctions');
  let sliders = require('./sliders');

  // functions


  // document ready functions
  $(document).ready(function() {

    // modules
    photoSwipe();
    customFunctions();

    // functions
  }); // end of document ready

  // window load functions
  $(window).on('load', function() {

    // modules
    customScrollbar();

  }); // end of window load

  // initialization
  $('.selectpicker').selectpicker();
  googleMaps();
  sliders();
  submitFunctions();
  clickFunctions();


})(jQuery);
