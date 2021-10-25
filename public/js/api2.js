let button_start = document.querySelector('#test')

button_start.addEventListener('click', function(){
  myMove5()
})

function myMove5() {
  var elem = document.getElementById("animate");   
  var pos = 450;
  var pos2=900;
  var id = setInterval(frame, 1);
  function frame() {
    if (pos2 == 0) {
      clearInterval(id);

    }else {
      if(pos2==450){
        //console.log('test')
        runwifi();
      }
      pos--;
      pos2-=2;
      elem.style.bottom = pos + "px"; 
      elem.style.left = pos2 + "px"; 
    }
  }
}

function runwifi(){
var dur = 3;
var leftTargets = document.querySelectorAll(".gs-speaker-left .pulse");
var leftTargets2 = document.querySelectorAll(".gs-speaker-left .pulse2");

var delay = dur / leftTargets.length;
var delay2 = dur / leftTargets2.length;

TweenMax.set([leftTargets], { scale: 2 });

for (let i = 0; i < leftTargets.length; i++) {
  var tl = new TimelineMax({ delay: delay * i, repeat: 0 });
  tl.to(leftTargets[i], dur, { scale: 10, autoAlpha: 0, ease: Linear.easeOut });
  
var tl2 = new TimelineMax({ delay: delay2 * i, repeat: 0 }); 
  tl2.to(leftTargets2[i], dur, { scale: 10, autoAlpha: 0, ease: Linear.easeOut });  
  }
}

