
$(document).ready(function(){
	datePicker();

	//upon loading, bring in three sample events for home page
	let URL = prepareRequest('api/v1/events');
	callAPI(URL).then(showEvents);
	//click handler when clicking example event to take to event pag
	$('.card-row').on('click', '#main-page-events', handleEventRequest);
});

//appends event cards to page
function showEvents(events){
	const source = $('#event-template').html();
	const template = Handlebars.compile(source);
	const html = template({
		events
	});
	$('.card-row').append(html);
}
//creates calendar drop-down option
function datePicker(){
	$('.datepicker').pickadate({
		selectMonths:true, // Creates a dropdown to control month
		selectYears:15 // Creates a dropdown of 15 years to control year
	});
}
