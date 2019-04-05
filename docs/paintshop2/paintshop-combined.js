/// <reference path="index.d.ts" />
/// <reference path="global.d.ts" />
var brushSize = 10;
var eBrushSlider;
var eBrushBoxPreview;
var committedDrawing;
var mCanvas;
function setup() {
    mCanvas = createCanvas(600, 600);
    committedDrawing = createGraphics(600, 600);
    committedDrawing.background(225);
    createDiv();
    eBrushSlider = createSlider(4, 100, brushSize, 0);
    eBrushSlider.input(brushChanged);
    eBrushBoxPreview = createDiv();
    brushChanged();
}
function draw() {
    image(committedDrawing, 0, 0);
    // brush preview    
    noStroke();
    fill(30);
    ellipse(mouseX, mouseY, brushSize, brushSize);
}
function mnousePressed() {
    committedDrawing.fill(30);
    committedDrawing.noStroke();
    committedDrawing.ellipse(mouseX, mouseY, brushSize, brushSize);
}
function mouseDragged() {
    committedDrawing.stroke(30);
    committedDrawing.strokeWeight(brushSize);
    committedDrawing.line(pmouseX, pmouseY, mouseX, mouseY);
}
function brushChanged() {
    brushSize = eBrushSlider.value();
    eBrushBoxPreview.style('background-color', 'rgb(30,30,30)');
    eBrushBoxPreview.style('border-radius', brushSize + "px");
    eBrushBoxPreview.size(brushSize, brushSize);
}
//# sourceMappingURL=paintshop-combined.js.map