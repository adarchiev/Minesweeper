import React from 'react';
import styled from "styled-components";
import {gameActions} from '../actions/gameActions';
import {flagBomb} from '../actions/flagBomb';
import background from '../pics/background.png' 
import bomb from '../pics/bomb.png' 
import flag from '../pics/flag.png' 
import {useSelector, useDispatch }from 'react-redux';


const CustomTD = styled.td`
  border: 1px solid black; 
  width:28px;
  line-height:28px;
  height:28px;
`;

const CustomDIV = styled.div`
  font-family: Arial, Helvetica, sans-serif;
  font-size: 10px;
  text-align: center;
  background-color:BADA55;
`;


function Cell(props) {
  
  const dispatch = useDispatch();

  const cell = useSelector(state => state.board.squares[props.pos[0]][props.pos[1]]);
  const { pic, isDiscovered ,marked} = cell;

  let picUrl = background;
  const val = props.value.value;
  let cellVal = '';
  if(isDiscovered) {
    console.log('here')
    if(val === 9) {
      picUrl = bomb;
    } else if( val < 9 && val > 0) {
      cellVal = val;
      picUrl = '';
    }else if(val === 0){
      picUrl = '';
    } 
  }else if(marked){
    console.log(444)
    picUrl = flag;
  }

  return (
    <CustomTD onClick = { () => dispatch(gameActions(props.pos)) } onContextMenu={ () => {dispatch(flagBomb(props.pos))} } style ={{background: `url(${picUrl})`}} value={val} id={props.pos}>
      <CustomDIV >
      {cellVal}
      </CustomDIV>
    </CustomTD>
  );
}

export default Cell;
