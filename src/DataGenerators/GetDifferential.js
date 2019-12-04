import React from 'react';
import storeData from '../Standings.js';
function GetDifferential(team1, team2) {
    storeData()
    console.log(storeData())
    let difference = (storeData().indexOf(team1) - storeData().indexOf(team2));
    console.log(difference) 
    return (
        difference
    );
  }
export default GetDifferential