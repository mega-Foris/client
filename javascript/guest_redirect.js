$(document).ready(function(){
  redirectIfLoggedNotIn();

});


function redirectIfLoggedNotIn (){
  if(!localStorage.id){
    window.location = '/login.html'
  }
}
