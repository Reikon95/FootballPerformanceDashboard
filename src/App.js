import React, { useState, useEffect } from 'react';
import './App.css';
import Axios from 'axios';

function App() {
  const [info, setInfo] = useState([]);
  useEffect(() => {
    Axios.get('http://api.football-data.org/v2/competitions/2021/standings', {
      headers: {'X-Auth-Token' : 'ffdf6b8895ad49d3af4db2724aea4c3b', 'Content-Type': 'application/json'},
    })
      .then(data => setInfo(data.data.standings[0].table))
  }, [])
      
  return (
    <div className="App">
      Football App
      <h2>Select your team here</h2>
      <select>
        <option>team1</option>
        <option>team2</option>
      </select>
      <button onClick={() => console.log(info[0].team.name)}>Test API</button>
      <h3>Teams</h3>
      First place is {}
    
      
    </div>
  );
}

export default App;
