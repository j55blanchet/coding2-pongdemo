





const redColor = color(238, 0, 0);


function preload() {
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(255);
}

function draw() {
}

function mouseDragged() {
    line(pmouseX, pmouseY, mouseX, mouseY);
}

// // disabled for now because we don't
// // want to erase the painting (need to
// // figure out how to work around this)
// function windowResized() {
//     resizeCanvas(windowWidth, windowHeight);
//     background(i, 100, i);
// }