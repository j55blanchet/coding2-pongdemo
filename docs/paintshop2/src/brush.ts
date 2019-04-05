
/// <reference path="../index.d.ts" />
/// <reference path="../global.d.ts" />

interface Brush {
    drawPoint(g: p5.Graphics, x: number, y: number): void; 
    drawLine(g: p5.Graphics, x: number, y: number): void;
}