import React, {useEffect, useState } from 'react';
import Axios from 'axios';

export default function Scorers() {
    const [players, setPlayers] = useState([])
    useEffect(() => {
        Axios.get('http://api.football-data.org/v2/competitions/2021/scorers', {
            headers: {'X-Auth-Token' : 'ffdf6b8895ad49d3af4db2724aea4c3b', 'Content-Type': 'application/json'},
          })
          .then(results => setPlayers(results))
          
          
          
    })
    return (
    <p>Scores mounted</p>
    )
}