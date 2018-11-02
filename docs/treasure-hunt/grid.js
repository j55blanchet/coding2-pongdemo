class Grid {
    constructor(cols, rows) {
        this.cols = cols;
        this.rows = rows;
    }

    get cellWidth() {
        return width /this.cols;
    }
    get cellHeight() {
        return height / this.cols;
    }

    cellCenterX(col) {
        return this.cellWidth * 1/2 + this.cellWidth * col
    }
    cellCenterY(row) {
        return  this.cellHeight * 1/2 + this.cellHeight * row
    }

    draw() {
        strokeWeight(1);
        stroke(125);
        for(var c = 0; c < this.cols; c++) {
            line(c * this.cellWidth, 0, c * this.cellWidth, height);
        }

        for(var r = 0; r < this.rows; r++) {
            line(0, this.cellHeight * r,
                 width, this.cellHeight * r);
        }
    }
}