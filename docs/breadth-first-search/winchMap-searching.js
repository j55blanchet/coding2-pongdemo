class MapSearcher {

    constructor(graph) {
        this.graph = graph;
        this.bfs = null;
        this.destVertex = null;

    }

    processClick(graph, x, y) {
        
        const clickedVertex = graph.vertexAt(x, y);
        if (!clickedVertex) {
            if (this.bfs) {
                console.log("clicked on empty space, continuing BFS search");
                this.bfs.continueSearch();
            }
            return;
        }

        if (!this.destVertex) {
            this.destVertex = clickedVertex;
            this.bfs = new BreadthFirstSearch(graph, this.destVertex);
            return;
        }
    }

    draw() {
        if (this.bfs) {
            this.bfs.draw();
        }
        if (this.destVertex !== null) {
            this.destVertex.draw(color(150, 30, 30));
        }
    }
}