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
    this.transform = "";
    if (type.search(/^[PLNSGBRK]$/)) {
        this.transform = 'rotate(180deg)';
    }
}
