import React from 'react';
import {useDispatch }from 'react-redux';
import {resetGame} from '../actions/newGame';


function GameConsole() {
  const dispatch = useDispatch();

  let size = 5;
  let bombs = 3;
  return (
    <div>
      <select name="level" onChange = { (e) => { size =e.target.value.split(',')[0]; bombs =e.target.value.split(',')[1] } }>
      <option value={[5,3]}  >easy</option>
        <option value={[10, 25]} >medium</option>
        <option value={[20, 150]} >hard</option>
      </select>
      <button onClick = { () => dispatch(resetGame(size, bombs) ) }>
        Restart
      </button>
    </div>
  );
}

export default GameConsole;
