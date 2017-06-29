$(document).ready(function(){
  redirectIfLoggedIn();
  
  });



function redirectIfLoggedIn (){
  if(localStorage.id){
    window.location = '/index.html'
  }
}

