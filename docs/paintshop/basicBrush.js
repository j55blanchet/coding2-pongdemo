
/// <reference path="global.d.ts" />


class BasicBrush {

    constructor(pColor, pBrushWidth) {
        this.color = pColor;
        this.brushWidth = pBrushWidth;
        this.points = []
    }

    startPainting(x, y) {
        this.points.push([x, y]);
    }

    continuePainting(x, y) {
        this.points.push([x, y]);
    }

    stopPainting(x, y) {
        this.points = [];
    }

    apply() {
        if (this.points.length === 1) {
            fill(this.color);
            noStroke();
            let p = this.points[0];
            ellipse(p.x, p.y, this.brushWidth, this.brushWidth);
            return;
        }

        stroke(this.color);
        strokeWeight(this.brushWidth);
        noFill();
        beginShape();
        for(let i = 0; i < this.points.length; i++) {
            let p = this.points[i];
            vertex(p.x, p.y);
        }
        endShape();
    }
}