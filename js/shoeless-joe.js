$(document).ready( function () {

	$('li a').each(function(){
		var $x = $(this).attr('href').text(),
			url = window.location.pathname;
		console.log($x);
	   // var myHref= $(this).attr('href');
	   // if( url == myHref) {
	   //      $(this).addClass('active');
	   // }
	});

});