$(document).ready(function() {

  var TrakkingAdd = $(".TrakkingAdd");

  $(window).on("scroll", function() {

    if ($(this).scrollTop() > 100) {
      TrakkingAdd.slideDown("fast");
    } else {
      TrakkingAdd.slideUp("fast")
    }

    TrakkingAdd.css({
                "bottom": "0px"
    });

  });

});
