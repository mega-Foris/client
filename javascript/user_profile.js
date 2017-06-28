$(document).ready(function(){
  //parse query string to get id
  const user_id = handleQueryString(window.location.search);

  //call API and append data to the page
  getUserInfo(user_id).then(appendUserInfo);

});//end document ready

function getUserInfo(id){
	let URL = prepareRequest(`api/v1/persons/${id}`);
	return callAPI(URL);
}

function appendUserInfo(response){
  let array = [];
  array.push(response);
  showProfileCard(array);
  showProfileAttributes(array[0].attributes);
}

function showProfileCard(person){
  console.log(person);
    const source = $('#user-profile-template').html();
    const template = Handlebars.compile(source);
    const html = template({person});
    console.log(html);
  //  $('#user-profile-card').append(html);
}

function showProfileAttributes(attributes){
  console.log(attributes);
    const source = $('#attribute-profile-template').html();
    const template = Handlebars.compile(source);
    const html = template({attributes});
    console.log(html);
  // $('#user-profile-card').append(html);
}
