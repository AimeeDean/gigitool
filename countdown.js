var counter = 0;
var timeleft = 300;

var startTime = 0;

function convertSeconds(s) {
  var min = floor(s / 60;)
  var sec = s % 60;
  return nf(min, 2) + ':' + nf(sec, 2);
}

function setup () {
  noCanvas ();
  startTime = millis ();

  var timer = select ('#timer');
  timer.html (convertSeconds(timeleft - counter);

  var internal = setInterval(timeIt, 1000);

  function timeIt() {
    counter++;
    timer.html (convertSeconds(timeleft - counter);
    clearInterval = (interval);
    counter = 0;
  }
  
   function clock() {
     var myTimer = setInterval(myClock, 1000);
     var c = 5;

     function myClock() {
       document.getElementById("start").innerHTML = --c;
       if (c == 0) {
         clearInterval(myTimer);
         alert("Time's up!");
       }
     }
   }
}
