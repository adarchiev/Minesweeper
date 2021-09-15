export const gameActions = (arr = [0,0]) => (
  {
    type: 'OPEN_CELL',
    payload: { discovered:  arr }
  }
)