
$(document).ready(function(){
  $('.carousel.carousel-slider').carousel({fullWidth: true}, {duration: 300});
  $('.carousel').carousel({indicators: true});
  $('.parallax').parallax();
  $('.scrollspy').scrollSpy();
  $('.slider').slider();
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
            $('#menu').fadeOut(550);
        }
    });
});

});
}(jQuery));
