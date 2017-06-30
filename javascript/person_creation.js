

$(document).ready(function(){
  //adds event listener for person creation form
  submitLoginForm()
  navShowHideUser()
  submitPersonForm();
   $('.modal').modal();
});

function navShowHideUser(){
  if (localStorage.id == undefined){
    console.log('LS is true')
    $('.notloggedin').show()
    $('.loggedin').hide()
  }else{
    $('.loggedin').show()
    $('.notloggedin').hide()
  }
}

// function redirectIfLoggedIn(){
//   if(localStorage.id){
//     window.location = '/index.html'
//   }
// }
//user profile creation
function submitPersonForm() {
    //console.log("called?");
  $('#signup').on('click', function (){
  $('form').submit(function(event){
    //alert('YOU CLICKED IT!');
    event.preventDefault();
    let first_name = $('#first_name').val();
    let last_name = $('#last_name').val();
    var email = $('#submitemail').val();
    let password =$('#submitpassword').val();
    let personObject = {
				'first_name': first_name,
				'last_name': last_name,
				'email': email,
				'password':password
      };
      $.post('http://localhost:3000/auth/signup', personObject, function(personObject){
        console.log("Hey, POSTED!");
			}).then( result=> {
        console.log(result);
        console.log("result.id[0].id");
        console.log(result.id[0].id);
        console.log("result.id[0].name");
        console.log(result.id[0].name);
        localStorage.token = result.token;
        localStorage.id = result.id[0].id;
        localStorage.name = result.id[0].name
        // localStarage.user_id = result.id;
        alert('Sign-up Successful!');
        window.location = '/index.html';
      });
    });
  })
}
function submitLoginForm() {
  $('#login').on('click', function (){
    $('form').submit(function(event){
      //alert('YOU CLICKED IT!');
      event.preventDefault();
      var email = $('#email').val();
      let password =$('#password').val();
      let personObject = {
  				'email': email,
  				'password':password
        };
        $.post('http://localhost:3000/auth/login', personObject, function(personObject){
          console.log("Hey, POSTED!");
  			}).then( result=> {
          console.log(result);
          console.log(result.person.first_name);
          localStorage.token = result.token;
          localStorage.id = result.person.id;
          localStorage.name = result.person.first_name
          alert('Login Successful!');
          window.location = '/index.html';
        });
      });
  })      //console.log("called?");
  // $('form').submit(function(event){
  //   //alert('YOU CLICKED IT!');
  //   event.preventDefault();
  //   var email = $('#email').val();
  //   let password =$('#password').val();
  //   let personObject = {
	// 			'email': email,
	// 			'password':password
  //     };
  //     console.log(personObject);
  //     $.post('http://localhost:3000/auth/login', personObject, function(personObject){
  //       console.log("Hey, POSTED!");
	// 		}).then( result=> {
  //       console.log(result);
  //       alert('Login Successful!')
  //     });
  //   });
}

// forisevents.herokuapp.com/api/v1/persons/createPerson
