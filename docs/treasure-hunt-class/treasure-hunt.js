

var boy;
var grid;

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
}

function keyTyped() {
    if (key === 'w') {
        for(let element of gameElements) {
            if (element.col === boy.col &&
                element.row === boy.row - 1){
                
                // The player is going to run into this element
                return;
            }
        }
        boy.moveUp()
    }
    if (key === 's') {
        boy.moveDown()
    }
    if (key === 'a') {
        boy.moveLeft()
    }
    if (key === 'd') {
        boy.moveRight();
    }
}
