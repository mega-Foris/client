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
      let sport = $('#sport-drop option:selected').val();
      var difficulty = $('#difficulty-drop option:selected').val();
      let duration =$('.duration').val();
      let startDate = $('.datepicker').val();
      let newDate = moment(startDate).format('YYYY-MM-DD')
      console.log(newDate);
      let finishDate = $('.time-to').val();
      let capacity = $('.capacity').val();
      let description = $('.description').val();
      let eventObject = {
        'title': title,
        'main_sport': sport,
        'difficulty': difficulty,
        'date_time': newDate,
        'capacity': capacity,
        'duration': duration,
        'description': description,
        'organizer_id': localStorage.id
      };
      console.log(newDate);
      console.log(eventObject);
      $.post('https://forisevents.herokuapp.com/api/v1/events/createEvent', eventObject, function(eventObject){
      console.log('Post that shit');
    }).then(result => {
      let event_id = result[0].id;
      window.location.href = `./event_profile.html?id=${event_id}`;
    });
    });
  })

}
