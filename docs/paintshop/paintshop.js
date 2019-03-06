





let redColor
let orangeColor;
let blueColor;
let purpleColor;
let greenColor;
let whiteColor;

function preload() {
    redColor = color(238, 0, 0);
    orangeColor = color(238, 108, 0);
    blueColor = color(0, 143, 143);
    purpleColor = color(115, 0, 172);
    greenColor = color(0, 190, 0);
    whiteColor = color(255);
}

let canvasObject;
function setup() {
    canvasObject = createCanvas(windowWidth, windowHeight);
    background(255);
}

function draw() {
}

function mouseDragged() {
    line(pmouseX, pmouseY, mouseX, mouseY);
}


function setBrush(color) {
    if (color == 'red'){
        stroke(redColor);
    }
    else if (color == 'orange') {
        stroke(orangeColor);
    } 
    else if (color == 'blue') {
        stroke(blueColor);
    }
    else if (color == 'purple') {
        stroke(purpleColor);
    }
    else if (color == 'green') {
        stroke(greenColor);
    }
    else if (color == 'white') {
        stroke(whiteColor);
    }
    else {
        throw "Invalid color specified: " + color;
    }
}

function setCustomColor(colorString) {
    let c  = color(colorString);
    stroke(c);
}

function save() {
    saveCanvas(canvasObject, 'myImage', 'png');
}

// // disabled for now because we don't
// // want to erase the painting (need to
// // figure out how to work around this)
// function windowResized() {
//     resizeCanvas(windowWidth, windowHeight);
//     background(i, 100, i);
// }