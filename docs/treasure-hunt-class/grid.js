
const DIRECTION = Object.freeze({
    UP: Symbol("UP"),
    DOWN: Symbol("DOWN"),
    LEFT: Symbol("LEFT"),
    RIGHT: Symbol("RIGHT")
});

class Grid {

    // Make a new grid with a specified number of rows and colums
    constructor(cols, rows) {
        this.cols = cols;
        this.rows = rows;
    }

    // This syntax allows other code to retrieve the cellWidth
    // as if it were a variable instead of a function.
    //   You use someGrid.cellWidth rather then someGrid.cellWidth()
    get cellWidth() {
        return width /this.cols;
    }
    get cellHeight() {
        return height / this.cols;
    }

    // Pass in the column index & this function returns the center 
    // x coordinate for that column
    cellCenterX(col) {
        return this.cellWidth * 1/2 + this.cellWidth * col
    }

    // Pass in the row index & this function returns the center y
    // coordinate for that column
    cellCenterY(row) {
        return  this.cellHeight * 1/2 + this.cellHeight * row
    }

    // Draws the grid on screen
    drawGrid() {
        strokeWeight(1);
        stroke(125);
        for(var c = 0; c <= this.cols; c++) {
            line(c * this.cellWidth, 0, c * this.cellWidth, height);
        }

        for(var r = 0; r <= this.rows; r++) {
            line(0, this.cellHeight * r,
                 width, this.cellHeight * r);
        }
    }

    // Draws an image to fit inside a cell in the grid. 
    // (does not alter the aspect ratio of the iamge)
    drawImageOnGrid(img, col, row, direction) {
        let aspectRatio = img.width / img.height;
        let drawWidth = min(grid.cellWidth, 
                            grid.cellHeight * aspectRatio);

        let drawHeight = min(grid.cellHeight,
                             grid.cellWidth / aspectRatio);                            

        push();
        translate(this.cellCenterX(col), this.cellCenterY(row));
        if (direction === DIRECTION.LEFT) {
            scale(-1, 1);
        }
        if (direction === DIRECTION.UP) {
            angleMode(DEGREES)
            rotate(-90)
        }
        if (direction === DIRECTION.DOWN) {
            angleMode(DEGREES)
            rotate(90)
        }
        imageMode(CENTER);
        image(img, 
              0, 0,
              drawWidth, drawHeight);
        pop();
    }
}