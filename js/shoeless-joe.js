$(document).ready( function () {

	$('window').on("load", "li a", function(){

		var $menuItem = $(this).attr('href'),
			url = window.location.protocol + "//" + window.location.host + "/" + window.location.pathname;
	   
	   if( $menuItem == url) {
	        $menuItem.addClass('active');
	   }
	});

});