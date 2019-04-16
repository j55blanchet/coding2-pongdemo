
/// <reference path="global.d.ts" />

const VERTEX_DIAMETER = 20;

class Vertex {

    constructor(graph, x, y) {
        this.graph = graph;
        this.x = x;
        this.y = y;
        this.connectedVertexes = [];
        this.radius = VERTEX_DIAMETER / 2;
    }

    containsPoint(x, y) {
        return dist(this.x, this.y, x, y) < this.radius;
    }

    addConnectionTo(otherVertexI) {
        if (typeof(otherVertexI) !== typeof(4)) {
            debugger;
            throw "undefined otherVertexI";
        }
        this.connectedVertexes.push(otherVertexI);
    }

    isConnectedTo(otherVertexI) {
        return this.connectedVertexes.includes(otherVertexI);
    }

    drawConnections(vertexList) {

        for (let otherVertexI of this.connectedVertexes) {
            let otherVertex = vertexList[otherVertexI]
            if (!otherVertex) {
                debugger;
                throw "Null other vertex i: " + otherVertexI;
            }
            stroke(240);
            strokeWeight(4);
            line(this.x, this.y, otherVertex.x, otherVertex.y);

            stroke(40);
            strokeWeight(2);
            line(this.x, this.y, otherVertex.x, otherVertex.y);
        }
    }

    drawSelf(isSelected) {
        if (isSelected) {
            fill(30, 150, 150);
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