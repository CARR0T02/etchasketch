function makeGrid(dimension) {
  let container = document.createElement("div");
  container.classList.add("container", "grid");
  for (let i = 0; i < dimension ** 2; i++) {
    let div = document.createElement("div");
    div.setAttribute("draggable", "false");
    div.addEventListener("mouseover", hovering);
    div.addEventListener("mouseover", changeColor);
    div.addEventListener("mouseleave", hovering);
    div.addEventListener("mousedown", changeColor);
    container.appendChild(div).className = "cell";
  }
  container.addEventListener("contextmenu", (e) => {
    e.preventDefault();
  });
  container.style.setProperty("--grid-rows", dimension);
  container.style.setProperty("--grid-cols", dimension);

  document.body.appendChild(container);
  updateDisplay(dimension);
}

function hovering(e) {
  e.target.classList.toggle("hovering");
}

function changeDimension() {
  let dimension;
  do {
    dimension = prompt("How many rows/columns would you like? (Max 100)");
    dimension = parseInt(dimension);
  } while (dimension > 100);
  if (!dimension) {
    return;
  }
  container = document.querySelector(".container");
  document.body.removeChild(container);
  makeGrid(dimension);
}

function reset() {
  cells = document.querySelectorAll(".cell");
  cells.forEach((cell) => {
    cell.classList.remove("colored");
  });
}

function changeColor(e) {
  if (e.buttons == 1) {
    e.target.classList.add("colored");
  }
  if (e.buttons == 2) {
    e.target.classList.remove("colored");
  }
}

function updateDisplay(dimension) {
  display = document.getElementById("dimensionDisplay");
  display.textContent = `${dimension} x ${dimension}`;
}
makeGrid(10);
