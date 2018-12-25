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

    this.onclick = function(piece) {
    }

    this.getBlackHands = function() {
        return this.blackHands;
    }

    this.getWhiteHands = function() {
        return this.whiteHands;
    }

    this.popItem = function(piece) {
        var index = ((piece.isBlack()) ? this._blackIndex : this._whiteIndex)[piece.getType()];

        var piece = index['pieces'].pop();
        index['count']--;
        index['ind'].innerHTML = index['count'];

        if (index['count'] == 0) {
            index.item.parentNode.removeChild(index.item);
        }

        return piece;
    }

    this._addItem = function(piece, index, hands) {
        var self = this;
        var type = piece.getBaseType();

        if (type in index && index[type]['count'] > 0) {
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

            item.onclick = (function(i) { return function() { self.onclick(i.pieces[0]); }}) (index[type]);
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
