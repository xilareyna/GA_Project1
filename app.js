const getdivs = document.querySelector(".container");
const modal = document.querySelector(".modal");
const closingX = document.querySelector(".modal-close");
const h3 = document.querySelector("h3");
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
    let getRows = document.getElementsByClassName("row");
    let boardHeight = getCols.length;
    console.log(boardHeight);
    //    document.getElementById(id).addEventListener("click", function (e) {
    //       changeCSS(e.target.id);
    //     });

    // added event listener here because of what I had before and added
    //to the event with code inspo that arthur sent

    document.getElementById(id).addEventListener("click", function (e) {
      let target = e.currentTarget;

      let rows = document.querySelectorAll(".row");

      for (let rowz = boardHeight - 1; rowz >= 0; rowz--) {
        let rowChild = getCols[rowz].children;
        // console.log(rowChild);
        for (let col = 0; col < rowChild.length; col++) {
          console.log(rowChild[col].getAttribute("id"));
          if (rowChild[col].getAttribute("id") === target.getAttribute("id")) {
            // if (rowChild[col].style.backgroundColor === "white") {
            if (players.whoseTurn().player === "p1") {
              // rowChild[col].style.backgroundColor = "#8CCFF3";
              console.log("im running");
              const bottomId = "#c" + c + "r" + 6;
              changeCellColor(bottomId, 6, "blue");
              checkForWins();

              return;
            } else {
              const bottomId = "#c" + c + "r" + 6;
              changeCellColor(bottomId, 6, "purple");
              checkForWins();

              return;
            }
            // }
          }
        }
        function changeCellColor(id, rowNumber, color) {
          if (true) {
            if (!document.querySelector(id).getAttribute("data-taken")) {
              document.querySelector(id).style.backgroundColor = color;
              document
                .querySelector(id)
                .setAttribute("data-taken", players.whoseTurn().player);
              console.log(document.querySelector(id));
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
              console.log(document.querySelector(id));
            }
            // document.getElementById("c0").style.backgroundColor = "green";
          } else {
            h3.innerHTML = "its player 1 turn";
            document.querySelector(id).style.backgroundColor = "#B292F5";
          }
          players.switchPlayer();
          h3.innerHTML =
            players.whoseTurn().player === "p1"
              ? "its player 1 turn"
              : "its player 2 turn";
        }

        function checkOtherCells(id) {
          return !!document.querySelector(id).getAttribute("data-taken");
        }
      }
    });
  }
}

let player1 = true;

function checkForWins() {
  for (let i = 0; i < rows.length; i++) {
    let currentRow = rows[i].children;

    for (let x = 0; x < 4; x++) {
      let currentCell = currentRow[x];

      console.log(currentCell.style.backgroundColor);
      if (
        currentCell.style.backgroundColor !== "white" &&
        currentCell.style.backgroundColor ===
          currentRow[x + 1].style.backgroundColor &&
        currentCell.style.backgroundColor ===
          currentRow[x + 2].style.backgroundColor &&
        currentCell.style.backgroundColor ===
          currentRow[x + 3].style.backgroundColor
      ) {
        alert(player1 + " Wins!");
      }
    }
  }
}

// if (
//     !document.getElementById(colNum, rowNum).classList.contains("taken")
// ) {
//     document.getElementById(colNum, rowNum).setAttribute("class", "taken");

//     changeCellColor(colNum, rowNum);
// } else if (
//     !document.getElementById(colNum, rowNum).classList.contains("taken")
// ) {
//     changeCellColor(colNum, rowNum);
// }
//   arr[i] = player1;
//   const colNum = Number(e.target.id[1]);
//   const rowNum = Number(e.target.id[3]);

//   document.getElementById(addCo.id).addEventListener("click", function (e) {
//     //   makeCol.setAttribute("class", "taken");
//     //   arr[i] = player1;

//     changeCSS(e.target.id);
//   });
//   arr[a] = ["c" + a];

// let activities = [
//   ["Work", 9],
//   ["Eat", 1],
//   ["Commute", 2],
//   ["Play Game", 1],
//   ["Sleep", 7],
// ];
// console.table(activities);

// const getIDZ = document.querySelectorAll(".taken");
// if (getIDZ === true) {
//   alert("that cell is taken");
// }
// console.log(getIDZ);

// for (let i = 0; i < 6; i++) {
//   let addCol = document.createElement("div");
//   addCol.className = "col";
//   addCol.id = "c" + i;
//   getdivs.appendChild(addCol);
// }
// document.getElementById("c5r0").onclick = changeColor;

//
// for (let k=0; )

// getCol0.addEventListener("click", () => {
//   if (player1 === true) {
//     h3.innerHTML = "its player 1 turn";
//   } else {
//     h3.innerHTML = "its player 2 turn";
//   }
//   player1 = !player1;
// });

// getCol1.addEventListener("click", () => {
//   if (player1 === true) {
//     h3.innerHTML = "its player 1 turn";
//   } else {
//     h3.innerHTML = "its player 2 turn";
//   }
//   player1 = !player1;
// });

