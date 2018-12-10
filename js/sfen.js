function Sfen(value) {
    this.sfen = value;


    this.getSfen = function() {
        return this.sfen;
    }

    this.parse = function(value) {
        this.sfen = value;
        var j, j, items, posx, posy;
        var pieces = [];
        var parts = value.split(" ");
        var rows = parts[0].split("/");
        if (rows.length == 9) {
            for (posx = 1; posx < 10; posx++) {
                items = rows[posx - 1].split("");
                posy = 1;
                for (i = 0; i < items.length; i++) {
                    if (items[i].search(/^\d$/) >= 0) {
                        posy += parseInt(items[i]);
                    } else if (items[i].search(/^[plnsgbrk]$/i) >= 0) {
                        pieces.push(new Piece(items[i], posx, posy));
                        posy += 1;
                    } else {
                        console.log("err");
                    }
                }
            }
        }
        return pieces;
    }
}
