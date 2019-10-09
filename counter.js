
var counter = 0;
var running = 0;

function startPause() {
  if(running == 0) {
    running = 1;
    increment();
    document.getElementById("startPause").innerHTML = "pause";
  else{
    running =0;
    document.getElementById("startPause").innerHTML = "resume";
  }
  }
}
function reset(){
  running= 0;
  time= 0;
  document.getElementById("startPause").innerHTML = "start";
  document.getElementById("output").innerHTML ="05:00";
}

function increment(){
      if(running == 1) {
      setTimeout(function(){
      time ++;
      var mins = Math.floor(time/10/60);
      var secs = Math.floor(time/10);

      if(secs <10){
        secs = "0" + secs;
      }

      document.getElementById("output").innerHTML = "mins" + ":" + secs;
      increment();
      }, 100);
    }
  }
