const getdivs = document.querySelector(".container");
const modal = document.querySelector(".modal");
// const closingX = document.querySelector(".modal-close");

// tried to close modal
// closingX.addEventListener("click", () => {
//     modal.classList.add("closed");
// });

for (let i = 0; i <= 42; i++) {
  let newDiv = document.createElement("div");
  newDiv.setAttribute("class", "disc");
  getdivs.appendChild(newDiv);
}

for (let i = 0; i <= 7; i++) {
  let newDiv = document.createElement("div");
  newDiv.setAttribute("class", "permDisc");
  getdivs.appendChild(newDiv);
}

// for (let i = 0; i <= 6; i++) {
//   let newDiv = document.createElement("div");
//   newDiv.setAttribute("class", "disc");
//   getdivs.appendChild(newDiv);
// }
