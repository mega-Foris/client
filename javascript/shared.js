$(document).ready(function(){
	//materialize initializers
	$('select').material_select();
	$('.button-collapse').sideNav();
	$('.carousel').carousel();
});


function prepareRequest(query){
  const heroku = 'https://forisevents.herokuapp.com/';
  const route_URL = query;
  return heroku + route_URL;
}

function callAPI(URL){
  return $.get(URL);
}


$("form").submit(function(event){
    //alert("YOU CLICKED IT!"
    event.preventDefault();

   let title = $(".title").val()
    let sport = $(".sport").val()
    var difficulty = $(".difficulty").val()
        let duration =$(".duration").val()
        let stratDate =
        let finishDate =
    let userObject = {"title": title, "sport": sport, "difficulty": difficulty}

   //preventDefault
    console.log(userObject)

 })
