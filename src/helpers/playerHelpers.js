// input: playerData
export const preparePlayerData = (playerData) => {
  // empty for now
    return Object.values(playerData);

};
// output: [{player}, {player}]


  // input: playerDataArray, matchData
export const addWinsToPlayers = (playerDataArray, matchData) => {
  return playerDataArray.map(player => {
    // Calculating the numbers of wins in the matchData
    const currentWins = matchData.reduce((accumulator, match) => {
       // Adds a win if the gamerTag matches
      if (match.winner === player.gamerTag) {
        return accumulator += 1;
      } else {
        return accumulator;
      }
    },0)
    player.wins = currentWins;

    return player
  })
};

 // output: [{player}, {player}] (each player having a win key and a numerical value)