// getCol2.addEventListener("click", () => {
//   if (player1 === true) {
//     h3.innerHTML = "its player 1 turn";
//   } else {
//     h3.innerHTML = "its player 2 turn";
//   }
//   player1 = !player1;
// });
// getCol3.addEventListener("click", () => {
//   if (player1 === true) {
//     h3.innerHTML = "its player 1 turn";
//   } else {
//     h3.innerHTML = "its player 2 turn";
//   }
//   player1 = !player1;
// });
// getCol4.addEventListener("click", () => {
//   if (player1 === true) {
//     h3.innerHTML = "its player 1 turn";
//   } else {
//     h3.innerHTML = "its player 2 turn";
//   }
//   player1 = !player1;
// });
// getCol5.addEventListener("click", () => {
//   if (player1 === true) {
//     h3.innerHTML = "its player 1 turn";
//   } else {
//     h3.innerHTML = "its player 2 turn";
//   }
//   player1 = !player1;
// });

// const getCol0 = document.querySelector("#c0");
// const getCol1 = document.querySelector("#c1");
// const getCol2 = document.querySelector("#c2");
// const getCol3 = document.querySelector("#c3");
// const getCol4 = document.querySelector("#c4");
// const getCol5 = document.querySelector("#c5");

//
// for (let i = 0; i < 7; i++) {
//   let makeCol = document.createElement("div");
//   makeCol.className = "cols";
//   makeCol.id = "c1r" + i;
//   getCol1.appendChild(makeCol);
// }

// for (let i = 0; i < 7; i++) {
//   let makeCol = document.createElement("div");
//   makeCol.className = "cols";
//   makeCol.id = "c2r" + i;
//   getCol2.appendChild(makeCol);
// }
// for (let i = 0; i < 7; i++) {
//   let makeCol = document.createElement("div");
//   makeCol.className = "cols";
//   makeCol.id = "c3r" + i;
//   getCol3.appendChild(makeCol);
// }
// for (let i = 0; i < 7; i++) {
//   let makeCol = document.createElement("div");
//   makeCol.className = "cols";
//   makeCol.id = "c4r" + i;
//   getCol4.appendChild(makeCol);
// }
// for (let i = 0; i < 7; i++) {
//   let makeCol = document.createElement("div");
//   makeCol.className = "cols";
//   makeCol.id = "c5r" + i;
//   getCol5.appendChild(makeCol);
// }

// function myFunction() {
//   document.querySelectorAll(".cols").style.color = "red";
// }
// const getColly = document.querySelector(".cols");
// // console.log(getColly);
// getColly.addEventListener("click", () => {
//   getColly.classList.add("style");
// });
// const clickMe = (clr) => {
//   getCol0.classList.add("red");
// };
// // const getCol6 = document.querySelector("#r6");
// getCol0.addEventListener("click", clickMe);
// getRow1.addEventListener("click", clickMe);
// getRow2.addEventListener("click", clickMe);
// getRow3.addEventListener("click", clickMe);
// getRow4.addEventListener("click", clickMe);
// getRow5.addEventListener("click", clickMe);
// getRow6.addEventListener("click", clickMe);

// const clickMeAgain = () => {
//   getCol1.classList.add("red");
// };
// const getCol1 = document.querySelector(".row");
// getCol1.addEventListener("click", clickMeAgain);

// const getCol = document.querySelector(".column");
// const getcol1 = document.getElementsByClassName("col-1");

// for (let i = 0; i < 6; i++) {
//   let newDiv = document.createElement("div");
//   newDiv.setAttribute("class", "col1");
//   getcol1.appendChild(newDiv);
// }
// getdivs.appendChild(getcol1);
// for (let i = 0; i < 6; i++) {
//   let newDiv = document.createElement("div");
//   newDiv.setAttribute("class", "makeCol");
//   newDiv.setAttribute("class", "col1");

//   getCol.appendChild(newDiv);
// }
// for (let i = 0; i < 6; i++) {
//   let newDiv = document.createElement("div");
//   newDiv.setAttribute("class", "makeCol");

//   newDiv.setAttribute("class", "col2");
//   getCol.appendChild(newDiv);
// }
// for (let i = 0; i < 6; i++) {
//   let newDiv = document.createElement("div");
//   newDiv.setAttribute("class", "makeCol");

//   newDiv.setAttribute("class", "col3");
//   getCol.appendChild(newDiv);
// }
// for (let i = 0; i <= 6; i++) {
//   let newDiv = document.createElement("div");
//   newDiv.setAttribute("class", "col4");
//   getCol.appendChild(newDiv);
// }
// for (let i = 0; i <= 6; i++) {
//   let newDiv = document.createElement("div");
//   newDiv.setAttribute("class", "col5");
//   getCol.appendChild(newDiv);
// }
// for (let i = 0; i <= 6; i++) {
//   let newDiv = document.createElement("div");
//   newDiv.setAttribute("class", "col6");
//   getCol.appendChild(newDiv);
// }
// for (let i = 0; i <= 6; i++) {
//   let newDiv = document.createElement("div");
//   newDiv.setAttribute("class", "col7");
//   getCol.appendChild(newDiv);
// }

// for (let i = 0; i <= 7; i++) {
//   let newDiv = document.createElement("div");
//   newDiv.setAttribute("class", "permDisc");
//   getdivs.appendChild(newDiv);
// }
