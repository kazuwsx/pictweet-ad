window.onload = function(){
  function randomMove2(id) {
  var randomElm = document.getElementById(id);

  var randomTop = 50;
  var randomLeft = 50;

  randomElm.style.top = randomTop + "%";
  randomElm.style.left = randomLeft + "%";

  var timer= setInterval(function() {

    if(Math.random() * 2 < 1) {
      randomTop++;
    } else {
      randomTop--;
    };

    if(randomTop === 0) {
      randomTop = 2;
    }
    if(randomTop === 100) {
      randomTop = 98;
    }

    if(Math.random() * 2 < 1) {
      randomLeft++;
    } else {
      randomLeft--;
    };

    if(randomLeft === 0) {
      randomLeft = 2;
    }
    if(randomLeft === 100) {
      randomLeft = 98;
    }

  randomElm.style.left = randomLeft + "%";
  randomElm.style.top = randomTop + "%";
  }, 100);
};
randomMove2("randomMove2");
};
