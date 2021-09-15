export const resetGame = (size, bombs) => (
  {
    type: 'NEW_GAME',
    payload: { size: size, bombs: bombs }
  }
)
