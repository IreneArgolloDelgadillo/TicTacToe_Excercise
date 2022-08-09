/* eslint-disable no-undef */

const assert = require('assert');
const tictactoeUtils = require('../src/TicTacToeUtils');

describe('Board size two', () => {
  it('buildBoard', () => {
    const ticTacToeUtils = new tictactoeUtils.TicTacToeUtils();
    const board = ticTacToeUtils.buildBoard(2);
    const expectedBoard = {
      board: [
        [
          null,
          null,
        ],
        [
          null,
          null,
        ],
      ],
      empty: [
        '0 0',
        '0 1',
        '1 0',
        '1 1',
      ],
    };
    assert.notEqual(board, expectedBoard);
  });
});

describe('compare tictactoe board size', () => {
  it('buildBoard', () => {
    const ticTacToeUtils = new tictactoeUtils.TicTacToeUtils();
    const board = ticTacToeUtils.buildBoard(2);
    const expectedBoardSize = 2;
    const currentBoardSize = board.board.length;
    assert.equal(expectedBoardSize, currentBoardSize);
  });
});

describe('Build Empty Board', () => {
  it('buildBoard', () => {
    const ticTacToeUtils = new tictactoeUtils.TicTacToeUtils();
    const expectedBoardSize = 0;
    const board = ticTacToeUtils.buildBoard(expectedBoardSize);
    const currentBoardSize = board.board.length;
    assert.equal(expectedBoardSize, currentBoardSize);
  });
});

describe('setup players', () => {
  it('setupPlayers', () => {
    const ticTacToeUtils = new tictactoeUtils.TicTacToeUtils();
    const currentConfiguration = ticTacToeUtils.setupPlayers(['Rocio', 'Pedro']);

    const containsRocioPlayers = currentConfiguration.find((player) => player.type === 'Rocio');
    assert.notEqual(containsRocioPlayers, null);

    const containsPedroPlayers = currentConfiguration.find((player) => player.type === 'Pedro');
    assert.notEqual(containsPedroPlayers, null);
  });
});

describe('setup more than two players', () => {
  it('setupPlayers', () => {
    const ticTacToeUtils = new tictactoeUtils.TicTacToeUtils();
    const players = ['Rocio', 'Pedro', 'Roberto'];
    const currentConfiguration = ticTacToeUtils.setupPlayers(players);
    assert.equal(0, currentConfiguration.length);
  });
});

describe('setup players', () => {
  it('setupPlayers', () => {
    const ticTacToeUtils = new tictactoeUtils.TicTacToeUtils();
    const currentConfiguration = ticTacToeUtils.setupPlayers(['Rocio', 'Pedro']);

    const containsRocioPlayers = currentConfiguration.find((player) => player.type === 'Rocio');
    assert.notEqual(containsRocioPlayers, null);

    const containsPedroPlayers = currentConfiguration.find((player) => player.type === 'Pedro');
    assert.notEqual(containsPedroPlayers, null);
  });
});

describe('setup more than two players', () => {
  it('setupPlayers', () => {
    const ticTacToeUtils = new tictactoeUtils.TicTacToeUtils();
    const players = ['Rocio', 'Pedro', 'Roberto'];
    const currentConfiguration = ticTacToeUtils.setupPlayers(players);
    assert.equal(0, currentConfiguration.length);
  });
});

describe('Build three size Board', () => {
  it('buildBoard', () => {
    const ticTacToeUtils = new tictactoeUtils.TicTacToeUtils();
    const expectedBoardSize = 3;
    const board = ticTacToeUtils.buildBoard(expectedBoardSize);
    const currentBoardSize = board.board[0].length;
    assert.equal(expectedBoardSize, currentBoardSize);
  });
});
