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
        var array = ["ミスをすることは悪いことじゃない。それは上達するためには必ず必要なもの。ただし、同じミスはしないこと。", "「やってられないよ」と思ったとき、「でも俺、頑張ってるよな」とつぶやいてみてください。「頑張ってる私って、結構いいな」と、自分を好きになってください。その方が生きやすくなるとは思いませんか？", "何を言われてもイライラしなーい。", "真剣だからこそ、ぶつかる壁がある。", "お醤油ベースのお吸い物にあんこ。非常識の中に常識あり。", "崖っぷちありがとう！最高だ！"];
        var random = array[Math.floor(Math.random() * array.length)];
        alert(random);
      }
    });
  }

  FullScreanAdEvent();

});
