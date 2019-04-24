class MapSearcher {

    constructor(graph) {
        this.graph = graph;
        this.bfs = null;
        this.destVertex = null;
        this.srcVertex = null;
    }

    reset() {
        this.bfs = null;
        this.destVertex = null;
    }

    processClick(graph, x, y) {
        
        const clickedVertex = graph.vertexAt(x, y);
        if (!clickedVertex) {
            return;
        }

        this.destVertex = clickedVertex;
        this.bfs = new BreadthFirstSearcher(graph, this.destVertex);
        while(!this.bfs.isComplete()) {
            this.bfs.continueSearch();
        }
        return;
    }

    processHover(x, y) {
        if (!this.bfs) {
            return;
        }
        
        this.srcVertex = this.graph.vertexAt(x, y);
    }

    draw() {
        let path;
        if (this.bfs && this.srcVertex) {
            path = this.bfs.getPathFrom(this.srcVertex);
            for(let v of path) {
                v.draw(color(255, 255, 150));
            }
        }

        if (this.srcVertex !== null) {
            this.srcVertex.draw(color(30, 150, 30));
        }
        if (this.destVertex !== null) {
            this.destVertex.draw(color(150, 30, 30));
        }   

        if (this.bfs && this.srcVertex) {

            for(let i = 0; i < path.length; i++) {
                const srcV = path[i];
                const destV = path[i+1];
                if (srcV && destV){
                    drawArrow(srcV.x, srcV.y, destV.x, destV.y);
                }
            }

        } else if (this.bfs) {
            this.bfs.draw();
        }
    }
}