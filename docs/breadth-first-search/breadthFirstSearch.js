
let drawArrow = function(x1, y1, x2, y2, offset) {
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
        this.exploreQueue = new Queue();
        this.startVertex = origin;

        this.exploreQueue.enqueue(origin);
        // this.backPaths[this.startVertex.id] = this.startVertex.id; 
        // for (let neighborV of this.graph.adjacentVerticesOf(this.startVertex)) {

        //     this.exploreQueue.enqueue(neighborV);
        // }
    }

    continueSearch() {
        if (this.isComplete()) { return; }
        let v = this.exploreQueue.dequeue();
        if (!v) { 
            throw "Unexpectedly empty exploreQueue"
        }

        for(let neighborV of this.graph.adjacentVerticesOf(v)) {
            if (!this.backPaths[neighborV.id]){
                this.backPaths[neighborV.id] = v.id;
                this.exploreQueue.enqueue(neighborV);
            }
        }
    }

    isComplete() {
        return this.exploreQueue.isEmpty();
    }

    getPathTo(dest) {
        if (!isComplete()) {
            throw "Can't compute path when not complete yet";
        }
        let path = [];
        let v = dest;

        while(v && this.backPaths[v.id] !== undefined) {
            path.splice(0, 0, v);
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
            stroke(255, 0, 0, 200);
            strokeWeight(4);
            noFill();
            drawArrow(srcV.x, srcV.y, destV.x, destV.y, 8);
        }

        let nextUp = this.exploreQueue.peek();
        if (nextUp) {
            nextUp.draw(color(150, 150, 30));
        }
    }
}

