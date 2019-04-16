/// <reference path="global.d.ts" />

const MAP_CREATION_MODE = "MapCreation"
const PATHFIND_MODE = "PathFinding"
var mapMode = MAP_CREATION_MODE;

let canvas;
let graph;
let winchMapImg

function preload() {
    canvas = createCanvas(800, 600);
    graph = new Graph();
    
    background(210);
    fill(30);
    text("Loading...", 50, 20);
    winchMapImg = loadImage("WinchMap.png");
}

function setup() {
    canvas.parent(document.querySelector('#canvasHolder'));
    resizeCanvas(winchMapImg.width, winchMapImg.height);
    background(255);    
    frameRate(10);

    setupControls();
}

function draw() {
    background(213, 245, 222);
    image(winchMapImg, 0, 0);
    graph.draw();
}

function mouseClicked() {

    // Don't add vertices outside the map!
    if (mouseX < 0 || mouseX > width ||
        mouseY < 0 || mouseY > height) {
        return;
    }

    if (mapMode === MAP_CREATION_MODE) {
        MapCreation.processClick(graph, mouseX, mouseY);
    }
}
