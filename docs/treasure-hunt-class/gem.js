
const GEMTYPE = Object.freeze({
    1: Symbol("1"),
    2: Symbol("2"),
    3: Symbol("3"),
    4: Symbol("4"),
    5: Symbol("5")
});

let collectionSound;

class Gem {
    constructor(grid, col, row) {
        this.grid = grid;
        this.col = col;
        this.row = row;
        this.ang = Math.random() * 360;

        let gemId = Math.floor(Math.random() * 4) + 1;
        this.gemType = GEMTYPE[gemId];
        this.img =loadImage(`assets/gem/gem${gemId}.png`);

        if (!collectionSound) {
            collectionSound = loadSound('assets/gem/gemCollection.wav');
        }
    }

    draw() {
        this.grid.drawImageOnGrid(this.img, this.col, this.row, this.ang)
        this.ang += 30 * 1 / 60;
        this.ang %= 360;
    }

    playCollectionSound() {
        if (collectionSound) {
            collectionSound.play();
        }
    }
}