import background from '../pics/background.png';
export default class Cell {

  constructor(x, y) {
    this.position = [x, y];
    this.value = 0;
    this.isDiscovered = false;
    this.marked = false;
    this.pic = background;
  }

  getAround(limitX, limitY) {
    let around = [];

    let x = this.position[0];
    let y = this.position[1];

    for (let i = ((x === 0) ? x : x - 1); i <= (x === limitX - 1 ? x : x + 1); i++)
      for (let j = ((y === 0) ? y : y - 1); j <= (y === limitY - 1 ? y : y + 1); j++)
        around.push([i, j]);

    return around;
  }

  discover(board) {
    if (!this.isDiscovered) {
      this.isDiscovered = true;
      board.numDiscovered++;
      if (this.value === 0) {
        let around = this.getAround(board.size, board.size);
        around.forEach(sqPos => {
          return board.squares[sqPos[0]][sqPos[1]].discover(board);
        });
      }
      if (board.numDiscovered === (board.size * board.size) - board.numBombs)
        return true;
    }

    return false;
  }

  toggleMarkFlagOrDoubt() {
    this.marked = !this.marked;
  }

  clone() {
    return Object.assign(Object.create(Object.getPrototypeOf(this)), this);
  }
}