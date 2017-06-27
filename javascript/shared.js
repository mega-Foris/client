
function prepareRequest(query){
  const heroku = 'https://forisevents.herokuapp.com/';
  const route_URL = query;
  return heroku + route_URL;
}

function callAPI(URL){
  return $.get(URL);
}
