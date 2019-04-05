
/// <reference path="global.d.ts" />

const VERTEX_DIAMETER = 30;

class Vertex {

    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.connectedVertexes = [];
        this.radius = VERTEX_DIAMETER / 2;
    }

    containsPoint(x, y) {
        return dist(this.x, this.y, x, y) < this.radius;
    }

    addConnectionTo(otherVertex) {
        this.connectedVertexes.push(otherVertex);
        otherVertex.connectedVertexes.push(this);
    }

    isConnectedTo(otherVertex) {
        if (otherVertex === this) {
            return true;
        }
        return this.connectedVertexes.includes(otherVertex);
    }

    draw(isSelected) {
        if (isSelected) {
            fill(30, 150, 150);
        } else {
            fill(30);
        }
        
        noStroke();
        ellipse(this.x, this.y, this.radius * 2, this.radius * 2);

        stroke(30, 50);
        for (let otherVertex of this.connectedVertexes) {
            line(this.x, this.y, otherVertex.x, otherVertex.y);
        }
    }
}