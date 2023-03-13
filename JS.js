function makeGrid(dimension) {
  let container = document.createElement("div");
  container.classList.add("container", "grid");
  for (let i = 0; i < dimension ** 2; i++) {
    let div = document.createElement("div");
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
  }, 1000);
}
makeGrid(10);
