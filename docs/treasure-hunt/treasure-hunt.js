
var grid,
    boy;

var preload = function() {
    Boy.loadImages();
}

var setup = function() {

    var canvas = createCanvas(800, 800);
    canvas.parent('sketch-holder');

    grid = new Grid(15, 15);
    boy = new Boy(grid, 0, 0);
};

var draw = function() {
    background(240);
    grid.draw();
    boy.draw();
};

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

function keyPressed() {
    console.log(key + " key Pressed");
}

// var dragonImage;

// function preload() {
//     dragonImage = loadImage('assets/frame-1.png');
// }

// function setup (){
//     var canvas = createCanvas(400, 400);
//     canvas.parent('sketch-holder');
// }

// function draw() {
//     image(dragonImage, 100, 100, 200, 100);
//     ellipse(200, 200, 160, 160);
// }
