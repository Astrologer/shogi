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
    k: "王",
    K: "玉"
}

function Piece(type, x, y) {
    this.name = names[type];
    this.x = x;
    this.y = y;
    this.transform = (type.search(/^[plnsgbrk]$/) >= 0) ? 'rotate(180deg)' : '';
    this._html = document.createElement("div");

    var position = `cell${x}${y}`;
    this._html.position = position;
    this._html.classList.add("item");
    this._html.classList.add(position);
    this._html.innerHTML = this.name;
    this._html.style.transform = this.transform;

    this.toHTML = function() {
        return this._html;
    }
}
