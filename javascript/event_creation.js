
$(document).ready(function(){
  //adds event listener for event creation form
  submitEventForm();

   $('.modal').modal();
	 $('input').click(()=>{
		 $('input').removeClass('validate');
	 });
});

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
