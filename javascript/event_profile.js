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

function handleQueryString(queryString){
  let output = parseQueryString(queryString);
  return output.id;
}

function appendEventInfo(response){
    $('#location').append(response.city);
    $('#date').append(response.date_time);
    $('#activity').append(response.main_sport);
    $('#difficulty').append(response.difficulty);
    showAttendees(response.people);
    showComments(response.comments);
}
function showAttendees(people){
    const source = $('#attendee-template').html();
    const template = Handlebars.compile(source);
    const html = template({people});
    $('.user-facts').append(html);
}
function showComments(comment){
    const source = $('#comment-template').html();
    const template = Handlebars.compile(source);
    const html = template({comment});
    $('.event-comments').append(html);
}
