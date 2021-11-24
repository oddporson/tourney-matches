import './App.css';
import PlayerList from './components/PlayerList'
import MatchList from './components/MatchList'

// data
import matchData from './data/matchData'
import playerData from './data/playerData'

// helper function
import { preparePlayerData, addWinsToPlayers} from './helpers/playerHelpers';

function App() {
  // console.log('preparePlayerData', preparePlayerData(playerData))
  const playerDataArray = preparePlayerData(playerData);
  // console.log('playerDataArray from PlayerList', playerDataArray);
  const parsedPlayerData = addWinsToPlayers(playerDataArray, matchData);
  // console.log(playerDataArray[0]);
  const playerOne = parsedPlayerData[0]
  console.log('playerOne', playerOne)
  return (
    <div className="App">
      <h1>
        Tourney Matches {" "}
        <span>Where Coding and Tournaments found their Match!</span>
      </h1>
      <PlayerList playerOne={playerOne}/>
      <MatchList matchData={matchData}/>
    </div>
  );
}

export default App;
