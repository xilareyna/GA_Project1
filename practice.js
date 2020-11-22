let boardWidth = 7;
let boardHeight = 6;
window.onload = () => {
  let cells = document.getElementsByClassName("cell");
  for (let i = 0; i < cells.length; i++) {
    cells[i].style.backgroundColor = "white";
  }
  let currentPlayerColor = "red";
  let rows = document.querySelectorAll("tr");
  document
    .getElementById("gameboard")
    .addEventListener("click", function (event) {
      // checkForHorizontalWin()
      let target = event.target;
      // console.log(target.getAttribute('class'))
      // console.log(rows[rows.length-1])
      for (let row = boardHeight - 1; row >= 0; row--) {
        let lastRowChilds = rows[row].children;
        // console.log(lastRowChilds);
        for (let col = 0; col < lastRowChilds.length; col++) {
          if (
            lastRowChilds[col].getAttribute("class") ===
            target.getAttribute("class")
          ) {
            //console.log(lastRowChilds[col].style.backgroundColor);
            if (lastRowChilds[col].style.backgroundColor === "white") {
              if (currentPlayerColor === "red") {
                lastRowChilds[col].style.backgroundColor = "red";
                checkForHorizontalWin();
                updateTurn();
                return;
              } else {
                lastRowChilds[col].style.backgroundColor = "yellow";
                checkForHorizontalWin();
                updateTurn();
                return;
                // return exits the function while break stays in function and just exits the current for loop
              }
            }
          }
        }
      }
      function updateTurn() {
        if (currentPlayerColor === "red") {
          currentPlayerColor = "yellow";
          document.querySelector("#c").textContent = "yellow";
        } else if (currentPlayerColor === "yellow") {
          currentPlayerColor = "red";
          document.querySelector("#c").textContent = "red";
        }
      }
    });

  function checkForHorizontalWin() {
    for (let i = 0; i < rows.length; i++) {
      let currentRow = rows[i].children;
      // console.log(currentRow)
      // calls each row
      for (let j = 0; j < 4; j++) {
        let currentCell = currentRow[j];
        // console.log(currentCell)
        //calls first 4 cells in each row
        //current cell is at j. next cell is currentrow[j+1], j+2, j+3, J+4 && yellow || red === .style.backgroundColor
        console.log(currentCell.style.backgroundColor);
        if (
          currentCell.style.backgroundColor !== "white" &&
          currentCell.style.backgroundColor ===
            currentRow[j + 1].style.backgroundColor &&
          currentCell.style.backgroundColor ===
            currentRow[j + 2].style.backgroundColor &&
          currentCell.style.backgroundColor ===
            currentRow[j + 3].style.backgroundColor
          // currentCell.style.backgroundColor === currentRow[j+4].style.backgroundColor
        ) {
          alert(currentPlayerColor + " Wins!");
        }
      }
    }
  }
};
