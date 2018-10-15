var prompt = require("prompt");

var board = {
  1: " ",
  2: " ",
  3: " ",
  4: " ",
  5: " ",
  6: " ",
  7: " ",
  8: " ",
  9: " "
};

var wins = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [3, 6, 9],
  [1, 5, 9],
  [3, 5, 7],
  [1, 4, 7],
  [2, 5, 8]
];

function createBoard() {
  console.log(
    "Tic-Tac-Toe \n" +
      ` ${board[1]} | ${board[2]} | ${board[3]} \n` +
      `----------- \n` +
      ` ${board[4]} | ${board[5]} | ${board[6]} \n` +
      `----------- \n` +
      ` ${board[7]} | ${board[8]} | ${board[9]} \n`
  );
}

function move(square, piece) {
  board[square] = piece;
}

function validMove(num) {
  if (num > 0 && num < 10 && board[num] === " ") {
    return true;
  }
  return false;
}

function checkWin(player) {
  var count = 0;
  for (var i = 0; i < wins.length; i++) {
    for (var j = 0; j < wins[i].length; j++) {
      if (board[wins[i][j]] === player) {
        count++;
      }
      if (count === 3) {
        return true;
      }
    }
  }
  return false;
}

function checkTie() {
  var count = 0;
  for (var i = 1; i <= 9; i++) {
    if (board[i] !== " ") {
      count++;
    }
  }
  if (count === 9) {
    return true;
  }
  return false;
}

function playTurn(player) {
  console.log(
    "Let's begin: " +
      player +
      "Select a number to place your piece: \n" +
      " 1 | 2 | 3 \n" +
      " --------- \n" +
      " 4 | 5 | 6 \n" +
      " --------- \n" +
      " 7 | 8 | 9 \n"
  );
  prompt.start();
  prompt.get(["position"], function(err, result) {
    if (validMove(result.position) === true) {
      move(result.position, player);
      createBoard();
      if (checkWin(player) === true) {
        console.log(player + " wins!");
        return;
      }
      if (checkTie() === true) {
        console.log("Tie, try again!");
        return;
      }
      if (player === "O") {
        playTurn("X");
      } else {
        playTurn("O");
      }
    } else {
      console.log("please enter a different key");
      playTurn(player);
    }
  });
}

playTurn("X");
