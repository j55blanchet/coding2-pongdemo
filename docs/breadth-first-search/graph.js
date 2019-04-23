class Graph {
    constructor() {
        
        this.vertices = [];
        this.connections = {};
    }
    getVertex(id) {
        return this.vertices[id];
    }

    addVertex(x, y) {
        let v = new Vertex(x, y, this.vertices.length);
        this.vertices.push(v);
        return v;
    }

    vertexAt(x, y) {
        for(let i = 0; i < this.vertices.length; i++) {
            const v = this.vertices[i];
            if (v.containsPoint(x, y) == true) {
                return v;
            }
        }
        return null;
    }

    hasConnectionBetween(v, ov) {
        return this.connections[v.id] && this.connections[ov.id] &&
               this.connections[v.id].indexOf(ov.id) >= 0 &&
               this.connections[ov.id].indexOf(v.id) >= 0;
    }
    addConnectionBetween(v, ov) {
        if (this.hasConnectionBetween(v, ov)) {
            throw "Already a connection between two vertices";
        }
        if (v === ov || v.id === ov.id) {
            throw "Can't create connection between a vertex and itself";
        }

        if (!this.connections[v.id]) {
            this.connections[v.id] = [ov.id];
        } else {
            this.connections[v.id].push(ov.id);
        }
        if (!this.connections[ov.id]) {
            this.connections[ov.id] = [v.id];
        } else {
            this.connections[ov.id].push(v.id);
        }
    }

    adjacentVerticesOf(v) {
        return this.connections[v.id].map(vid => this.getVertex(vid));
    }

    draw() {

        for(const vid of Object.keys(this.connections)) {
            const v = this.vertices[vid];
            const cList = this.connections[vid] || [];
            for (const ovid of cList) {
                const ov = this.vertices[ovid];
                this.drawConnection(v, ov);
            }
        }

        for(let i = 0; i < this.vertices.length; i++) {
            const v = this.vertices[i];
            v.draw();
        }
    }

    drawConnection(v, ov) {   
        stroke(240);
        strokeWeight(4);
        line(v.x, v.y, ov.x, ov.y);

        stroke(40);
        strokeWeight(2);
        line(v.x, v.y, ov.x, ov.y);
    }
}