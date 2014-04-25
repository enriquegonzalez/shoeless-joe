$(document).ready( function () {
  	$('nav section ul li a[href^="/' + location.pathname.split("/")[1] + '"]').addClass('active');
});