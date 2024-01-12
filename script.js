document.addEventListener("DOMContentLoaded", () => {
    const board = document.getElementById("board");
    const cells = document.querySelectorAll(".cell");
    const result = document.getElementById("result");
    const resetBtn = document.getElementById("resetBtn");
  
    let currentPlayer = "X";
    let gameBoard = ["", "", "", "", "", "", "", "", ""];
  
    const checkWinner = () => {
      const winningCombos = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
      ];
  
      for (const combo of winningCombos) {
        const [a, b, c] = combo;
        if (gameBoard[a] && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]) {
          return gameBoard[a];
        }
      }
  
      return null;
    };
  
    const checkDraw = () => {
      return !gameBoard.includes("");
    };
  
    const handleClick = (index) => {
      if (gameBoard[index] || checkWinner()) return;
  
      gameBoard[index] = currentPlayer;
      cells[index].innerText = currentPlayer;
      cells[index].classList.add(currentPlayer);
  
      const winner = checkWinner();
      const draw = checkDraw();
  
      if (winner) {
        result.innerText = `${winner} wins!`;
      } else if (draw) {
        result.innerText = "It's a draw!";
      } else {
        currentPlayer = currentPlayer === "X" ? "O" : "X";
      }
    };
  
    const resetGame = () => {
      gameBoard = ["", "", "", "", "", "", "", "", ""];
      currentPlayer = "X";
      result.innerText = "";
      cells.forEach((cell) => {
        cell.innerText = "";
        cell.classList.remove("X", "O");
      });
    };
  
    cells.forEach((cell, index) => {
      cell.addEventListener("click", () => handleClick(index));
    });
  
    resetBtn.addEventListener("click", resetGame);
  });
  