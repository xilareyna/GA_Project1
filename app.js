const getdivs = document.querySelector(".container");
const modal = document.querySelector(".modal");
const closingX = document.querySelector(".modal-close");
const h3 = document.querySelector("h3");

closingX.addEventListener("click", () => {
  modal.classList.add("closed");
});

function refreshPage() {
  window.location.reload();
}

// for (let i = 0; i < 6; i++) {
//   let addCol = document.createElement("div");
//   addCol.className = "col";
//   addCol.id = "c" + i;
//   getdivs.appendChild(addCol);
// }

for (let a = 0; a < 6; a++) {
  let addCo = document.createElement("div");
  addCo.className = "col";
  addCo.id = "c" + a;
  getdivs.appendChild(addCo);
  for (let i = 0; i < 7; i++) {
    let makeCol = document.createElement("div");
    makeCol.className = "cols";
    id = "c" + a + "r" + i;
    makeCol.id = id;
    addCo.appendChild(makeCol);
    document.getElementById(id).addEventListener("click", function (e) {
      changeCSS(e.target.id);
    });
  }
}

let player1 = true;

function changeCSS(id) {
  if (player1 === true) {
    h3.innerHTML = "its player 2 turn";
    document.getElementById(id).style.backgroundColor = "purple";
  } else {
    h3.innerHTML = "its player 1 turn";
    document.getElementById(id).style.backgroundColor = "blue";
  }
  player1 = !player1;
}

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
const getColly = document.querySelector(".cols");
// console.log(getColly);
getColly.addEventListener("click", () => {
  getColly.classList.add("style");
});
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
