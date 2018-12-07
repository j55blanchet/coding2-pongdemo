

const gameFrameRate = 60;
const monsterMovesPerSecond = 2;
const monsterKeyFrames = Math.round(gameFrameRate / monsterMovesPerSecond);

var boy;
var grid;

var gemCount = 0;
var gemsRemaining = 0;
// Store everything besides the player
var gameElements = [];
var levelMakers;
var lvlIndex = 1;

var bullets = [];

// Gets called before game is loaded.
// Use it to load images & other resources
var preload = function() {

    grid = new Grid(10, 10);
    boy = new Boy(grid, 0, 0);
 
    levelMakers = levelConstructors;
    loadLevel(levelMakers[lvlIndex])

}

// Before the draw function ever gets called, setup gets called
//   After resources are loaded, sets up the game
var setup = function() {
    createCanvas(windowWidth, windowHeight);
    windowResized();
    frameRate(gameFrameRate);
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

    if (frameCount % monsterKeyFrames === 0) {
        for(element of gameElements) {
            if (element instanceof Monster) {
                element.moveTowards(boy.col, boy.row);
            }
        }
    }

    bullets.forEach((bul) => {
        bul.move();
        bul.draw();
    })

    for (var i = bullets.length - 1; i >= 0; i--){
        let bullet = bullets[i];
        if (grid.pointIsWithinCell(bullet.x, bullet.y, boy.col, boy.row)) {

            // Bullet hit player
            loadLevel(levelMakers[lvlIndex]);
            return;
        }
    }

    if (isPlayerCollidingWithMonster()) {
        // reload level
        loadLevel(levelMakers[lvlIndex]);
    }

    gameElements
    .filter((elem) => elem instanceof Monster)
    .forEach((monst) => {
        if (Math.random() < 0.01) {
            bullets.push(monst.makeBulletTowards(boy.col, boy.row));
        }
    });
    
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

function isPlayerCollidingWithMonster() {
    for(element of gameElements) {
        if (element instanceof Monster) {
            if (element.col === boy.col &&
                element.row === boy.row) {
                
                    return true
            }
        }
    }
    return false
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
                gemsRemaining --;
                if (gemsRemaining === 0 && lvlIndex < levelMakers.length -1) {
                    lvlIndex += 1;
                    loadLevel(levelMakers[lvlIndex])
                    console.log(`Finished Level ${lvlIndex}. Moving to Level ${lvlIndex + 1}`)

                }
                
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

function loadLevel(levelMaker) {
    let level = levelMaker();
    bullets = [];
    gameElements = level.gameElements();
    for(let elem of this.gameElements) {
        elem.grid = grid;
    }
    boy.col = level.playerCol;
    boy.row = level.playerRow;
    gameElements.push(this.boy);
    gemsRemaining = level.gems.length;
}


function windowResized() {
    let size = min(windowWidth, windowHeight);
    resizeCanvas(size, size);
  }