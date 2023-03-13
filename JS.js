function makeGrid(dimension) {
  let container = document.createElement("div");
  container.classList.add("container", "grid");
  console.log("function called");
  for (let i = 0; i < dimension; i++) {
    let div = document.createElement("div");
    div.addEventListener("mouseover", hovering);
    container.appendChild(div);
  }
  document.body.appendChild(container);
}
