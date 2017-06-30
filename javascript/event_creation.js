
$(document).ready(function(){
  //adds event listener for event creation form
  submitEventForm();
  $('.modal').modal();
	$('.datepicker').pickadate({
	 selectMonths: true, // Creates a dropdown to control month
	 selectYears: 15 // Creates a dropdown of 15 years to control year
 });


});
i
//event creation
function submitEventForm() {
  $('form').submit(function(event){
    alert('YOU CLICKED IT!');
    event.preventDefault();
    let title = $('.title').val();
    let sport = $('.sport').val();
    var difficulty = $('.difficulty').val();
    let duration =$('.duration').val();
    let startDate = $('.time-from').val();
    let finishDate = $('.time-to').val();
    let capacity = $('.capacity').val();
    let description = $('.description').val();
    let eventObject = {
      'title': title,
      'main_sport': sport,
      'difficulty': difficulty
    };
    $.post('https://forisevents.herokuapp.com/api/v1/events/createEvent', eventObject, function(eventObject){
    console.log(eventObject);
    });
  });
}
