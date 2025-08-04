const container = document.querySelector("#container");

const sixteenBySixteen = 16 * 16;

for (let i = sixteenBySixteen; i > 0; i--) {
    let tile = document.createElement("div");
    tile.setAttribute("class", `tile ${i}`)
    container.appendChild(tile);
}
function colorBlack(elem) {
    const bgColor ="black";
    elem.style.backgroundColor = bgColor;
}

let nodes = document.querySelectorAll(".tile")

let tiles = Array.from(nodes);

tiles.map(tile => tile.addEventListener("mouseover", () => (colorBlack(tile))))

// for each tile
// add mouseover eventlistener
// if event color tile