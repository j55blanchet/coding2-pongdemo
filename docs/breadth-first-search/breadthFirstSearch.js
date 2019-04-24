
let libDrawArrow = function(x1, y1, x2, y2, offset) {
    line(x1, y1, x2, y2);

    // this code is to make the arrow point
    push() //start new drawing state
    var angle = atan2(y1 - y2, x1 - x2); //gets the angle of the line
    translate(x2, y2); //translates to the destination vertex
    rotate(angle-HALF_PI); //rotates the arrow point
    triangle(-offset*0.5, offset, offset*0.5, offset, 0, -offset/2); //draws the arrow point as a triangle
    pop();
}

class BreadthFirstSearch {
    constructor(g, origin) {
        this.graph = graph;
        this.backPaths = {};
        this.exploreQueue = [];
        this.startVertex = origin;

        this.exploreQueue.push(origin);
        // this.backPaths[this.startVertex.id] = this.startVertex.id; 
        // for (let neighborV of this.graph.adjacentVerticesOf(this.startVertex)) {

        //     this.exploreQueue.enqueue(neighborV);
        // }
    }

    continueSearch() {
        if (this.isComplete()) { return; }
        
        let v = this.exploreQueue.splice(0, 1)[0]
        if (!v) { 
            throw "Unexpectedly empty exploreQueue"
        }

        for(let neighborV of this.graph.adjacentVerticesOf(v)) {
            if (this.hasDiscovered(neighborV)) {
                continue;
            }

            this.backPaths[neighborV.id] = v.id;
            this.exploreQueue.push(neighborV);
        }
    }

    hasDiscovered(v) {
        return v.id === this.startVertex.id || 
                this.backPaths[v.id] !== undefined ||
                this.exploreQueue.indexOf(v.id) !== -1;
    }

    isComplete() {
        return this.exploreQueue.length === 0;
    }

    getPathFrom(dest) {
        if (!this.isComplete()) {
            throw "Can't compute path when not complete yet";
        }
        let path = [];
        let v = dest;

        while(v) {
            path.push(v);
            v = this.graph.getVertex(this.backPaths[v.id])
        }
        
        return path;
    }

    draw() {

        for(const srcId of Object.keys(this.backPaths)) {
            const destId = this.backPaths[srcId];
            if (+srcId === +destId) { continue; }
            const srcV = this.graph.getVertex(srcId);
            const destV = this.graph.getVertex(destId);

            if (!srcV || !destV) {
                throw `Unexpected null vertex: src: ${srcV}, dest: ${destV}`;
            }
            drawArrow(srcV.x, srcV.y, destV.x, destV.y);
        }

        for(let i = 1; i < this.exploreQueue.length; i++) {
            const v = this.exploreQueue[i];
            v.draw(color(150, 150, 250));
        }

        let nextUp = this.exploreQueue[0];
        if (nextUp) {
            nextUp.draw(color(150, 150, 30));
        }
    }
}

