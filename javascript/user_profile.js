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
  console.log(response);
}
