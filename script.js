const container = document.querySelector("#container");
const button = document.querySelector(".sizeButton");

const containerWidth = 384;

function makeGrid (gridSize) {
    const totalTiles = gridSize * gridSize;
    const tileSize = containerWidth / gridSize;


    for (let i = 0; i < totalTiles; i++) {
        const tile = document.createElement("div");
        tile.setAttribute("class", "tile")
        tile.style.width = `${tileSize}px`;
        tile.style.height = `${tileSize}px`;
        tile.addEventListener("mouseover", () => (colorBlack(tile)));
        container.appendChild(tile);
    }
}

function colorBlack(elem) {
    elem.style.backgroundColor = "black";
}

makeGrid(16);

button.addEventListener("click", () => {
    let size = prompt("Enter grid size (max 100):")
    while (size > 100 || isNaN(size) || size < 1) {
        size = prompt("Please enter a number between 1 and 100:")
    }
    size = parseInt(size);
    container.innerHTML = "";
    makeGrid(size);
});