import React, { useState, useEffect } from 'react';
import './App.css';
import Axios from 'axios';
import Standings from './Standings.js'
function App() {
  const [info, setInfo] = useState([]);
  useEffect(() => {
    Axios.get('http://api.football-data.org/v2/competitions/2021/standings', {
      headers: {'X-Auth-Token' : 'ffdf6b8895ad49d3af4db2724aea4c3b', 'Content-Type': 'application/json'},
    })
      .then(data => setInfo(data.data.standings[0].table))
  }, [])

  function storeData() {
    let results = [];
    for (let i = 0; i < 20; i++) {
      results.push(`${info[i].team.name}`);
    }
    console.log(results)
    return results;
  }
  function storeData() {
    let results = [];
    for (let i = 0; i < 20; i++) {
      results.push(`${info[i].team.name}`);
    }
    console.log(results)
    return results;
  }

  function findDifferential(team1, team2) {
    storeData()
    let difference = (storeData().indexOf(team1) - storeData().indexOf(team2));
    console.log(difference)
    return difference;
  }

      
  return (
    <div className="App">
      
      Football App
      <h2>Select your team here</h2>
      <select>
        <option>team1</option>
        <option>team2</option>
      </select>
      <button onClick={()=>findDifferential('Liverpool FC', 'Chelsea FC')}>Test API</button>
      <h3>Next Fixture Differential</h3>
      
    </div>
  );
}

export default App;
