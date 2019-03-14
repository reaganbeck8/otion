($(function() {
    $(window).scroll(function () {
       if ($(this).scrollTop() > 600) {
          $('nav').addClass('changeColor')
       }
       if ($(this).scrollTop() < 600) {
          $('nav').removeClass('changeColor')
       }
    });
 }));
($(function() {
    $(window).scroll(function () {
       if ($(this).scrollTop() > 600) {
          $('nav').addClass('anchors')
       }
       if ($(this).scrollTop() < 600) {
          $('nav').removeClass('anchors')
       }
    });
 }));