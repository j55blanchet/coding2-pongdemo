
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

    prepareDialogs();
}

let canvasObject;
function setup() {
    canvasObject = createCanvas(windowWidth, windowHeight);
    background(255);

    // const paintTray = document.getElementById('buttonRow');
    // const loadImgInput = createFileInput(loadFile);
    // loadImgInput.parent(paintTray);
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
    const c  = color(colorString);
    stroke(c);
}

function save() {
    saveCanvas(canvasObject, 'myImage', 'png');
}


function adjustBrush(rangeValue) {

    strokeWeight(rangeValue);
    window.event.stopPropagation();
}

function openDialog(id) {
    let dial = document.getElementById(id);
    dial.setAttribute('open', true);
}
function switchToDialog(id) {
    closeDialogs();
    openDialog(id);
}


function closeDialogs() {
    for(e of document.getElementsByTagName('dialog')) {
        console.log(e);
        e.removeAttribute('open');
    }
}

function prepareDialogs() {
    for(closeButtons of document.getElementsByClassName('diag-close')) {
        closeButtons.addEventListener('click', closeDialogs);
    }

    let newImgDialog = document.querySelector('#loadNewImageDialog .actions');
    let fInput = createFileInput(loadNewFromImage);
    fInput.parent(newImgDialog);
}

function loadNewFromImage(file) {
    if (file.type !== 'image') {
        throw 'Invalid image selected!';
    }

    loadImage(file.data, img => {
        if (!img) {
            throw "Couldn't load image!";
        }

        noCanvas();
        createCanvas(img.width, img.height);
        image(img, 0, 0);
        closeDialogs();
    })
}

function createNewImage(submitEvent) {
    console.log('createNewImage', submitEvent);
    submitEvent.preventDefault();


    let form = submitEvent.target;
    
    let w = +form.elements['width'].value;
    let h = +form.elements['height'].value;

    closeDialogs();
    noCanvas();

    console.log("Creating new canvas with width and height:", +w, +h);
    createCanvas(w, h);
    background(255);
   
    return false; // prevent other submission actions
}

// // disabled for now because we don't
// // want to erase the painting (need to
// // figure out how to work around this)
// function windowResized() {
//     resizeCanvas(windowWidth, windowHeight);
//     background(i, 100, i);
// }