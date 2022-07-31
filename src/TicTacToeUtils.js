/* eslint-disable class-methods-use-this */
const tictactoeConstants = require('./constants');

class TicTacToeUtils {
  /**
   * Builds the board data object with a 3x3 array and an array of
   * empty cells
   * @private
   */
  buildBoard(boardSize) {
    const data = {
      board: [],
      empty: [],
    };

    for (let i = 0; i < boardSize; i += 1) {
      const row = [];

      for (let k = 0; k < boardSize; k += 1) {
        row.push(null);
        data.empty.push(`${i} ${k}`);
      }

      data.board.push(row);
    }

    return data;
  }

  /**
   * Sets the players array with the types supplied, and markers (x and o)
   * chosen at random
   * @private
   */
  setupPlayers(playerTypes) {
    let initialIndex = 0;
    let players = [];
    if (playerTypes.length === 2) {
      initialIndex = Math.round(Math.random());

      players = [
        {
          marker: tictactoeConstants.playerMarks[initialIndex],
          type: playerTypes[0],
        },
        {
          marker: tictactoeConstants.playerMarks[!initialIndex || 0],
          type: playerTypes[1],
        },
      ];
    }
    return players;
  }

  /**
   * Rotates the players. Switches which player is currently active
   * @private
   */
  rotatePlayers(players) {
    players.push(players.shift());
  }
}

module.exports = { TicTacToeUtils };
