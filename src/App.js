import React from 'react';
import './App.css';
import StandingsDatabase from './StandingsDatabase.js'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LandingPage from './LandingPage.js';
import Scorers from './Scorers.js'
function App() {
  return (
    <Router>
    <>
    <Switch>
      <Route exact path= '/' component={LandingPage}/>
      <Route exact path= '/standings' component={StandingsDatabase}/>
      <Route exact path= '/scorers' component={Scorers}/>
    </Switch>
    </>
    </Router>
  )
}

export default App;
