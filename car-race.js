// Click the go button

$("#go").click(function() {
// Build a function t see if the car has won the race
function checkIfComplete(){

  if ( isComplete == false ){
       isComplete = true;
  } else {
    place = "second"
  }
}


  // get the width of the car
  var carWidth = $(".car").width();

  // Get the width of the racetrack
  var raceTrackWidth = $(window).width() - carWidth;

  // Generate random number btw 1 to 5000
  var raceTime1 = Math.floor( (Math.random() * 5000) + 1);
  var raceTime2 = Math.floor( (Math.random() * 5000) + 1);

  // Set a flag variable to false by default
  var isComplete = false;

  // Set a flag variable to first by default 
  var place = "first";

  // animate car 1
    $("#car1").animate({
  
  // move the car the width of the racetrack
  left: raceTrackWidth
}, raceTime1, function(){
  // animation is complete

  // run a function 
  checkIfComplete();

  // give some text feedback
     $("#raceinfo1 span").text("Finished in " + place + " place and clocked in at " + raceTime1 + " milliseconds!");
});


  // animate car 2
  $("#car2").animate({
  
    // move the car the width of the racetrack
    left: raceTrackWidth
  }, raceTime2, function(){
    // animation is complete
  
    // run a function 
    checkIfComplete();
  
    // give some text feedback
       $("#raceinfo2 span").text("Finished in " + place + " place and clocked in at " + raceTime2 + " milliseconds!");
  });

});

$("checkIfComplete").css("fontSize", "30px")


        //RESET THE RACE
$("#reset").click(function(){
$(".car").css("left", "0");
$(".raceInfo span").text("");
});