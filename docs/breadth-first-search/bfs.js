/// <reference path="global.d.ts" />

let canvas;
let winchMap
let allVertices = [];
let selectedVIndex = null;

function preload() {
    canvas = createCanvas(800, 600);
    background(210);
    fill(30);
    text("Loading...", 50, 20);
    winchMap = loadImage("WinchMap.png");
}

function setup() {
    resizeCanvas(winchMap.width, winchMap.height);
    background(255);    

    frameRate(10);

    let printVertexDataBtn = createButton("Print Vertex Map");
    printVertexDataBtn.mousePressed(printVertexData);



    // let a = new Vertex(300, 200);
    // let b = new Vertex(200, 100);

    // selectedV = b;

    // allVertices.push(a);
    // allVertices.push(b);

    // a.addConnectionTo(b);
}

function draw() {
    background(213, 245, 222);
    image(winchMap, 0, 0);
    for(let i = 0; i < allVertices.length; i++) {   
        allVertices[i].drawConnections(allVertices);
    }
    for(let i = 0; i < allVertices.length; i++) {   
        allVertices[i].drawSelf(selectedVIndex === i);
    }
}

function mouseClicked() {

    for(let i = 0; i < allVertices.length; i++) {
        let v = allVertices[i];
        
        if (v.containsPoint(mouseX, mouseY)) {
            
            if(i === selectedVIndex) {
                console.log("Reclicking on the already selected vertex");
                selectedVIndex = null;
                return;
            }

            if (selectedVIndex === null) {
                console.log("Selecting new vertex (no preivous selection)")
                selectedVIndex = i;
                return;
            }

            const selectedV = allVertices[selectedVIndex];
            if (!selectedV.isConnectedTo(i)) {
                selectedV.addConnectionTo(i);
                allVertices[i].addConnectionTo(selectedVIndex);
            }
            selectedVIndex = i;
            console.log("Adding connection between two existing vertices");
            return;
        }
    }

    let v = new Vertex(mouseX, mouseY);
    allVertices.push(v);
    let i = allVertices.length - 1;

    if (selectedVIndex !== null) {
        allVertices[selectedVIndex].addConnectionTo(i)
        v.addConnectionTo(selectedVIndex);
    }
    selectedVIndex = i;
}

function printVertexData() {
    let jsonData = JSON.stringify(allVertices)
    createP(jsonData);
    console.log(jsonData);
}