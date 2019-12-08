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

    Real standings
    <StandingsDatabase/>
    </>
  )
}

export default App;
