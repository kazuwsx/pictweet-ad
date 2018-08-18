$(document).ready(function(envet) {

  var setTimer;


  setTimer = setInterval(function(){
    $(".popup").fadeIn();
  },1000);

  function FullScreanAdEvent() {
    $(document).on("click", function(event) {
      if($(event.target).closest(".close_button").length) {
        $(".popup").fadeOut();
        clearInterval(setTimer);
        $(document).off("click");
      } else {
        alert("しっかりボタンを押しましょう。");
      }
    });
  }

  FullScreanAdEvent();

});
