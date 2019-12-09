import React from 'react';
import './App.css';
import StandingsDatabase from './StandingsDatabase.js'
import LandingPage from './LandingPage.js';
import Scorers from './Scorers.js'
function App() {
  return (
    <>
    Current Selectors
    <LandingPage/>
    <StandingsDatabase/>
    <Scorers/>
    </>
  )
}

export default App;
