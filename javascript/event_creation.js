$(document).ready(function(){
  //adds event listener for event creation form
  submitEventForm();
  $('.modal').modal();
	$('.datepicker').pickadate({
	 selectMonths: true, // Creates a dropdown to control month
	 selectYears: 15 // Creates a dropdown of 15 years to control year
 });


});

//event creation
function submitEventForm() {
  $('#createEvent').on('click', function(){
    $('form').submit(function(event){
      alert('YOU CLICKED IT!');
      event.preventDefault();
      let title = $('.title').val();
      let sport = $('.sport').val();
      var difficulty = $('.difficulty').val();
      let duration =$('.duration').val();
      let startDate = $('.datepicker').val();
      let newDate = Date.parse('startDate', 'yyyy.MM.dd')
      console.log(newDate);
      let finishDate = $('.time-to').val();
      let capacity = $('.capacity').val();
      let description = $('.description').val();
      let eventObject = {
        'title': title,
        'main_sport': sport,
        'difficulty': difficulty,
        'date_time': '2017-08-01',
        'capacity': capacity,
        'duration': duration,
        'description': description,
        'organizer_id': localStorage.id
      };
      console.log(newDate);
      $.post('http://localhost:3000/api/v1/events/createEvent', eventObject, function(eventObject){
      console.log('Post that shit');
    }).then(result => {
      console.log(result);
    });
    });
  })

}
