const container = document.querySelector("#container");
const button = document.querySelector(".sizeButton");

let gridSize = 16 * 16;

function makeGrid (gridSize) {
    for (let i = gridSize; i > 0; i--) {
        let tile = document.createElement("div");
        tile.setAttribute("class", `tile ${i}`)
        container.appendChild(tile);

    }
}
function colorBlack(elem) {
    const bgColor ="black";
    elem.style.backgroundColor = bgColor;
}

let tiles = Array.from(document.querySelectorAll(".tile"));

tiles.map(tile => tile.addEventListener("mouseover", () => (colorBlack(tile))));


button.addEventListener("click", () => {
    let size = prompt("max 100")
    while (size > 100) {
        size = prompt("max 100")
    }
    let newGridSize = size * size;
    
    makeGrid(newGridSize);
});


makeGrid(gridSize);
