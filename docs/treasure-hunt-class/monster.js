
let monsterImage

class Monster {
    constructor(grid, col, row) {
        this.grid = grid;
        this.col = col;
        this.row = row;

        this.img = loadImage('assets/monster/spiky-monster.png');
        this.direction = DIRECTION.RIGHT;
    }

    draw() {
        this.grid.drawImageOnGrid(this.img, this.col, this.row, this.direction)
    }

    nextPosition(moveDirection) {

        switch(moveDirection) {
        case DIRECTION.UP:
            return { col: this.col, 
                     row: this.row - 1}
        case DIRECTION.DOWN:
            return { col: this.col,
                     row: this.row + 1}
        case DIRECTION.LEFT:
            return { col: this.col - 1,
                     row: this.row }
        case DIRECTION.RIGHT:
            return { col: this.col + 1,
                     row: this.row }
        }
    }
    moveTowards(col, row) {
        if (col < this.col) {
            this.moveLeft();
            return
        }

        if (col > this.col) {
            this.moveRight();
            return;
        }

        if (row < this.row) {
            this.moveUp();
            return;
        }

        if (row > this.row) {
            this.moveDown();
            return;
        }
    }

    move(moveDirection) {

        switch (moveDirection) {
            case DIRECTION.UP:
                this.moveUp();
                break;
            case DIRECTION.DOWN:
                this.moveDown();
                break;
            case DIRECTION.LEFT:
                this.moveLeft();
                break;
            case DIRECTION.RIGHT:
                this.moveRight();
                break;
        }
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