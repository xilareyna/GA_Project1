const getdivs = document.querySelector(".container");
const modal = document.querySelector(".modal");
const closingX = document.querySelector(".modal-close");
const h3 = document.querySelector(".playNow");

// object that stores players and
//SwitchPlayer & whose turn Functions
const players = {
  player1: true,
  player2: false,

  switchPlayer() {
    players.player1 = !players.player1;
    players.player2 = !players.player2;
  },
  whoseTurn() {
    if (players.player1) {
      return { player: "p1", color: "blue" };
    } else {
      return {
        player: "p2",
        color: "purple",
      };
    }
  },
};
// closes the modal
closingX.addEventListener("click", () => {
  modal.classList.add("closed");
});
// adds functionality to the "Play Again" button (reloads page)
function refreshPage() {
  window.location.reload();
}

//creates the 6 columns for the game board
//& appends the columns to parent element
for (let c = 0; c < 6; c++) {
  let addCol = document.createElement("div");
  addCol.className = "col";
  addCol.id = "c" + c;
  getdivs.appendChild(addCol);

  // creates the 7 rows for the game board and
  //appends them to the columns above
  for (let r = 0; r < 7; r++) {
    let makeRow = document.createElement("div");
    makeRow.className = "row";
    let id = "c" + c + "r" + r;
    makeRow.id = id;
    addCol.appendChild(makeRow);

    let getCols = document.getElementsByClassName("col");
    // let getRows = document.getElementsByClassName("row");
    let boardHeight = getCols.length;

    // event listener that takes in unique id
    document.getElementById(id).addEventListener("click", function (e) {
      let target = e.currentTarget;
      //loops through the columns backwards
      for (let rowz = boardHeight - 1; rowz >= 0; rowz--) {
        let rowChild = getCols[rowz].children;
        //loops through the children of the columns
        for (let col = 0; col < rowChild.length; col++) {
          console.log(rowChild[col].getAttribute("id"));
          if (rowChild[col].getAttribute("id") === target.getAttribute("id")) {
            //checks if the column ids are = to the target attribute id
            if (players.whoseTurn().player === "p1") {
              const bottomId = "#c" + c + "r" + 6;
              changeCellColor(bottomId, 6, "#d0b3f2");
              //new
              rowChild[col].classList.add("#d0b3f2");
              checkForWins();

              return;
            } else {
              const bottomId = "#c" + c + "r" + 6;
              changeCellColor(bottomId, 6, "#BBF4F3");
              //new
              rowChild[col].classList.add("#BBF4F3");

              checkForWins();

              return;
            }
          }
        }
        function changeCellColor(id, rowNumber, color) {
          if (true) {
            if (!document.querySelector(id).getAttribute("data-taken")) {
              document.querySelector(id).style.backgroundColor = color;
              document
                .querySelector(id)
                .setAttribute("data-taken", players.whoseTurn().player);
            } else {
              for (let i = rowNumber - 1; i > 0; i--) {
                if (checkOtherCells(`#c${c}r${i}`)) {
                  continue;
                } else {
                  id = `#c${c}r${i}`;
                  break;
                }
              }
              document.querySelector(id).style.backgroundColor = color;
              document
                .querySelector(id)
                .setAttribute("data-taken", players.whoseTurn().player);
            }
          }
          players.switchPlayer();
          h3.innerHTML =
            players.whoseTurn().player === "p1"
              ? "Player 1, it's YOUR turn!🦄"
              : "Player 2, it's YOUR turn!🦋";
        }

        function checkOtherCells(id) {
          return !!document.querySelector(id).getAttribute("data-taken");
        }
      }
    });
  }
}

let player1 = true;

// winningComb1 = [
//   [c0r6, c1r6, c2r6, c3r6],
//   [c1r6, c2r6, c3r6, c4r6],
//   [c2r6, c3r6, c4r6, c5r6],
// ];
// (winningComb2 = [c0r5, c1r5, c2r5, c3r5]),
//   [(c1r5, c2r5, c3r5, c4r5)],
//   [(c2r5, c3r5, c4r5, c5r5)];
// (winningComb3 = [c0r4, c1r4, c2r4, c3r4]),
//   [(c1r4, c2r4, c3r4, c4r4)],
//   [(c2r4, c3r4, c4r4, c5r4)];
// (winningComb4 = [c0r3, c1r3, c2r3, c3r3]),
//   [(c1r3, c2r3, c3r3, c4r3)],
//   [(c2r3, c3r3, c4r3, c5r3)];
// (winningComb5 = [c0r2, c1r2, c2r2, c3r2]),
//   [(c1r2, c2r2, c3r2, c4r2)],
//   [(c2r2, c3r2, c4r2, c5r2)];
// (winningComb6 = [c0r1, c1r1, c2r1, c3r1]),
//   [(c1r1, c2r1, c3r1, c4r1)],
//   [(c2r1, c3r1, c4r1, c5r1)];

// function checkForWins(id) {
//   winningComb1.array.forEach((element) => {});
// }

// check through column
//is this p1 using "data taken" & whose turn
// are they ===
// dont assign to background color

// for (let i = 0; i < getCols.length; i++) {
//     let currentRow = rows[i].children;
//     for (let x = 0; x < currentRow.length; x++) {
//         if (document.body.classList.contains()) {
//             let currentCell = currentRow[x];
//             if (document.body.classList.contains()) (
//                 currentCell.style.backgroundColor !== "white" &&
//                 currentCell.style.backgroundColor ===
//                 currentRow[x + 1].style.backgroundColor &&
//                 currentCell.style.backgroundColor ===
//                 currentRow[x + 2].style.backgroundColor &&
//                 currentCell.style.backgroundColor ===
//                 currentRow[x + 3].style.backgroundColor
//             ); {
//                 alert(player1 + " Wins!");
//             }
//         }
//     }
