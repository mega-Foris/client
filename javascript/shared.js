const heroku = 'https://forisevents.herokuapp.com/';
const events_URL = 'api/v1/events';

function getEvents(){
	const URL = heroku + events_URL;
	return $.get(URL);
}
