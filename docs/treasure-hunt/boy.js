let idleImages = []
let runningImages = []

let idleFramesPerSecond = 2
let runningFramesPerSecond = 3
let idleFrameModulo = 60 / idleFramesPerSecond,
    runningFramesModulo = 60 / runningFramesPerSecond;

const DIRECTION = Object.freeze({
    UP: Symbol("UP"),
    DOWN: Symbol("DOWN"),
    LEFT: Symbol("LEFT"),
    RIGHT: Symbol("RIGHT")
});

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
        imageMode(CENTER);

        let img = idleImages[this.idleImgIndex];

        if (frameCount % idleFrameModulo === 0) {
            this.idleImgIndex = (this.idleImgIndex + 1) % idleImages.length
        }
        if (frameCount % runningFramesModulo === 0) {
            this.runningImgIndex = (this.runningImgIndex + 1) % runningImages.length
        }
        
        let aspectRatio = img.width / img.height;
        let drawWidth = min(grid.cellWidth, 
                            grid.cellHeight * aspectRatio);

        let drawHeight = min(grid.cellHeight,
                             grid.cellWidth / aspectRatio);                            

        push();
        translate(grid.cellCenterX(this.col), grid.cellCenterY(this.row));
        if (this.lastDirection === DIRECTION.LEFT) {
            scale(-1, 1);
        }
        if (this.lastDirection === DIRECTION.UP) {
            angleMode(DEGREES)
            rotate(-90)
        }
        if (this.lastDirection === DIRECTION.DOWN) {
            angleMode(DEGREES)
            rotate(90)
        }
        image(img, 
              0, 0,
              drawWidth, drawHeight);
        pop();
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