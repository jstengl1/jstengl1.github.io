// ************* Based off Tutorial where you click on the card itself to make it turn NOT on a seperate button.
$(document).ready(function() {
  //ID or Class name of the button goes into the first section
  $('#problem1').click(function() {
    //ID or Class name of the modal you want to appear on click goes into this second area.
    $("#problem1").toggleClass("is-flipped");
  });

  $('#problem2').click(function() {
    //ID or Class name of the modal you want to appear on click goes into this second area.
    $("#problem2").toggleClass("is-flipped");
  });

  $('#problem3').click(function() {
    //ID or Class name of the modal you want to appear on click goes into this second area.
    $("#problem3").toggleClass("is-flipped");
  });

  $('#problem4').click(function() {
    //ID or Class name of the modal you want to appear on click goes into this second area.
    $("#problem4").toggleClass("is-flipped");
  });
});
