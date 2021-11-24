import React from 'react'
import matchData from '../data/matchData';
import Match from './Match'


function MatchList(props) {
  return(
    <section className="PlayerList MatchList">
      <h1>Match list</h1>
      {/* Matches will be shown here */}
      <Match />
    </section>
  )
}

export default MatchList