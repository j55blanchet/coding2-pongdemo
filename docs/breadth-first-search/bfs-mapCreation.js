
class MapCreator {
    
    constructor(graph) {
        this.graph = graph;
        this.selectedVId = null;
    }

    processClick(graph, x, y) {
        
        const clickedVertex = graph.vertexAt(x, y);
        const selectedVertex = graph.getVertex(this.selectedVId);
        
        if (!clickedVertex) {
            this.addNewVertex(graph, x, y);
            return;
        }

        if(clickedVertex === selectedVertex) {
            console.log("Reclicking on the already selected vertex");
            this.selectedVId = null;
            return;
        }

        if (!selectedVertex) {
            console.log("Selecting new vertex (no preivous selection)")
            this.selectedVId = clickedVertex.id;
            return;
        }

        if (!graph.hasConnectionBetween(clickedVertex, selectedVertex)) {
            graph.addConnectionBetween(clickedVertex, selectedVertex);
            console.log("Adding connection between two existing vertices");
        }
        this.selectedVId = clickedVertex.id;
    }

    addNewVertex(graph, x, y) {
         let v = graph.addVertex(x, y);

        const selectedVertex = graph.getVertex(this.selectedVId);
        if (selectedVertex) {
            graph.addConnectionBetween(v, selectedVertex);
        }
        this.selectedVId = v.id;
    }

    draw(){
        if (this.selectedVId !== null) {
            const v = this.graph.getVertex(this.selectedVId);
            v.draw(color(30, 150, 150));
        }
    }
}