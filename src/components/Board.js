import React from 'react';
import {useSelector }from 'react-redux';
import Cell from './Cell';

function  Board() {
  const squares = useSelector(state => state.board !== null ? state.board.squares : []);
  return (
    <table border="0" className="board" >
      <tbody>
        {
          squares.map((bx, xind) =>
            (<tr key={xind}>
              {
                bx.map((by, yind) => (
                  <Cell key={xind+yind} pos={[xind, yind]} value={by}/>
                ))
              }
            </tr>))
        }
      </tbody>
    </table>
  );
}

export default Board;
