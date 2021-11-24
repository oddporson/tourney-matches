import React from 'react'
import Player from './Player'

// data
import matchData from '../data/matchData'
import playerData from '../data/playerData'

// helper function
import { preparePlayerData, addWinsToPlayers} from '../helpers/playerHelpers';


function PlayerList(props) {
  const preparedPlayerData = preparePlayerData(playerData);
  const parsedPlayerData = addWinsToPlayers(preparedPlayerData, matchData);
  const parsedPlayers = parsedPlayerData.map(player => <Player key={player.gamerTag} {...player}/>)

  return(
    <section className="PlayerList">
      <h1>Current participating players</h1>
      {parsedPlayers}
    </section>
  )
}

export default PlayerList