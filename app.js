const getdivs = document.querySelector(".container");
const modal = document.querySelector(".modal");
const closingX = document.querySelector(".modal-close");
// const getCol = document.querySelector(".column");
// const getcol1 = document.getElementsByClassName("col-1");

// tried to close modal
closingX.addEventListener("click", () => {
  modal.classList.add("closed");
});

for (let i = 0; i < 6; i++) {
  let addRow = document.createElement("div");
  addRow.className = "row";

  addRow.id = "r" + i;

  getdivs.appendChild(addRow);
}

const getRow0 = document.querySelector("#r0");
const getRow1 = document.querySelector("#r1");
const getRow2 = document.querySelector("#r2");
const getRow3 = document.querySelector("#r3");
const getRow4 = document.querySelector("#r4");
const getRow5 = document.querySelector("#r5");
const getRow6 = document.querySelector("#r6");

for (let i = 0; i < 7; i++) {
  let makeCol = document.createElement("div");
  makeCol.className = "col";
  makeCol.id = "c0" + "r" + i;
  getRow0.appendChild(makeCol);
}

for (let i = 0; i < 7; i++) {
  let makeCol = document.createElement("div");
  makeCol.className = "col";
  makeCol.id = "c1r" + i;
  getRow1.appendChild(makeCol);
}
for (let i = 0; i < 7; i++) {
  let makeCol = document.createElement("div");
  makeCol.className = "col";
  makeCol.id = "c2r" + i;
  getRow2.appendChild(makeCol);
}
for (let i = 0; i < 7; i++) {
  let makeCol = document.createElement("div");
  makeCol.className = "col";
  makeCol.id = "c3r" + i;
  getRow3.appendChild(makeCol);
}
for (let i = 0; i < 7; i++) {
  let makeCol = document.createElement("div");
  makeCol.className = "col";
  makeCol.id = "c4r" + i;
  getRow4.appendChild(makeCol);
}
for (let i = 0; i < 7; i++) {
  let makeCol = document.createElement("div");
  makeCol.className = "col";
  makeCol.id = "c5r" + i;
  getRow5.appendChild(makeCol);
}
for (let i = 0; i < 7; i++) {
  let makeCol = document.createElement("div");
  makeCol.className = "col";
  makeCol.id = "c6r" + i;
  getRow6.appendChild(makeCol);
}

const clickMe = () => {
  alert("hi sdfhsdn");
};

const getDisc = document.querySelector("#r0");
getDisc.addEventListener("click", clickMe);

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
