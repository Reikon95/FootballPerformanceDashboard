// import React, { useState, useEffect } from 'react';
// import '../App.css';
// import Axios from 'axios';
// import '../StandingsDBStyle.css';
// module.exports = function DB() {
//   const [info, setInfo] = useState([]);
//   useEffect(() => {
//     Axios.get('http://api.football-data.org/v2/competitions/2021/standings', {
//       headers: {'X-Auth-Token' : 'ffdf6b8895ad49d3af4db2724aea4c3b', 'Content-Type': 'application/json'},
//     })
//       .then(data => setInfo(data.data.standings[0].table))
//   }, [])
//   console.log(info);


      
//   return (
//     <>
  
//     {info.map(team => (
//         <li>{team.position} {team.team.name} {team.playedGames} {team.won} {team.draw} {team.lost}  
//             {team.goalsFor} {team.goalsAgainst} {team.goalDifference} <strong>{team.points}</strong></li>
//     ))}
//         {/* {info.map(team => (
//         [{team.position} {team.team.name} {team.playedGames} {team.won} {team.draw} {team.lost}  
//             {team.goalsFor} {team.goalsAgainst} {team.goalDifference} {team.points}]
//     ))} */}
    
//     </>
//   );
// }

