import React from 'react';
import './App.css';
import StandingsDatabase from './StandingsDatabase.js'
function App() {

  return (
    <>
    <h2>Next Fixture Differential</h2>
    <h2>Current Form</h2>
    <h2>Top Players</h2>
    <h2>Goals Scored</h2>
    <h2>Goals Conceded</h2>
    <StandingsDatabase/>
    </>
  )
}

export default App;
