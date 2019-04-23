
/// <reference path="global.d.ts" />

const VERTEX_DIAMETER = 20;

class Vertex {

    constructor(x, y, id) {
        this.x = x;
        this.y = y;
        this.id = id;
        this.radius = VERTEX_DIAMETER / 2;
    }

    containsPoint(x, y) {
        let computedDistance = dist(this.x, this.y, x, y);
        let doesContainPoint = computedDistance < this.radius;
        return doesContainPoint;
    }

    draw(customC) {
        
        if (customC) {
            fill(customC);
        } else {
            fill(240);
        }
        
        noStroke();
        ellipse(this.x, this.y, this.radius * 2, this.radius * 2);

        fill(30);
        ellipse(this.x, this.y, this.radius, this.radius);
    }

    isValid() {
        return true;
    }
}