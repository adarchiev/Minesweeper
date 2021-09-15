import Board from '../classes/Board';

let defaultState = {
	board: null,
}

export default (state = defaultState, action) => {
	let board = null;
	let square = null;

	switch (action.type) {
		case 'NEW_GAME':
			board = new Board(action.payload.size, action.payload.bombs);
			board.putBombs();
			return {...state, board: board };

		case 'OPEN_CELL':
			board = state.board.clone();
			let pos = action.payload.discovered;
			square = board.squares[pos[0]][pos[1]];
			if (square.value === 9) {
				square.isDiscovered = true;
				alert("You loose");
				board.openBoard();
				return { ...state,   board: board };
			}
			square.discover(board);
			board.checkWin();
			return { ...state, board: board };

		case 'FLAG_BOMB':
			board = state.board.clone();
			square = board.squares[action.payload.discovered[0]][action.payload.discovered[1]];
			square.toggleMarkFlagOrDoubt();
			board.checkWin();
			return { ...state, board: board };
			
		default: return state
	}
}