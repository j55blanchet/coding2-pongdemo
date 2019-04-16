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
    saveJSON(allVertices, "mapData.json", false);
}

function loadVertexData(f) {
    if (f.type !== "application" || 
        f.subtype !== "json") {
        console.error("Invalid File Type!");
        return;
    }

    loadJSON(f.data, (res) => {
        if (!Array.isArray(res)) {
            console.error("Invalid file format");
            return;
        }

        console.log(res);
        let vArray = [];
        for(let i = 0; i < res.length; i++) {
            const vRaw = res[i];
            const v = Object.assign(new Vertex(), vRaw);
            if (v.isValid()) {
                vArray.push(v);
            }
        }

        allVertices = vArray;
    })
}