function Hands() {
    this.whiteHands = document.createElement("div");
    this.whiteHands.classList.add("hand");
    this._whiteIndex = {};

    this.blackHands = document.createElement("div");
    this.blackHands.classList.add("hand");
    this.blackHands.classList.add("column-reverse");
    // XXX does't inherited for some reason
    this.blackHands.classList.add("align-right");
    this._blackIndex = {};

    this.getBlackHands = function() {
        return this.blackHands;
    }

    this.getWhiteHands = function() {
        return this.whiteHands;
    }

    this._addItem = function(piece, index, hands) {
        var type = piece.getBaseType();

        if (type in index) {
            item = index[type];
            item['count']++;
            item['pieces'].push(piece);
            item['ind'].innerHTML = item['count'];
        } else {
            var item = document.createElement("div");
            var sub = document.createElement("sub");

            item.classList.add("captive");
            if (piece.isBlack()) item.classList.add("align-right");
            item.innerHTML = piece.getName();
            item.appendChild(sub);

            sub.innerHTML = 1;

            index[type] = {
                count: 1,
                pieces: [piece],
                ind: sub,
                item: item
            }

            hands.appendChild(item);
        }
    }

    this.addPiece = function(piece) {
        if (piece.isBlack()) {
             this._addItem(piece, this._blackIndex, this.blackHands);
        } else {
             this._addItem(piece, this._whiteIndex, this.whiteHands);
        }
    }
}
