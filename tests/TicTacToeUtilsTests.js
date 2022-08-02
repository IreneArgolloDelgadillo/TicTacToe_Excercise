var tictactoeUtils = require('../src/TicTacToeUtils');

var assert = require('assert');
describe("the function", function () {
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
describe("setup players", function () {
  it("setupPlayers", function () {
    const ticTacToeUtils = new tictactoeUtils.TicTacToeUtils();
    let currentConfiguration = ticTacToeUtils.setupPlayers(["Rocio", "Pedro"])
    
    let containsRocioPlayers = currentConfiguration.find(player => { return player.type === "Rocio"});
    assert.notEqual(containsRocioPlayers, null);

    let containsPedroPlayers = currentConfiguration.find(player => { return player.type === "Pedro"});
    assert.notEqual(containsPedroPlayers, null);
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
