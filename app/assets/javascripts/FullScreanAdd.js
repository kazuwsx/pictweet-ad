$(document).ready(function(envet) {

  var eventCount = 0;

  if(eventCount === 1) {

    event.preventDefault();

  } else {

    setInterval(function(){
      $(".popup").fadeIn();
    },1000);

    $(".black_cover,.close_button").click(function(){
        $(".popup").fadeOut();
    });

    eventCount++;

  }

});
