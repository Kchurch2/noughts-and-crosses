import './App.css';
import Header from './components/Header';
import Board from './components/Board';
import Scores from './components/Scores';
import { useState } from 'react';

function App() {

  const [players, setPlayers] = useState({p1: { score:0, icon: "X", winner:false, active: true},
                                          p2: { score: 0, icon: "O", winner:false, active: false}})

  return (
    <div className="App">
      <Header/>
      <Board players={players} setPlayers={setPlayers}/>
      <Scores players={players}/>
    </div>
  );
}

export default App;
