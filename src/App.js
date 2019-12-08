import React from 'react';
import './App.css';
import StandingsDatabase from './StandingsDatabase.js'
import LandingPage from './LandingPage.js';
function App() {
  return (
    <>
    Current Selectors
    <LandingPage/>
    Real standings
    <StandingsDatabase/>
    
    </>
  )
}

export default App;
