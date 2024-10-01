let board = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = "X";
let isGameActive = true;

const messageElement = document.getElementById("message");
const boardElement = document.getElementById("board");
const winningConditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

function handleClick(index) {
  if (board[index] !== "" || !isGameActive) return;
  board[index] = currentPlayer;
  updateBoard();
  checkForWinner();
  switchPlayer();
}

function updateBoard() {
  for (let i = 0; i < board.length; i++) {
    const cell = boardElement.children[i];
    cell.textContent = board[i];
  }
}

function checkForWinner() {
  for (let i = 0; i < winningConditions.length; i++) {
    const [a, b, c] = winningConditions[i];
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      messageElement.textContent = `Player ${currentPlayer} wins!`;
      isGameActive = false;
      return;
    }
  }
  
  if (!board.includes("")) {
    messageElement.textContent = "It's a draw!";
    isGameActive = false;
  }
}

function switchPlayer() {
  currentPlayer = currentPlayer === "X" ? "O" : "X";
  if (isGameActive) {
    messageElement.textContent = `Player ${currentPlayer}'s turn`;
  }
}

function resetGame() {
  board = ["", "", "", "", "", "", "", "", ""];
  currentPlayer = "X";
  isGameActive = true;
  messageElement.textContent = "Player X's turn";
  updateBoard();
}
