
$(document).ready(function(){
	datePicker();
	console.log('here!');
	console.log(localStorage.id);
	$('.directToUserProfile').on('click', function(){
		console.log('yeah?');
		let id = localStorage.id
	  window.location.href = `./user_profile.html?id=${id}`;
	});

	$( ".namelogged" ).append(`${localStorage.name}`);
	//upon loading, bring in three sample events for home page
	let URL = prepareRequest('api/v1/events');
	//callAPI(URL).then(showEvents);
	//click handler when clicking example event to take to event pag
	$('.card-row').on('click', '#main-page-events', handleEventRequest);
	//add click handler for search
	$('.search').on('click', handleSearch);
});

//appends event cards to page
// function showEvents(events){
// 	const source = $('#event-template').html();
// 	const template = Handlebars.compile(source);
// 	const html = template({
// 		events
// 	});
// 	$('.card-row').append(html);
// }
//creates calendar drop-down option
function datePicker(){
	$('.datepicker').pickadate({
		selectMonths:true, // Creates a dropdown to control month
		selectYears:15 // Creates a dropdown of 15 years to control year
	});
}

function handleSearch(){
	console.log('search was clicked');
	event.preventDefault();
	let sport = $('.sport-input option:selected').text();
	let difficulty = $('.difficulty-input option:selected').text();
	const URL = prepareRequest(`api/v1/events/sport/${sport}/difficulty/${difficulty}`);
	console.log(URL);
	callAPI(URL).then(appendEventCards);
}
function appendEventCards(response){
	console.log(response);
	let length = 0;
	if (response.length>6) {
		length = 6;
	} else{
		length = response.length;
	}
	for (var i = 0; i < length; i++) {
		prepareEventCard(response[i]);
	}
	//if length of response > 6, show 6, else show all
		//image, title, desciption, difficulty(with image)
}

function prepareEventCard(event){
	const img = event.image_url;
	const title = event.title;
	const description = event.description;
	const diff = getDifficultyImage(event.difficulty);
	const id = event.id;
	let template = `
      <div class="row">
        <div class="col s12 m8 offset-m2">
          <div class="card" data-id=${id} id="main-page-events">
            <div class="card-image">
              <img src=${img}>
              <span class="white-text card-title">${title}</span>
            </div>
            <div class="card-content">
              <p>${description}</p>
							<span><img src=${diff} height="25px" width="25px"></span>
            </div>
            <div class="card-action">
              <a href="#">Learn more!</a>
            </div>
          </div>
        </div>
      </div>`;
			$('.card-row').append(template);
}
