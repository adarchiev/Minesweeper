import Cell from './Cell';

function createEmptySquares(x, y) {

  let squares = [];

  for (let ix = 0; ix < x; ix++) {
    let rows = [];

    for (let iy = 0; iy < y; iy++)
      rows[iy] = new Cell(ix, iy);

    squares[ix] = rows;
  }
  return squares;
};

export default class Board {

  constructor(size, numBombs, squares = null, numDiscovered = 0) {
    this.size = size;
    this.numBombs = numBombs;

    this.squares = (squares || createEmptySquares(size, size));
    this.numDiscovered = numDiscovered;
  }

  putBombs() {
    let bombsTmp = [];

    // Put bombs
    for (let i = 0; i < this.numBombs; i++) {
      let assigned = false;

      while (!assigned) {
        let x = parseInt(Math.random() * this.size, 10);
        let y = parseInt(Math.random() * this.size, 10);
        let sq = this.squares[x][y];
        if (sq.value !== 9) {
          sq.value = 9;
          bombsTmp.push(sq);
          assigned = true;
        }
      }
    }
    // Put numbers around
    bombsTmp.forEach(b => {
      let around = b.getAround(this.size, this.size);

      for (let i = 0; i < around.length; i++) {
        let square = this.squares[around[i][0]][around[i][1]];

        if (square.value !== 9)
          square.value++;
      }
    });
  };

  openBoard() {
    console.log("open");
    for (let ix = 0; ix < this.size; ix++) {
      for (let iy = 0; iy < this.size; iy++)
        this.squares[ix][iy].isDiscovered = true;
    }

  }
  clone() {
    let squares = [];
    for (let ix = 0; ix < this.size; ix++) {
      let rows = [];

      for (let iy = 0; iy < this.size; iy++)
        rows[iy] = this.squares[ix][iy].clone();

      squares[ix] = rows;
    }
    return new Board(this.size, this.numBombs, squares, this.numDiscovered);
  }

  checkWin() {
    console.log("open", this.numBombs, this.numDiscovered);
    if (this.size * this.size - this.numDiscovered === this.numBombs) {
      alert("YOU WIN");
    }
  }
}