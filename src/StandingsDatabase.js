import React, { useState, useEffect } from 'react';
import './App.css';
import Axios from 'axios';
function StandingsDatabase() {
  const [info, setInfo] = useState([]);
  useEffect(() => {
    Axios.get('http://api.football-data.org/v2/competitions/2021/standings', {
      headers: {'X-Auth-Token' : 'ffdf6b8895ad49d3af4db2724aea4c3b', 'Content-Type': 'application/json'},
    })
      .then(data => setInfo(data.data.standings[0].table))
  }, [])
  console.log(info);


      
  return (
    <>
    Differentials  
    hello world
    {info.map(team => (
        <li>{team.position} {team.team.name} {team.points}</li>
    ))}
    
    </>
  );
}

export default StandingsDatabase;
