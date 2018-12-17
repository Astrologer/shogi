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
    this.type = type;
    this._html = document.createElement("div");
    this._html.innerHTML = this.name;
    this._sub = document.createElement("sub");
    this.transform = (type.search(/^[plnsgbrk]$/) >= 0) ? 'rotate(180deg)' : '';
    this.x = x || 0;
    this.y = y || 0;
    var position = `cell${this.x}${this.y}`;
    this._html.position = position;
    this._html.classList.add("piece");
    this._html.classList.add(position);
    this._html.style.transform = this.transform;

    this.isBlack = function() {
        return (type == type.toUpperCase());
    }

    this.toHTML = function() {
        return this._html;
    }

    this.isHand = function() {
        return (this._html.position == "cell00");
    }

    this.getName = function() {
        return this.name;
    }

    this.getType = function() {
        return this.type;
    }

    this.getBaseType = function() {
        return this.type;
    }

}
