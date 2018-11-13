
class Barrier {
    constructor(grid, col, row) {
        this.grid = grid;
        this.col = col;
        this.row = row;
    }

    draw() {
        fill(25);
        noStroke();
        rectMode(CENTER);
        rect(this.grid.cellCenterX(this.col),
             this.grid.cellCenterY(this.row),
             this.grid.cellWidth,
             this.grid.cellHeight)
    }
}