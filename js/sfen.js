function Sfen(value) {
    this.sfen = value;


    this.getSfen = function() {
        return this.sfen;
    }

    this.parse = function(value) {
        this.sfen = value;
        var j, j, items, posx, posy;
        var pieces = [];
        var parts = value.split(/[ _]/);
        var rows = parts[0].split(/[./]/);
        var prefix = "";

        if (parts.length == 3) {
            var hands = parts[2].split("");
            hands.forEach(p => pieces.push(new Piece(p)));
        }

        if (rows.length == 9) {
            for (posx = 1; posx < 10; posx++) {
                items = rows[posx - 1].split("");
                posy = 1;
                for (i = 0; i < items.length; i++) {
                    if (items[i].search(/^\d$/) >= 0) {
                        posy += parseInt(items[i]);
                        prefix = "";
                    } else if (items[i].search(/^[+x]$/) == 0) {
                        prefix = "x";
                    } else if (items[i].search(/^[plnsgbrk]$/i) >= 0 && posx < 10 && posy < 10) {
                        pieces.push(new Piece(prefix + items[i], posx, posy));
                        prefix = "";
                        posy += 1;
                    } else {
                        prefix = "";
                        console.log("err");
                        console.log(i);
                        console.log(items);
                    }
                }
            }
        }

        return pieces;
    }
}
