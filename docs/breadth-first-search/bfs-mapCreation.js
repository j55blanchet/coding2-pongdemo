
class MapCreation {

    static processClick(graph, x, y) {
        
        const clickedVertex = graph.vertexAt(x, y);
        const selectedVertex = graph.getSelectedVertex();
        
        if (!clickedVertex) {
            MapCreation.addNewVertex(graph, x, y);
            return;
        }

        if(clickedVertex === selectedVertex) {
            console.log("Reclicking on the already selected vertex");
            graph.selectVertex(null);
            return;
        }

        if (selectedVertex === null) {
            console.log("Selecting new vertex (no preivous selection)")
            graph.selectVertex(clickedVertex);
            return;
        }

        if (!graph.isConnectionBetween(clickedVertex, selectedVertex)) {
            graph.addConnectionBetween(clickedVertex, selectedVertex);
            console.log("Adding connection between two existing vertices");
        }
        graph.selectVertex(clickedVertex);
    }

    static addNewVertex(graph, x, y) {
        let v = new Vertex(graph, x, y);
        graph.addVertex(v);

        const selectedVertex = graph.getSelectedVertex();
        if (selectedVertex) {
            graph.addConnectionBetween(v, selectedVertex);
        }
        graph.selectVertex(v);
    }
}