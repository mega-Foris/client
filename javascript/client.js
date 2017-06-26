$(document).ready(function(){
	$('.parallax').parallax();
	$('select').material_select();

	getEvents().then(showEvents);
	console.log('hello ');
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
