names = {
    p: "歩",
    P: "歩",
    l: "香",
    L: "香",
    n: "桂",
    N: "桂",
    s: "銀",
    S: "銀",
    g: "金",
    G: "金",
    b: "角",
    B: "角",
    r: "飛",
    R: "飛",
    k: "玉",
    K: "王"
}

function Piece(type, x, y) {
    this.name = names[type];
    this._html = document.createElement("div");
    this._html.innerHTML = this.name;
    this._sub = document.createElement("sub");
    this.transform = (type.search(/^[plnsgbrk]$/) >= 0) ? 'rotate(180deg)' : '';

    this.isBlack = function() {
        return (type == type.toUpperCase());
    }

    this.toHTML = function() {
        return this._html;
    }

    this.isHand = function() {
        return (this.x === undefined);
    }

    if (y === undefined) {
        if (this.isBlack()) {
            this._html.classList.add("align-right");
        }
        this._html.classList.add("captive");
        this._sub.innerHTML = 2;
        this._html.appendChild(this._sub);
    } else {
        var position = `cell${x}${y}`;
        this._html.position = position;
        this._html.classList.add("piece");
        this._html.classList.add(position);
        this._html.style.transform = this.transform;

        this.x = x;
        this.y = y;
    }
}
