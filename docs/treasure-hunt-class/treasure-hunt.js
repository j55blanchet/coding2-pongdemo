

var boy;
var grid;

var gemCount = 0;

// Store everything besides the player
var gameElements = [];

// Gets called before game is loaded.
// Use it to load images & other resources
var preload = function() {

    grid = new Grid(10, 10);
    boy = new Boy(grid, 0, 0);

    // Make 5 gems and put them into the game
    for(let i = 0; i < 5; i++) {
        let gem = new Gem(grid, chooseRandomInteger(10), 
                                chooseRandomInteger(10))
        gameElements.push(gem);
    }
}

// Before the draw function ever gets called, setup gets called
//   After resources are loaded, sets up the game
var setup = function() {

    var canvas = createCanvas(400, 400);
    canvas.parent('sketch-holder');
}

//  Gets called over and over again as the
// game draws new frames
var draw = function() {

    background(255);

    // Draw the grid first, then the boy on top of it
    grid.drawGrid();

    for (var i = 0; i < gameElements.length; i++) {
        var element = gameElements[i];
        element.draw();
    }

    // Always draw 
    boy.draw();
    
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
        
        let nextSpot = boy.nextPosition(direction);
        console.log("moving to:", nextSpot);

        for(var i = gameElements.length - 1; i >= 0; i--) {

            var element = gameElements[i];
            if(element.col === nextSpot.col &&
               element.row === nextSpot.row) {

                // We're going to hit this object
                if (element instanceof Gem) {
                    // Remove the gem
                    gameElements.splice(i, 1);
                    gemCount ++;
                }
            }
        }

        boy.move(direction);
    }
}
