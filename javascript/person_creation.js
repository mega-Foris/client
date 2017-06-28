$(document).ready(function(){
  //adds event listener for person creation form
  submitPersonForm();
   $('.modal').modal();
});

//user profile creation
function submitPersonForm() {
          //console.log("called?");
  $('form').submit(function(event){
    //alert('YOU CLICKED IT!');
    event.preventDefault();
    let first_name = $('#first_name').val();
    let last_name = $('#last_name').val();
    var email = $('#email').val();
    let password =$('#password').val();
    let personObject = {
				'first_name': first_name,
				'last_name': last_name,
				'email': email,
				'password':password
      };
      console.log(personObject);
      $.post('http://localhost:3000/auth/signup', personObject, function(personObject){
        console.log("Hey, POSTED!");
			}).then( result=> {
        console.log(result);
        alert('Sign-up Successful!')
      });
    });
}

// forisevents.herokuapp.com/api/v1/persons/createPerson
