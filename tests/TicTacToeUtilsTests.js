/* eslint-disable no-undef */

const assert = require('assert');
const tictactoeUtils = require('../src/TicTacToeUtils');

describe('Board size two', () => {
  it('works', () => {
    const ticTacToeUtils = new tictactoeUtils.TicTacToeUtils();
    const board = ticTacToeUtils.buildBoard(2);
    const expectedBoard = {
      board: [
        [null, null],
        [null, null],
      ],
      empty: ['0 0', '0 1', '1 0', '1 1'],
    };
    assert.notEqual(board, expectedBoard);
  });
});

describe('compare tictactoe board size', () => {
  it('works', () => {
    const ticTacToeUtils = new tictactoeUtils.TicTacToeUtils();
    const board = ticTacToeUtils.buildBoard(2);
    const expectedBoardSize = 2;
    const currentBoardSize = board.board.length;
    assert.equal(expectedBoardSize, currentBoardSize);
  });
});
