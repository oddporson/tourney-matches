import React from 'react'
import Match from './Match'


function MatchList(props) {
  const { matchData } = props
  const oneMatch = matchData[0]
  return(
    <section className="PlayerList MatchList">
      <h1>Match list</h1>
      {/* Matches will be shown here */}
      <Match {...oneMatch} />
    </section>
  )
}

export default MatchList