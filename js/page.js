
$(document).ready(function(){

  $('.parallax').parallax();
  $('.scrollspy').scrollSpy();
  $('.carousel.carousel-slider').carousel({fullWidth: true});
  $('.button-collapse').sideNav();

});

// navbar reveal on scroll controls
(function ($) {
$(document).ready(function(){

// hide .navbar first
$('#menu').hide();

// fade in .navbar
$(function () {
    $(window).scroll(function () {

             // set distance user needs to scroll before we start fadeIn
        if ($(this).scrollTop() > 400) {
            $('#menu').fadeIn(550);
        } else {
            $('#menu').fadeOut(300);
        }
    });
});

});
}(jQuery));

jQuery(document).ready(function ($) {

  var jssor_1_options = {
    $AutoPlay: true,
    $SlideDuration: 800,
    $SlideEasing: $Jease$.$OutQuint,
    $ArrowNavigatorOptions: {
      $Class: $JssorArrowNavigator$
    },
    $BulletNavigatorOptions: {
      $Class: $JssorBulletNavigator$
    }
  };

  var jssor_1_slider = new $JssorSlider$("jssor_1", jssor_1_options);

  /*responsive code begin*/
  /*you can remove responsive code if you don't want the slider scales while window resizing*/
  function ScaleSlider() {
      var refSize = jssor_1_slider.$Elmt.parentNode.clientWidth;
      if (refSize) {
          refSize = Math.min(refSize, 1920);
          jssor_1_slider.$ScaleWidth(refSize);
      }
      else {
          window.setTimeout(ScaleSlider, 30);
      }
  }
  ScaleSlider();
  $(window).bind("load", ScaleSlider);
  $(window).bind("resize", ScaleSlider);
  $(window).bind("orientationchange", ScaleSlider);
  /*responsive code end*/
});
