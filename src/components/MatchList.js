import React from 'react'
import Match from './Match'


function MatchList(props) {

  const oneMatch = props.matchData[0]
  return(
    <section className="PlayerList MatchList">
      <h1>Match list</h1>
      {/* Matches will be shown here */}
      <Match players={oneMatch.players} winner={oneMatch.winner} scoreDifference={oneMatch.scoreDifference} />
    </section>
  )
}

export default MatchList