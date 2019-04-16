class Graph {
    constructor() {
        this.vertices = [];
        this.selectedVIndex = null;
    }

    addVertex(v) {
        this.vertices.push(v);
    }

    vertexAt(x, y) {
        for(let i = 0; i < this.vertices.length; i++) {
            const v = this.vertices[i];
            if (v.containsPoint(x, y)) {
                return v;
            }
        }
        return null;
    }

    getSelectedVertex() {
        return this.vertices[this.selectedVIndex] || null;
    }

    selectVertex(v) {
        if (!v) {
            this.selectedVIndex = null;
        } else {
            this.selectedVIndex = this.vertices.indexOf(v);
        }
    }

    isConnectionBetween(v, ov) {

    }
    addConnectionBetween(v, ov) {
        const vi = this.vertices.indexOf(v);
        const ovi = this.vertices.indexOf(ov);
        if ((vi === 0 || vi) && (ovi === 0 || ovi)) {
            v.addConnectionTo(ovi);
            ov.addConnectionTo(vi);
        }
    }

    draw() {
        for(let i = 0; i < this.vertices.length; i++) {   
            const v = this.vertices[i];
            v.drawConnections(this.vertices);
        }
        for(let i = 0; i < this.vertices.length; i++) {
    
            const isSelected = this.selectedVIndex === i;
            const v = this.vertices[i];
            v.drawSelf(isSelected);
        }
    }

}