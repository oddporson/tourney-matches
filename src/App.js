import './App.css';
import PlayerList from './components/PlayerList'
import MatchList from './components/MatchList'

// data
import matchData from './data/matchData'
import playerData from './data/playerData'

// helper function
// import { preparePlayerData, addWinsToPlayers} from './helpers/playerHelpers';

function App() {
  // const playerDataArray = preparePlayerData(playerData);
  // const parsedPlayerData = addWinsToPlayers(playerDataArray, matchData);
  // const onePlayer = parsedPlayerData
  return (
    <div className="App">
      <h1>
        Tourney Matches {" "}
        <span>Where Coding and Tournaments found their Match!</span>
      </h1>
      <PlayerList/>
      <MatchList matchData={matchData}/>
    </div>
  );
}

export default App;
