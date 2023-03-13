function makeGrid(dimension) {
  let container = document.createElement("div");
  container.classList.add("container", "grid");
  for (let i = 0; i < dimension ** 2; i++) {
    let div = document.createElement("div");
    div.addEventListener("mouseover", hovering);
    div.addEventListener("click", changeColor);
    container.appendChild(div).className = "cell";
  }
  container.style.setProperty("--grid-rows", dimension);
  container.style.setProperty("--grid-cols", dimension);
  document.body.appendChild(container);
}

function hovering(e) {
  e.target.classList.add("hovering");
  setTimeout(() => {
    e.target.classList.remove("hovering");
  }, 200);
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
  console.log(container);
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
  console.log(e);
  e.target.classList.add("colored");
}
makeGrid(10);
