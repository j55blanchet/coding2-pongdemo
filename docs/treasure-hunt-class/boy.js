class Boy {
    constructor(grid, col, row) {
        this.grid = grid;
        this.col = col;
        this.row = row;
        this.img =loadImage('assets/boy/idle/frame-1.png');
        this.direction = DIRECTION.RIGHT;
    }

    draw() {
        this.grid.drawImageOnGrid(this.img, this.col, this.row, this.direction)
    }

    moveRight() {
        if (this.col < grid.cols - 1) {
            this.col += 1
            this.direction = DIRECTION.RIGHT
        }
    }
    moveLeft() {
        if (this.col > 0) {
            this.col -= 1
            this.direction = DIRECTION.LEFT
        }
    }
    moveUp() {
        if (this.row > 0) {
            this.row -= 1
            this.direction = DIRECTION.UP
        }
    }
    moveDown() {
        if (this.row < grid.rows - 1) {
            this.row += 1
            this.direction = DIRECTION.DOWN
        }
    }
}