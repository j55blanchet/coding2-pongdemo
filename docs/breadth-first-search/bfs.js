/// <reference path="global.d.ts" />

let canvas;
let allVertices = [];
let selectedV = null;

function setup() {
    canvas = createCanvas(800, 600);
    background(255);    

    frameRate(10);

    let a = new Vertex(300, 200);
    let b = new Vertex(200, 100);

    selectedV = b;

    allVertices.push(a);
    allVertices.push(b);

    a.addConnectionTo(b);
}

function draw() {
    background(213, 245, 222);
    for(let v of allVertices) {
        v.draw(selectedV === v);
    }
}

function mouseClicked() {

    for(let v of allVertices) {
        
        if (v.containsPoint(mouseX, mouseY)) {
            
            if(v === selectedV) {
                console.log()
                selecttedV = null;
                return;
            }

            if (!selectedV) {
                v = selectedV;
                return;
            }

            if (!selectedV.isConnectedTo(v)) {
                selectedV.addConnectionTo(v);
            }
            selectedV = v;
            return;
        }
    }

    let v = new Vertex(mouseX, mouseY);
    allVertices.push(v);
    v.addConnectionTo(selectedV);
    selectedV = v;
    
}