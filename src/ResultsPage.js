import React from 'react';

export default function ResultsPage(props) {
    return (
    <>
    <h1>Analysis for {props.name}</h1>
    <div className="subheading">
        <div className="container differential">
            Differential for next fixture
            You are playing against {props.nextTeam}
            They sit {props.differential} ahead of you in the table.
        </div>
        <div className="container dangerman">
            Dangerman
            With x goals and x assists this season, you should watch out for {props.dangerman}
        </div>
    </div>
    <div className="subheading">
        <div className="container goalscoring">
            Your goalscoring record
        </div>
        <div className="container defence">
            Your defence
        </div>
    </div>
    <div className="subheading">
        <div className="container starplayer">
            Your star player 
        </div>
        <div className="container currentform">
            Your current form
        </div>
    </div>
    </>)
}