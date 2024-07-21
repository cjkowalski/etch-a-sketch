const grid = document.getElementById("grid");
const op1Button = document.getElementById("op1");
const op2Button = document.getElementById("op2");
const op3Button = document.getElementById("op3");
const clearButton = document.getElementById("clear");

let size = 16;

function createGrid() {
  for (let i = 0; i < size * size; i++) {
    const gridSquare = document.createElement("div");
    gridSquare.classList.add("squares");
    gridSquare.style.width = `calc(30vw / ${size})`
    gridSquare.style.height = `calc(30vw / ${size})`
    grid.appendChild(gridSquare);

    gridSquare.addEventListener("mouseover", () => {
      gridSquare.style.backgroundColor = "#272b29";
    })
    
  }

}

createGrid()

op1Button.addEventListener("click", function() {
  if (size === 16) {
    return;
  } else {
    size = 16;
    document.querySelectorAll('.squares').forEach(e => e.remove());
    createGrid()
  }
})

op2Button.addEventListener("click", function() {
  if (size === 32) {
    return;
  } else {
    size = 32;
    document.querySelectorAll('.squares').forEach(e => e.remove());
    createGrid()
  }
})

op3Button.addEventListener("click", function() {
  if (size === 64) {
    return;
  } else {
    size = 64;
    document.querySelectorAll('.squares').forEach(e => e.remove());
    createGrid()
  }
})

clearButton.addEventListener("click", function() {
  document.querySelectorAll('.squares').forEach(e => e.remove());
  createGrid()
})
