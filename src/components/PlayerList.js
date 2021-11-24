import React from 'react'
import Player from './Player'
import matchData from '../data/matchData'
import playerData from '../data/playerData'
import { preparePlayerData, addWinsToPlayers } from '../helpers/playerHelpers'

console.log("wru?", preparePlayerData(playerData))
function PlayerList(props) {
  return(
    <section className="PlayerList">
      <h1>Current participating players</h1>
      <Player />
    </section>
  )
}

export default PlayerList