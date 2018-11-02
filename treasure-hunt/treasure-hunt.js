
var grid,
    boy;

var preload = function() {
    Boy.loadImages();
}

var setup = function() {

    var canvas = createCanvas(400, 400);
    canvas.parent('sketch-holder');

    grid = new Grid(20, 20);
    boy = new Boy(grid, 0, 0);
};

var draw = function() {
    grid.draw();
    boy.draw();
};

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