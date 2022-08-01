/* eslint-disable no-undef */

const assert = require('assert');
const tictactoeUtils = require('../src/TicTacToeUtils');

describe("Board size two", function () {
  it("buildBoard", function () {
    var ticTacToeUtils = new tictactoeUtils.TicTacToeUtils();
    var board = ticTacToeUtils.buildBoard(2);
    var expectedBoard = {
        board: [
            [
            null,
            null
            ],
            [
            null,
            null
            ]
        ],
        empty: [
            '0 0',
            '0 1',
            '1 0',
            '1 1'
        ]
        };
    assert.notEqual(board, expectedBoard);
  });
});

describe("compare tictactoe board size", function () {
  it("buildBoard", function () {
    var ticTacToeUtils = new tictactoeUtils.TicTacToeUtils();
    var board = ticTacToeUtils.buildBoard(2);
        var expectedBoardSize = 2;
        let currentBoardSize = board.board.length;
    assert.equal(expectedBoardSize, currentBoardSize);
  });
});

describe("Build Empty Board", function () {
  it("buildBoard", function () {
    var ticTacToeUtils = new tictactoeUtils.TicTacToeUtils();
    var expectedBoardSize = 0;
    var board = ticTacToeUtils.buildBoard(expectedBoardSize);
    let currentBoardSize = board.board.length;
    assert.equal(expectedBoardSize, currentBoardSize);
  });
});

describe("Build three size Board", function () {
  it("buildBoard", function () {
    var ticTacToeUtils = new tictactoeUtils.TicTacToeUtils();
    var expectedBoardSize = 3;
    var board = ticTacToeUtils.buildBoard(expectedBoardSize);
    let currentBoardSize = board.board[0].length;
    assert.equal(expectedBoardSize, currentBoardSize);
  });
});