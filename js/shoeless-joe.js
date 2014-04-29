$(document).ready( function () {

    $("li a").each(function () {
      var $menuItem = $(this),
          menuHref = $menuItem.attr('href');

       $("li a[href='" + window.location.href + "']").closest("li").addClass("active");
    });

});
