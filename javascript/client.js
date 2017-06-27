$(document).ready(function(){
	//materialize initializers
	$('select').material_select();
	$('.button-collapse').sideNav();
	$('.carousel.carousel-slider').carousel({fullWidth: true});
	$('.carousel').carousel();

	//upon loading, bring in three sample events for home page
	getEvents().then(showEvents);
	$('.card-row').on('click', '#main-page-events', handleEventRequest);
	//click handler when clicking example event to take to event pag
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

function handleEventRequest(){
	console.log($(this).data('id'));
}
