let idleImages = []
let runningImages = []

let idleFramesPerSecond = 2
let runningFramesPerSecond = 3
let idleFrameModulo = 60 / idleFramesPerSecond,
    runningFramesModulo = 60 / runningFramesPerSecond;


class Boy {
    constructor(grid, col, row) {
        this.grid = grid;
        this.col = col;
        this.row = row;
        this.idleImgIndex = 0;
        this.runningImgIndex = 0;
        this.lastDirection = DIRECTION.RIGHT;
    }

    draw() {
        imageMode(CENTER)

        let img = idleImages[this.idleImgIndex]
        this.grid.drawImageOnGrid(img, this.col, this.row, this.lastDirection)

        if (frameCount % idleFrameModulo === 0) {
            this.idleImgIndex = (this.idleImgIndex + 1) % idleImages.length
        }
        if (frameCount % runningFramesModulo === 0) {
            this.runningImgIndex = (this.runningImgIndex + 1) % runningImages.length
        }
    }

    moveRight() {
        if (this.col < grid.cols - 1) {
            this.col += 1
            this.lastDirection = DIRECTION.RIGHT
        }
    }
    moveLeft() {
        if (this.col > 0) {
            this.col -= 1
            this.lastDirection = DIRECTION.LEFT
        }
    }
    moveUp() {
        if (this.row > 0) {
            this.row -= 1
            this.lastDirection = DIRECTION.UP
        }
    }
    moveDown() {
        if (this.row < grid.rows - 1) {
            this.row += 1
            this.lastDirection = DIRECTION.DOWN
        }
    }

    static loadImages() {
        idleImages = [
            loadImage('assets/boy/idle/frame-1.png'),
            loadImage('assets/boy/idle/frame-2.png')
        ]

        runningImages = [
            loadImage('assets/boy/running/frame-1.png'),
            loadImage('assets/boy/running/frame-2.png'),
            loadImage('assets/boy/running/frame-3.png'),
            loadImage('assets/boy/running/frame-4.png'),
            loadImage('assets/boy/running/frame-5.png'),
            loadImage('assets/boy/running/frame-6.png')
        ]
    }
}