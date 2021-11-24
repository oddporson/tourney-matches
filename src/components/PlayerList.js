import React from 'react'
import Player from './Player'
// import matchData from '../data/matchData'
// import playerData from '../data/playerData'
// import { preparePlayerData, addWinsToPlayers } from '../helpers/playerHelpers'


function PlayerList(props) {
  console.log('props from PlayerList', props);
  console.log('props.playerOne.gamerTag', props.playerOne.gamerTag)
  // console.log(props.matchData)
  // console.log(props.playerData);
  // const playerDataArray = preparePlayerData(props.playerData);
  // console.log('playerDataArray from PlayerList', playerDataArray);
  // const parsedPlayerData = addWinsToPlayers(playerDataArray, props.matchData);
  // console.log(playerDataArray[0]);
  // const playerOne = parsedPlayerData[0]
  // console.log(playerOne)
  return(
    <section className="PlayerList">
      <h1>Current participating players</h1>
      <Player firstName={props.playerOne.firstName} gamerTag = {props.playerOne.gamerTag} lastName={props.playerOne.lastName} wins={props.playerOne.wins} />
    </section>
  )
}

export default PlayerList