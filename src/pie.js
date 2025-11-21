const graphs = {};
const nodes = {};

class GraphInstance {
    constructor(canvas, ctx) {
        this.canvas = canvas;
        this.ctx = ctx;
    }
}

class NodeInstance {
    constructor(nodeName, y , x) {
        this.nodeName = nodeName;
        this.y = y;
        this.x = x;
    }
}

function newGraph(name, height, width) {
    const canvas = document.createElement("canvas");
    const id = `graph-${name.toLowerCase().replace(/\s+/g, '-')}`;

    canvas.id = id; 
    canvas.height = height;
    canvas.width = width;
    canvas.classList.add("graph-canvas");

    const ctx = canvas.getContext('2d');
    const gInst = new GraphInstance(canvas, ctx);

    graphs[name] = gInst;

    return gInst;
}

function addGraph(name, targetElemID) {
    const gInst = graphs[name];
    const targetElem = document.getElementById(targetElemID);
    const canvas = gInst.canvas;

    if (!gInst) {
        console.error("[Pie] Error: Graph with name " + name + " not found!");
        return null;
    }

    if (!canvas || !(canvas instanceof Node)) {
        console.error("[Pie] Internal Error: Retrieved graph instance does not contain a valid Canvas Node!");
        return null;
    }

    if (!targetElem) {
        console.error("[Pie] Error: Element with ID " + targetElemID + " not found!");
        return null;
    }

    if (targetElem.contains(canvas)) {
        console.warn("[Pie] Warning: Graph with name " + name + " already exists in container " + targetElemID);
        return canvas;
    }

    targetElem.appendChild(canvas);
    
    return canvas;
}

function newNode(nodeName, y, x) {
    const nInst = new NodeInstance(nodeName, y, x);
    nodes[nodeName] = nInst;
    return nInst;
}

function drawNode(nodeName, name) {
    const gInst = graphs[name];
    const nInst = nodes[nodeName];
    const ctx = gInst.ctx;

    if (!nInst) {
        console.error("[Pie] Error: Node with name " + nodeName + " not found!");
    }

    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(nInst.y, nInst.x);
    ctx.stroke();
}
