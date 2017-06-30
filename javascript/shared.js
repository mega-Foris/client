const API_URL = getHostURL()

$(document).ready(function(){
	//materialize initializers
	$('select').material_select();
	$('.button-collapse').sideNav();
	$('.carousel').carousel();

});

//prepares full URL based on query ending
function prepareRequest(query){
  const heroku = 'https://forisevents.herokuapp.com/';
	const local = 'http://localhost:3000/'

  const route_URL = query;
  // return heroku + route_URL;
	// return local + route_URL;
	return local + route_URL;
}

//calls API with full URL
function callAPI(URL){
  return $.get(URL);
}

//parse query strings to create objects of key value pairs
function parseQueryString(queryString){
  let output = {};
  queryString = queryString.substring(1);
  let split = queryString.split('&');
  let split2 = [];
  for (var i = 0; i < split.length; i++) {
    split2.push(split[i].split('='));
    output[split2[i][0]] = split2[i][1];
  }
  return output;
}

function handleQueryString(queryString){
  let output = parseQueryString(queryString);
  return output.id;
}

//redirects to event profile and sends id with query string
function handleEventRequest(){
	console.log('i was clicked');

	let id = $(this).data('id');
	console.log(id);

	window.location.href = `./event_profile.html?id=${id}`;
}

function getDifficultyImage(difficulty){
	let image = '';
	if(difficulty=='Beginner'){
		image = '../foris-images/green-circle.svg';
	}else if (difficulty=='Intermediate'){
		image = '../foris-images/blue-square.svg';
	}else if (difficulty=='Advanced'){
		image = '../foris-images/black-diamond.svg';
	}else {
		image = '../foris-images/double-black.svg';
	}
	return image;
}

function getHostURL() {
	 return 'http://localhost:3000/'
  // if (window.location.host.indexOf('localhost') != -1) {
  //   return 'http://localhost:3000/';
  // } else {
  //   return 'https://forisevents.herokuapp.com/';
  }

	function redirectIfLoggedIn(){
  if(localStorage.user_id){
    window.location = `/user.html?id=${localStorage.user_id}`
  }
}

function logout(){

	localStorage.clear();

}
