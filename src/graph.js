class Graph {
    constructor(height, width) {
        this.h = height;
        this.w = width;

        this.canvas = document.createElement("canvas");
        this.canvas.width = width;
        this.canvas.height = height;
        this.canvas.classList.add("graphs");

        this.ctx = this.canvas.getContext("2d");
    }

    drawGrid(step = 50) {
        const { ctx, w, h } = this;
        ctx.save();
        ctx.lineWidth = 0.5;
        ctx.strokeStyle = "#e0e0e0";

        ctx.beginPath();
        for (let x = 0; x <= w; x += step) {
            ctx.moveTo(x, 0);
            ctx.lineTo(x, h);
        }
        for (let y = 0; y <= h; y += step) {
            ctx.moveTo(0, y);
            ctx.lineTo(w, y);
        }
        ctx.stroke();

        ctx.beginPath();
        ctx.strokeStyle = "#cccccc";
        ctx.lineWidth = 1.5;
        
        ctx.moveTo(0, h / 2);
        ctx.lineTo(w, h / 2);
        
        ctx.moveTo(w / 2, 0);
        ctx.lineTo(w / 2, h);
        
        ctx.stroke();
        ctx.restore();
        return this;
    }

    add(id) {
        const target = document.getElementById(id);
        if (target) {
            target.appendChild(this.canvas);
            this.drawGrid();
        }
        return this;
    }

    draw(func, color = "blue") {
        const {
            ctx,
            w,
            h
        } = this;

        let formatedFunc;

        if (typeof func === "string") {
            const clean = func.replace(/\^/g, "**");
            formatedFunc = new Function("x", `return ${clean};`);
        } else {
            formatedFunc = func;
        }

        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = 2;

        let begin = true;

        for (let p = 0; p <= w; p++) {
            const x = p - w / 2;
            let y;

            try {
                y = formatedFunc(x);
                if (y === null || isNaN(y) || !isFinite(y)) {
                    begin = true;
                    continue;
                }
                if (begin) {
                    ctx.moveTo(p, h / 2 - y);
                    begin = false;
                } else {
                    ctx.lineTo(p, h / 2 - y);
                }
            } catch (e) {
                begin = true;
                continue;
            }
        }

        ctx.stroke();
        ctx.restore();
        return this;
    }
}
