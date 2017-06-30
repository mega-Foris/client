$(document).ready(function(){
  //parse query string to get id
  const event_id = handleQueryString(window.location.search);

  //call API and append data to the page
  getEventInfo(event_id).then(appendEventInfo);

  //add click handler to user name
  $('.user-facts').on('click', '#user-name', handleUserRequest);
  //add click handler to 'add user' button
  $('.user-facts').on('click', '#add-attendee',function(){
  addUsertoEvent(event_id);
  });
  $('.event-comments').on('click', '#add-comment',function(){
  addCommenttoEvent(event_id);
  });
});//end document ready

function getEventInfo(id){
  console.log(id);
	let URL = prepareRequest(`api/v1/events/${id}`);
  console.log(URL);
	return callAPI(URL);
}

function appendEventInfo(response){
  console.log(response);
  let difficulty = displayDifficulty(response.difficulty);
    $('#location').append(response.city);
    $('#date').append(response.date_time);
    $('#activity').append(response.main_sport);
    $('#difficulty').append(difficulty);
    showAttendees(response.people);
    showComments(response.comments);
}
function showAttendees(people){
    console.log(people);
    const source = $('#attendee-template').html();
    const template = Handlebars.compile(source);
    const html = template({people});
    $('.user-facts-list').append(html);
}
function showComments(comment){
  console.log(comment);
    const source = $('#comment-template').html();
    const template = Handlebars.compile(source);
    const html = template({comment});
    $('.comments-list').append(html);
}

function handleUserRequest(){
  let id = $(this).data('id');
  window.location.href = `./user_profile.html?id=${id}`;
}

function handleUserLogout(){
  let id = localStorage.id;
  window.location.href = `./user_profile.html?id=${id}`;
}

function displayDifficulty(difficulty){
 const img =   getDifficultyImage(difficulty);
 let template = `
 <img src=${img} height="25px" width = "25px" alt = ''>
 `;
 return template;
}

function addUsertoEvent(event_id){
  let user_id = localStorage.id;
  sendDatatoAPI(user_id, event_id).then(function(){
    location.reload();
  });
}

function sendDatatoAPI(user_id, event_id){
  let options = {
		url: prepareRequest(`auth/add/id/${user_id}/eventid/${event_id}`),
		headers: {
			Authorization: `Bearer ${localStorage.token}`
		}
	};
	return postAPI(options);
}

function addCommenttoEvent(event_id){
  let comment = $('#comment-field').val();
  let user_id = localStorage.id;
  sendCommentDatatoAPI(user_id, event_id, comment).then(function(){
    location.reload();
  });
}

function sendCommentDatatoAPI(user_id, event_id, comment){
  let options = {
		url: prepareRequest(`auth/add/id/${user_id}/eventid/${event_id}/comment/${comment}`),
		headers: {
			Authorization: `Bearer ${localStorage.token}`
		}
	};
	return postAPI(options);
}

function postAPI(URL){
  //calls API with full URL
  return $.post(URL);
}


function refreshPage(response){
  console.log('refresh data');
  console.log(response);
}
