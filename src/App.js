import React, { useEffect, useState } from 'react';
import './App.css';
import StandingsDatabase from './StandingsDatabase.js'
function App() {
  let [teams, setTeams] = useState([]) 
  useEffect(() => {
    fetch('/rest/test')
    .then(response => response.json())
    .then(teams => setTeams(teams))
  }, []);
  return (
    <>
    <h2>Next Fixture Differential</h2>
    {/* <h2>Current Form</h2>
    <h2>Top Players</h2>
    <h2>Goals Scored</h2>
    <h2>Goals Conceded</h2>
    <StandingsDatabase/> */}
    <h3>Current false stanings</h3>
    {
      teams.map((team) => {
      return <li>Team: {team.name}</li>
      })
    }
    </>
  )
}

export default App;
