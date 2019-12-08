import React, { useState, useEffect } from 'react';
import './App.css';
import Axios from 'axios';
import './StandingsDBStyle.css';
function LandingPage() {
  const teamDatabase = [];
  const [info, setInfo] = useState([]);
  const [selectedTeam, setSelectedTeam] = useState('');
  useEffect(() => {
    Axios.get('http://api.football-data.org/v2/competitions/2021/standings', {
      headers: {'X-Auth-Token' : 'ffdf6b8895ad49d3af4db2724aea4c3b', 'Content-Type': 'application/json'},
    })
      .then(data => setInfo(data.data.standings[0].table))
  }, [])
  for (let teams of info) {
    teamDatabase.push(teams.team.name);
  }
  teamDatabase.sort();
  function handleClick(e) {
    setSelectedTeam(`You've selected ${e.target.value}`)
  }
      
  return (
    <>
    <h1>Welcome to the football app - anaylse your team's performance</h1>
    <h3>Select your team here. Please note, the english premier league is currently the only supported league.</h3>
    <form>
    <select onChange={handleClick}>
      {teamDatabase.map(team => (
        <option>{team}</option>
      ))}
    </select>
    {selectedTeam}
    </form>
    </>
  );
}

export default LandingPage;
