$(document).ready(function () {
  $('.menu-button').click(function(event) {
      $('.hamburger-menu,.header-menu').toggleClass('active');
      $('body').toggleClass('lock');
  });
});