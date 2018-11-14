

var boy;
var grid;

var gemCount = 0;

// Store everything besides the player
var gameElements = [];
var levels;

// Gets called before game is loaded.
// Use it to load images & other resources
var preload = function() {

    grid = new Grid(10, 10);
    boy = new Boy(grid, 0, 0);
 
    levels = makeLevels();
    loadLevel(levels[0])

}

// Before the draw function ever gets called, setup gets called
//   After resources are loaded, sets up the game
var setup = function() {
    createCanvas(windowWidth, windowHeight);
    windowResized();
    frameRate(60);
}

//  Gets called over and over again as the
// game draws new frames
var draw = function() {

    background(60, 140, 74);

    // Draw the grid first, then the boy on top of it
    grid.drawGrid();

    for (var i = 0; i < gameElements.length; i++) {
        var element = gameElements[i];
        element.draw();
    }
    
    fill(10);
    text("Gems: " + gemCount, 10, 10);
}

function keyTyped() {

    var direction;
    if (key === 'w') {
        direction = DIRECTION.UP;
    }
    if (key === 's') {
        direction = DIRECTION.DOWN;
    }
    if (key === 'a') {
        direction = DIRECTION.LEFT;
    }
    if (key === 'd') {
        direction = DIRECTION.RIGHT;
    }

    if (direction) {
        attemptMoveCharacter(direction);
    }
}

function attemptMoveCharacter(direction) {
    if (!direction) {
        return;
    }

    let nextSpot = boy.nextPosition(direction);
    let preventMove = false;

    for(var i = gameElements.length - 1; i >= 0; i--) {

        var element = gameElements[i];
        if(element.col === nextSpot.col &&
            element.row === nextSpot.row) {

            // We're going to hit this object
            if (element instanceof Gem) {
                // Remove the gem
                element.playCollectionSound();
                gameElements.splice(i, 1);
                gemCount ++;
            }

            if (element instanceof Barrier) {
                // Stop player from moving
                preventMove = true;
            }
        }
    }

    if (!preventMove) {
        boy.move(direction);
    }
}

function loadLevel(level) {
    this.gameElements = level.gameElements();
    for(let elem of this.gameElements) {
        elem.grid = grid;
    }
    this.boy.col = level.playerCol;
    this.boy.row = level.playerRow;
    this.gameElements.push(this.boy);
}


function windowResized() {
    let size = min(windowWidth, windowHeight);
    resizeCanvas(size, size);
  }