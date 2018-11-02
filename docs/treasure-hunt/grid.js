class Grid {
    constructor(cols, rows) {
        this.cols = cols;
        this.rows = rows;
    }

    get cellWidth() {
        return width / cols;
    }
    get cellHeight() {
        return height / cols;
    }

    cellCenterX(col) {
        return cellWidth * 1/2 + cellWidth * col
    }
    cellCenterY(row) {
        return  cellHeight * 1/2 + cellHeight * row
    }

    draw() {
        strokeWeight(1);
        stroke(0, 10);
        for(var c = 0; c < this.cols; c++) {
            line(c * this.cellWidth, 0, c * this.cellWidth, height);
        }

        for(var r = 0; r < this.rows; r++) {
            line(0, this.cellHeight * r,
                 width, this.cellHeight * r);
        }
    }
}