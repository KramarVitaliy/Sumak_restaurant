$(document).ready(function () {
  $('.btn-kitchen').click(function (event) {
    $('.kitchen').toggleClass('active');
    $('.mangal').removeClass('active');
    $('.bar').removeClass('active');
    $('.banket').removeClass('active');
  });
  $('.btn-mangal').click(function (event) {
    $('.kitchen').removeClass('active');
    $('.mangal').toggleClass('active');
    $('.bar').removeClass('active');
    $('.banket').removeClass('active');
  });
  $('.btn-bar').click(function (event) {
    $('.kitchen').removeClass('active');
    $('.mangal').removeClass('active');
    $('.bar').toggleClass('active');
    $('.banket').removeClass('active');
  });
  $('.btn-banket').click(function (event) {
    $('.kitchen').removeClass('active');
    $('.mangal').removeClass('active');
    $('.bar').removeClass('active');
    $('.banket').toggleClass('active');
  });
});