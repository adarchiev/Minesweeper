import React from 'react';
import Board from './Board';
import GameConsole from './GameConsole';

function App() {

  return (
    <div >
      <header>
        <div style={{margin: "0 auto"}}>
          <GameConsole />
          <Board />
        </div>

      </header>
    </div>
  );
}

export default App;
