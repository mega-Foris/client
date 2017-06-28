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
  appendCoverPhoto(response);
  appendProfilePicture(response);
  showProfileCard(array);
  //showProfileAttributes(array[0].attributes);

}

function appendCoverPhoto(response){
  let sport = response.attributes[2].value;
  let cover = getCoverPhoto(sport);
  let html = `<img src=${cover} alt="Add your favorite sport" id="cover-photo" class="activator">`;
  //<img class="activator" src="http://static.vecteezy.com/system/resources/previews/000/094/491/original/polygonal-texture-background-vector.jpg" alt="user background">
  $('.cover-photo-container').append(html);
}
function getCoverPhoto(sport){
  let cover = '';
  if(sport=='hiking'){
    cover = '../foris-images/hiking-guy.jpg';
  }else if (sport=='kayaking'){
    cover = '../foris-images/kayak1.jpg';
  }else {
    cover = '../foris-images/guy-tent.jpg';
  }
  return cover;
}

function appendProfilePicture(response){
  let img = response.attributes[0].value;
  let html = `<img src=${img} alt="Add a profile picture" id="profile-picture" class="circle z-depth-2 responsive-img activator">`;
  //<img src="http://zblogged.com/wp-content/uploads/2015/11/21.jpg" alt="profile image" class="circle z-depth-2 responsive-img activator">

  $('.profile-picture-container').append(html);
}

function showProfileCard(person){
  console.log(person);
    const source = $('#user-profile-template').html();
    const template = Handlebars.compile(source);
    const html = template({person});
    console.log(html);
  //  $('#user-profile-card').append(html);
}

// function showProfileAttributes(attributes){
//   console.log(attributes);
//     const source = $('#attribute-profile-template').html();
//     const template = Handlebars.compile(source);
//     const html = template({attributes});
//     console.log(html);
//   //i $('#user-profile-card').append(html);
// }
