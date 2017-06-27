const heroku = 'https://forisevents.herokuapp.com/';
const events_URL = 'api/v1/events';

function getEvents(){
	const URL = heroku + events_URL;
	return $.get(URL);
}

$("form").submit(function(event){
    //alert("YOU CLICKED IT!"
    event.preventDefault();

    let title = $(".title").val()
    let sport = $(".sport").val()
    var difficulty = $(".difficulty").val()
		let duration =$(".duration").val()
		let stratDate =
		let finishDate = 
    let userObject = {"title": title, "sport": sport, "difficulty": difficulty}

    //preventDefault
    console.log(userObject)

  })
