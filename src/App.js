import React from 'react';
import './App.css';

function App() {
  function handleClick() {
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
});}
function handleOtherClick() {
  fetch("https://api-football-v1.p.rapidapi.com/v2/leagues", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "api-football-v1.p.rapidapi.com",
		"X-RapidAPI-Key": "ae5e938ba4mshed60cad0dd964c7p118373jsnf418cc6bee48"
	}
})
.then(response => {
	console.log(response);
})
.catch(err => {
	console.log(err);
});
}
  return (
    <div className="App">
      Football App
      <h2>Select your team here</h2>
      <select>
        <option>team1</option>
        <option>team2</option>
      </select>
      <button onClick={handleClick}>Test API</button>
      <button onClick={handleOtherClick}>Test API</button>
      
    </div>
  );
}

export default App;
