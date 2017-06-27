
$(document).ready(function(){
  //adds event listener for event creation form
  submitEventForm();
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
    $.post('https://localhost:3000/api/v1/events/createEvent', eventObject, function(eventObject){
    console.log(eventObject);
    });
  });
}

//user profile creation
function submitPersonForm() {
  $('form').submit(function(event){
    alert('YOU CLICKED IT!');
    event.preventDefault();
    let first_name = $('.first_name').val();
    let last_name = $('.last_name').val();
    var email = $('.email').val();
    let password =$('.password').val();
    let personObject = {
				'first_name': first_name,
				'last_name': last_name,
				'email': email,
				'password':password
      };
      $.post('https://localhost:3000/api/v1/events/createPerson', personObject, function(personObject){
        console.log(perosnObject);
			});
    });
}
