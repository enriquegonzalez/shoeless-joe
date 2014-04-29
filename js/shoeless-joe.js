$(document).ready( function () {

  $('window').on("load", "li a", function(){

    $("li a").each(function () {
      var $menuItem = $(this),
          menuHref = $menuItem.attr('href');

       $("li a[href='" + window.location.href + "']").closest("li").addClass("active");
    });

  });

});
