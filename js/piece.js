names = {
    p: "歩",
    P: "歩",
    xp: "と",
    xP: "と",

    l: "香",
    L: "香",
    xl: "杏",
    xL: "杏",

    n: "桂",
    N: "桂",
    xn: "圭",
    xN: "圭",

    s: "銀",
    S: "銀",
    xs: "全",
    xS: "全",

    b: "角",
    B: "角",
    xb: "馬",
    xB: "馬",

    r: "飛",
    R: "飛",
    xr: "竜",
    xR: "竜",

    g: "金",
    G: "金",

    k: "玉",
    K: "王"
}

function Piece(type, x, y) {
    this.type = type.replace("x", "");
    this.promoted = type.replace(/[^x]/g, "");

    this._hand = "cell00";
    this._html = document.createElement("div");
    this._html.innerHTML = names[this.promoted + this.type];
    this._sub = document.createElement("sub");
    this.transform = (type.search(/^x?[plnsgbrk]$/) >= 0) ? 'rotate(180deg)' : '';
    if (type.search(/^x/) == 0) {
        this._html.classList.add("promoted");
    }
    this.x = x || 0;
    this.y = y || 0;
    this.position = `cell${this.x}${this.y}`;
    this._html.classList.add("piece");
    this._html.classList.add(this.position);
    this._html.style.transform = this.transform;

    this.getPosition = function() {
        return this.position;
    }

    this.setPosition = function(position) {
        this._html.classList.replace(this.position, position);
        this.position = position;
    }

    this.isBlack = function() {
        return (this.type == this.type.toUpperCase());
    }

    this.toHTML = function() {
        return this._html;
    }

    this.isHand = function() {
        return (this.position == this._hand);
    }

    this.getName = function() {
        return names[this.promoted + this.type];
    }

    this.getType = function() {
        return this.type;
    }

    this.getBaseType = function() {
        return this.type;
    }

    this.isPromoted = function() {
        return this.promoted == "x";
    }

    this.ableToPromote = function() {
        return "kg".indexOf(this.type.toLowerCase()) == -1;
    }

    this.setPromoted = function(promote) {
        if (!this.ableToPromote()) {
            return;
        }

        if (promote) {
            this._html.classList.add("promoted");
            this.promoted = "x";
            this._html.innerHTML = this.getName();
        } else {
            this._html.classList.remove("promoted");
            this.promoted = "";
            this._html.innerHTML = this.getName();
        }
    }

    this.togglePromotion = function() {
        this.setPromoted(!this.isPromoted());
    }

    this.capture = function() {
        this.promoted = "";
        this._html.classList.remove("promoted");
        if (this.isBlack()) {
            this.type = this.type.toLowerCase();
            this.transform = 'rotate(180deg)';
        } else {
            this.type = this.type.toUpperCase();
            this.transform = '';
        }
        this._html.style.transform = this.transform;
        this._html.innerHTML = this.getName();
        this._html.classList.replace(this.position, this._hand);
        this.position = this._hand;
    }
}
