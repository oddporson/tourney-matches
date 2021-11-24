import React from 'react'
// import matchData from '../data/matchData';
import Match from './Match'


function MatchList(props) {
  // console.log('data from matchData?', props.matchData);
  // console.log("matchData", matchData);
  // const oneMatch = matchData[0];
  const oneMatch = props.matchData[0]
  // console.log("first Match", oneMatch)
  // console.log('oneMatch1', oneMatch1)
  return(
    <section className="PlayerList MatchList">
      <h1>Match list</h1>
      {/* Matches will be shown here */}
      <Match players={oneMatch.players} winner={oneMatch.winner} scoreDifference={oneMatch.scoreDifference} />
    </section>
  )
}

export default MatchList