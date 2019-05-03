/// <reference path="global.d.ts" />

const MAP_CREATION_MODE = "MapCreation"
const PATHFIND_MODE = "PathFinding"
var mapMode = MAP_CREATION_MODE;

let canvas;
let graph;
let winchMapImg

let mapCreator;
let mapSearcher;

function switchToGraph(g) {
    graph = g;
    mapCreator = new MapCreator(g);
    mapSearcher = new MapSearcher(g);
}

function resetBFS() {
    mapSearcher.reset();
}

function preload() {
    
    canvas = createCanvas(800, 600);
    background(210);
    fill(30);
    text("Loading...", 50, 20);
    winchMapImg = loadImage("WinchMap.png");

    let g = new Graph();
    g.loadJson(MAP_DEFAULT_JSON);
    switchToGraph(g);
}

function setup() {
    canvas.parent(document.querySelector('#canvasHolder'));
    resizeCanvas(winchMapImg.width, winchMapImg.height);
    background(255);    
    frameRate(10);

    setupControls();
}

function draw() {

    image(winchMapImg, 0, 0);
    graph.draw();
    
    if (mapMode === MAP_CREATION_MODE) {
        mapCreator.draw();
    } else if (mapMode === PATHFIND_MODE) {
        mapSearcher.processHover(mouseX, mouseY);
        mapSearcher.draw();
    }
}

function mouseClicked() {

    // Don't add vertices outside the map!
    if (mouseX < 0 || mouseX > width ||
        mouseY < 0 || mouseY > height) {
        return;
    }

    if (mapMode === MAP_CREATION_MODE) {
        mapCreator.processClick(graph, mouseX, mouseY);
    } else if (mapMode === PATHFIND_MODE) {
        mapSearcher.processClick(graph, mouseX, mouseY);
    } else {
        throw `Map Mode '${mapMode}' not recognized`
    }
}


function drawArrow(sx, sy, dx, dy) {
    stroke(255, 0, 0);
    strokeWeight(2);
    fill(255, 0, 0);
    libDrawArrow(sx, sy, dx, dy, 6);
}