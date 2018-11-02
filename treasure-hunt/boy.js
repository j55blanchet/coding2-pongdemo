class Boy {
    static idleImages;
    static runningImages;

    constructor(grid, col, row) {
        this.grid = grid;
        this.col = col;
        this.row = row;
    }

    draw() {
        imageMode(CENTER);
        image(idleImages[0], 
              grid.cellCenterX(this.col),
              grid.cellCenterY(this.row));
    }

    static loadImages() {
        Boy.idleImages = [
            loadImage('assets/boy/idle/frame-1.png'),
            loadImage('assets/boy/idle/frame-2.png')
        ]

        Boy.runningImages = [
            loadImage('assets/boy/running/frame-1.png'),
            loadImage('assets/boy/running/frame-2.png'),
            loadImage('assets/boy/running/frame-3.png'),
            loadImage('assets/boy/running/frame-4.png'),
            loadImage('assets/boy/running/frame-5.png'),
            loadImage('assets/boy/running/frame-6.png')
        ]
    }
}