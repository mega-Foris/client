$(document).ready(function(){
  //parse query string to get id
  const event_id = handleQueryString(window.location.search);

  //call API and append data to the page
  getEventInfo(event_id).then(appendEventInfo);
});//end document ready


function getEventInfo(id){
	let URL = prepareRequest(`api/v1/events/${id}`);
	return callAPI(URL);
}

function appendEventInfo(response){
  console.log(response);
}

function handleQueryString(queryString){
  let output = parseQueryString(queryString);
  return output.id;
}
