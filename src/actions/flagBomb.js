export const flagBomb = (arr = [0,0]) => (
  {
    type: 'FLAG_BOMB',
    payload: { discovered: arr }
  }
)