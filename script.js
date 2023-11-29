"use strict";

let color = "black";
let board = document.querySelector(".board");

createGrid(board, 16);

function createGrid(board, newSize) {
  //clear current grid
  while (board.firstChild) {
    board.removeChild(board.firstChild);
  }

  let squares = board.querySelectorAll("div");
  squares.forEach((div) => (div.style.backgroundColor = "white"));

  for (let c = 0; c < newSize; c++) {
    let gridRow = document.createElement("div");
    gridRow.classList.add("row");

    for (let i = 0; i < newSize; i++) {
      let square = document.createElement("div");
      square.classList.add("square");
      square.addEventListener("mouseover", colorSquare);
      square.style.backgroundColor = "white";
      gridRow.appendChild(square);
    }
    board.appendChild(gridRow);
  }
}

function changeSize(input) {
  if (input >= 2 && input <= 100) {
    createGrid(board, input);
  } else {
    console.log("too many squares");
  }
}

function colorSquare() {
  if (color === "random") {
    this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
  } else {
    this.style.backgroundColor = color;
  }
}

function changeColor(choice) {
  color = choice;
}

function reset() {
  let board = document.querySelector(".board");
  let squares = board.querySelectorAll("div");
  squares.forEach((div) => (div.style.backgroundColor = "white"));
}
