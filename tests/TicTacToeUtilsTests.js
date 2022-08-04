/* eslint-disable no-undef */
const assert = require('assert');
const tictactoeUtils = require('../src/TicTacToeUtils');

describe('Board size two', () => {
  it('works', () => {
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

//<<<<<<< HEAD
describe('compare tictactoe board size', () => {
  it('works', () => {
    const ticTacToeUtils = new tictactoeUtils.TicTacToeUtils();
    const board = ticTacToeUtils.buildBoard(2);
    const expectedBoardSize = 2;
    const currentBoardSize = board.board.length;
    assert.equal(expectedBoardSize, currentBoardSize);
  });
});
//=======
describe("compare tictactoe board size", function () {
  it("works", function () {
    var ticTacToeUtils = new tictactoeUtils.TicTacToeUtils();
    var board = ticTacToeUtils.buildBoard(2);
        var expectedBoardSize = 2;
        let currentBoardSize = board.board.length;
    assert.equal(expectedBoardSize, currentBoardSize);
  });
});

//<<<<<<< .merge_file_a06892
//61one comment//
//=======
describe("setup players", function () {
  it("setupPlayers", function () {
    const ticTacToeUtils = new tictactoeUtils.TicTacToeUtils();
    let currentConfiguration = ticTacToeUtils.setupPlayers(["Rocio", "Pedro"])
    
    let containsRocioPlayers = currentConfiguration.find(player => { return player.type === "Rocio"});
    assert.notEqual(containsRocioPlayers, null);

    let containsPedroPlayers = currentConfiguration.find(player => { return player.type === "Pedro"});
    assert.notEqual(containsPedroPlayers, null);
    //Para Ej 8//
  });
});

describe("setup more than two players", function () {
  it("setupPlayers", function () {
    const ticTacToeUtils = new tictactoeUtils.TicTacToeUtils();
    let players = ["Rocio", "Pedro", "Roberto"];
    let currentConfiguration = ticTacToeUtils.setupPlayers(players)
    assert.equal(0, currentConfiguration.length);
  });
});
 feature/setupPlayersUnitTests
 .merge_file_a21176
