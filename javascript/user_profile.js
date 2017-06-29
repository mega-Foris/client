

$(document).ready(function(){
  //parse query string to get id
  const user_id = handleQueryString(window.location.search);

  //call API and append data to the page
  getUserInfo(user_id).then(appendUserInfo).catch((error) => {
    console.log(error);
  });

  //adding click handler to event cards to direct to event profiles
  $('.trip-container').on('click', '#event_profile_card', handleEventRequest);
});//end document ready

function getUserInfo(id){
  // let URL = prepareRequest(`api/v1/persons/${id}`);
  let options = {
		url: prepareRequest(`api/v1/persons/${id}`),
		headers: {
			Authorization: `Bearer ${localStorage.token}`
		}
	};
	return callAPI(options);
}

function appendUserInfo(response){
  let response_array = [];
  response_array.push(response);
  appendCoverPhoto(response);
  appendProfilePicture(response);
  showProfileCard(response_array);
  appendUpcomingEvents(response_array);
  appendPastEvents(response_array);
  //showProfileAttributes(array[0].attributes);

}

function appendCoverPhoto(response){
  let sport = response.attributes[2].value;
  let cover = getCoverPhoto(sport);
  let html = `<img src=${cover} alt="Add your favorite sport" id="cover-photo profile-cover" class="">`;
  //<img class="activator" src="http://static.vecteezy.com/system/resources/previews/000/094/491/original/polygonal-texture-background-vector.jpg" alt="user background">
  $('.cover-photo-container').append(html);
}
function getCoverPhoto(sport){
  let cover = '';
  if(sport=='hiking'){
    cover = '../foris-images/hiking-guy.jpg';
  }else if (sport=='kayaking'){
    cover = '../foris-images/kayak1.jpg';
  }else if (sport == 'biking'){
    cover = '../foris-images/mountain-biking.jpg';
  } else {
		cover = '../foris-images/climbing-cover.jpg';
	}
  return cover;
}

function appendProfilePicture(response){
  let img = response.attributes[0].value;
  let html = `<img src=${img} alt="Add a profile picture" id="profile-picture" class="circle z-depth-2 responsive-img activator">`;
  $('.profile-picture-container').append(html);
}

function appendUpcomingEvents(person){
  console.log(person);
  const source = $('#upcoming-event-user-profile-template').html();
  const template = Handlebars.compile(source);
  const html = template({person});
  console.log(html);
  console.log('future');
  $('.upcoming-trips').append(html);
}

function appendPastEvents(person){
  console.log(person);
  const source = $('#past-event-user-profile-template').html();
  const template = Handlebars.compile(source);
  const html = template({person});
  $('.past-trips').append(html);
}

function showProfileCard(person){
  console.log(person);
    const source = $('#user-profile-template').html();
    const template = Handlebars.compile(source);
    const html = template({person});
    console.log(html);
  //  $('#user-profile-card').append(html);
}
