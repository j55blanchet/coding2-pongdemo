


class Boy {
    constructor(grid, col, row) {
        this.grid = grid;
        this.col = col;
        this.row = row;

        this.idleImgs = [
            loadImage('assets/boy/idle/frame-1.png'),
            loadImage('assets/boy/idle/frame-2.png')
        ];
        this.curIdleImg = 0;
        
        this.moveSound = loadSound('assets/boy/footsteps.wav');
        this.direction = DIRECTION.RIGHT;

        this.moveSound.setVolume(0.4);
    }

    draw() {

        // to change the image three times a second,
        // rotate the curIdleImg every 20 frames
        if (frameCount % 20 === 0) {
            this.curIdleImg += 1;
            if (this.curIdleImg >= this.idleImgs.length) {
                this.curIdleImg = 0;
            }
        }

        let img = this.idleImgs[this.curIdleImg];
        this.grid.drawImageOnGrid(img, this.col, this.row, this.direction)
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
            this.moveSound.play()
        }
    }
    moveLeft() {
        if (this.col > 0) {
            this.col -= 1
            this.direction = DIRECTION.LEFT
            this.moveSound.play()
        }
    }
    moveUp() {
        if (this.row > 0) {
            this.row -= 1
            this.direction = DIRECTION.UP
            this.moveSound.play();
        }
    }
    moveDown() {
        if (this.row < grid.rows - 1) {
            this.row += 1
            this.direction = DIRECTION.DOWN
            this.moveSound.play();
        }
    }
}