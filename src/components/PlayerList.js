import React from 'react'
import Player from './Player'
import matchData from '../data/matchData'
import playerData from '../data/playerData'
import { preparePlayerData, addWinsToPlayers } from '../helpers/playerHelpers'

// console.log("wru?", preparePlayerData(playerData))
function PlayerList(props) {
  const playerDataArray = preparePlayerData(playerData);
  const parsedPlayerData = addWinsToPlayers(playerDataArray, matchData);
  // console.log(playerDataArray[0]);
  const playerOne = parsedPlayerData[0]
  console.log(playerOne)

  return(
    <section className="PlayerList">
      <h1>Current participating players</h1>
      <Player firstName={playerOne.firstName} gamerTag = {playerOne.gamerTag} lastName={playerOne.lastName} wins={playerOne.wins} />
    </section>
  )
}

export default PlayerList