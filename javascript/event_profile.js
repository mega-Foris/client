$(document).ready(function(){
  //parse query string to get id
  //make request
  queryString = window.location.search;
  let output = parseQueryString(queryString);
  let event_id = output.id;
  getEventInfo(event_id).then(appendEventInfo);
});//end document ready

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

function getEventInfo(id){
	let URL = prepareRequest(`api/v1/events/${id}`);
	return callAPI(URL);
}

function appendEventInfo(response){
  console.log(response);
}
