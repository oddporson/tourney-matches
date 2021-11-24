import React from 'react'
import Player from './Player'


function PlayerList(props) {
  return(
    <section className="PlayerList">
      <h1>Current participating players</h1>
      <Player firstName={props.playerOne.firstName} gamerTag = {props.playerOne.gamerTag} lastName={props.playerOne.lastName} wins={props.playerOne.wins} />
    </section>
  )
}

export default PlayerList