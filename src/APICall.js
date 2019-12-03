fetch("https://api-football-v1.p.rapidapi.com/v2/predictions/157462", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "api-football-v1.p.rapidapi.com",
		"x-rapidapi-key": "ae5e938ba4mshed60cad0dd964c7p118373jsnf418cc6bee48"
	}
})
.then(response => {
	console.log(response);
})
.catch(err => {
	console.log(err);
});