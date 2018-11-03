
var boy;
var grid;

// Gets called before game is loaded. 
// Use it to load images & other resources
var preload = function() {

    grid = new Grid(10, 10);
    boy = new Boy(grid, 0, 0);
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

    // Draw the boy centered at 200, 200, with 100px width and 100px height
    grid.drawGrid();
    boy.draw();
}

function keyTyped() {
    if (key === 'w') {
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