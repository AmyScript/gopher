$(document).ready(function(){


//BEGIN NECESSARY CODE TO GET THE GOPHERS TO ANIMATE RANDOMLY
//a function to generate a random number between two values
function randomIntInRage(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
//create a random timer interval holder
var randInterval = 2;
var randChild = 0;
//add a set interval timer that clears itself and re-generates with a new random interval
var myFunction = function() {
    randChild = randomIntInRage(1, 4);
    randInterval = randomIntInRage(5, 9);
    //get randomGopher and set it to curGopher
    curGopher = $("div.gopher-hole:nth-child(" + randChild + ") img");
    if (curGopher.css("bottom") == "-100px") {
      curGopher.animate({
        bottom: "68px"
      }, 300).delay(randInterval * 200).animate({
        bottom: "-100px"
      }, 200);
    }
    //clear the current timer
    clearInterval(interval);
    //re instatiate the timer with a new random interval value
    interval = setInterval(myFunction, randInterval * 100);
  }
  //END NECESSARY CODE TO GET THE GOPHERS TO ANIMATE RANDOMLY

$(".gopher-hole img").addClass("animate");
var interval = setInterval(myFunction, randInterval);
$(document).ready(function() {
  //BEGIN YOUR CODE HERE
  //when a mouse move event occurs call on fuction
  $("body").mousemove(
    function(event) {
      //move the mallet picture according to mouse co-ordinates on the screen
      $("#mallet").css({
        //offset mallet so that it is not under the cursor
        'top': event.pageY + -40 + "px",
        'left': event.pageX  +"px",
        
      });
    });
  //when a .gopher-hole img is clicked on do something
  //declare variable hits to track how many hits. Starts off at zero.
  var hits = 0;
  $(".gopher-hole img").click(function(){
    //when gropher-hole is clicked, increase number of hits by 1
    console.log("hits");
    hits=hits+1;
    //display number of hits by changing the html of span with id hits
    $("#hits").html(hits);
  });
  
  //when .landscape is clicked on do something
   var misses = 0;
  $(".landscape").click(function(){
    //when landscape is clicked, increase number of missess by 1
    misses=misses+1;
    //display number of misses by changing the html of span with id misses
    $("#misses").html(misses);
  });

    //do something to the #mallet element to get it to follow the mouse around the screen and so that when it is clicked it has a css property that changes it visually and then reverts back
  $("body").mousedown(function(){
    //rotate the mallet when mouse is down
    $("#mallet").css("transform","rotate(-90deg)");
    //after half a second call rotate function
    setTimeout(rotate, 500);
  });
  
  function rotate(){
    //rotate mallet back to original position
    $("#mallet").css("transform","rotate(0deg)");
  };
});

});