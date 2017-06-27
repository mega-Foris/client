$(document).ready(function(){
	//materialize initializers
	$('select').material_select();
	$('.button-collapse').sideNav();
	$('.carousel').carousel();
	datePicker();

	//upon loading, bring in three sample events for home page
	let URL = prepareRequest('api/v1/events');
	callAPI(URL).then(showEvents);
	//click handler when clicking example event to take to event pag
	$('.card-row').on('click', '#main-page-events', handleEventRequest);
});


function showEvents(events){
	console.log(events);
	const source = $('#event-template').html();
	const template = Handlebars.compile(source);

	const html = template({
		events
	});
	$('.card-row').append(html);
}

function datePicker(){
	$('.datepicker').pickadate({
		selectMonths:true, // Creates a dropdown to control month
		selectYears:15 // Creates a dropdown of 15 years to control year
	});
}

function handleEventRequest(){
	let id = $(this).data('id');
	let URL = prepareRequest(`api/v1/events/${id}`);
	callAPI(URL).then(function(){
		window.location.href = '../event_profile.html';
		loadEventData;
	});
}
