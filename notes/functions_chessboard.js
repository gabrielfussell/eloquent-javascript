let gridSize = 8;
let totalSpaces = gridSize * gridSize;
let spaceSwitcher = true;
let grid = "";

for(i = 0; i < totalSpaces; ++i) {
    /*
    If we're at the character limit for a row, create a
    new line and duplicate the last character used
    */
    if(i !== 0 && i % gridSize == 0) {
        let lastChar = grid.slice(-1);
        grid = grid + "\n" + lastChar;
    } else {
        if(spaceSwitcher == true) {
            grid = grid + " ";
        } else {
            grid = grid + "#";
        }
        spaceSwitcher = !spaceSwitcher;
    } 
}

console.log(grid);