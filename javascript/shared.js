$(document).ready(function(){
	//materialize initializers
	$('select').material_select();
	$('.button-collapse').sideNav();
	$('.carousel').carousel();

});

//prepares full URL based on query ending
function prepareRequest(query){
  const heroku = 'https://forisevents.herokuapp.com/';
  const route_URL = query;
  return heroku + route_URL;
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
