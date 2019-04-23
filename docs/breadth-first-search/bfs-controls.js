let mapModeLabel;

function setupControls() {
    
    let column2Container = document.querySelector('#controls2');
    let loadMapDataBtn = createFileInput(loadVertexData);
    loadMapDataBtn.parent(column2Container);

    let column1 = document.querySelector('#controls1');
    mapModeLabel = createP(mapMode);
    mapModeLabel.parent(column1);
}

function mapModeChanged(setting) {
    console.log('Map Mode Changed', setting);
    if (mapMode == MAP_CREATION_MODE) {
        mapMode = PATHFIND_MODE;
    } else {
        mapMode = MAP_CREATION_MODE;
    }
    mapModeLabel.html(mapMode);
}

function saveVertexData() {
    saveJSON(graph, "mapData.json", false);
}

function loadVertexData(f) {
    if (f.type !== "application" || 
        f.subtype !== "json") {
        console.error("Invalid File Type!");
        return;
    }

    loadJSON(f.data, (res) => {
        
        if (typeof(res) !== "object") {
            console.error("Invalid file format");
            return;
        }
        let vList = [];
        for(const vJson of res.vertices) {
            const v = new Vertex();
            Object.assign(v, vJson);
            vList.push(v);
        }
        const connections = res.connections;
        const g = new Graph()
        g.connections = res.connections;
        g.vertices = vList;
        
        loadGraph(g);
    })
}