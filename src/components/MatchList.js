import React from 'react'
import Match from './Match'

function MatchList() {
  return(
    <section className="PlayerList MatchList">
      <h1>Match list</h1>
      {/* Matches will be shown here */}
      <Match />
    </section>
  )
}

export default MatchList