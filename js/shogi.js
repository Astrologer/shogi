function ShogiBoard(boardId) {
    if (boardId === undefined) {
        this.board = document.createElement("div");
        this.board.classList.add("square");
    } else {
        this.board = document.getElementById(boardId);
    }
    this.sfen = new Sfen();
    this.blackHands = {};
    this.whiteHands = {};

    this.initCSS = function() {
        var i, j;
        var l, t;
        var rule;

        for (i = 1; i < 10; i++) {
            for (j = 1; j < 10; j++) {
                l = 11.06 * (i - 1);
                t = 11.06 * (j - 1);
                rule = `.cell${i}${j} { top: ${l}%; left: ${t}%; }`
                document.styleSheets[0].insertRule(rule, 0);
            }
        }
    }

    this.moveHandler = function(self, item) {
        var board = self.board;
        console.log("try to move");
        console.log(item.position);
        if ("active" in board) {
            console.log( board.active.position);
            board.active.classList.replace(board.active.position, item.position);
            board.active.position = item.position;
            delete board.active;
        }
    }

    this.initBoard = function() {
        var self = this;
        var board = this.board;
        var i, j, cell;

        for (i = 1; i < 10; i++) {
            for (j = 1; j < 10; j++) {
                var cell = document.createElement("div");
                cell.classList.add("cell");
                cell.classList.add(`cell${i}${j}`);
                cell.position = `cell${i}${j}`;
                cell.onclick = (function (a,b) { return function () { self.moveHandler(a, b); }}) (self, cell)
                board.appendChild(cell);
            }
        }

        i = 1;
        for (j = 1; j < 10; j++) {
            var cell = document.createElement("div");
            cell.classList.add(`cell${i}${j}`);
            cell.innerHTML = 10 - j;
            cell.classList.add("indexh");
            board.appendChild(cell);
        }

        j = 9;
        for (i = 1; i < 10; i++) {
            var cell = document.createElement("div");
            cell.classList.add(`cell${i}${j}`);
            cell.innerHTML = String.fromCharCode(96 + i);
            cell.classList.add("indexv");
            board.appendChild(cell);
        }

        for (i = 0; i < 2; i++) {
            for (j = 0; j < 2; j++) {
                cell = document.createElement("div");
                cell.classList.add("dot");
                cell.classList.add(`dot${i}${j}`);
                board.appendChild(cell);
            }
        }
    }

    this.activateHandler = function (self, item) {
        var board = self.board;
        console.log("pushed");
        console.log(item.position);
        if ("active" in board) {}
        else board.active = item
    }

    this.initFigures = function() {
        var board = this.board;
        var self = this;

        var position, i;

        var pieces = this.sfen.parse("lnsgk2nl/1r4gs1/p1pppp1pp/1p4p2/7P1/2P6/PP1PPPP1P/1SG4R1/LN2KGSNL b Bb");
        for (i = 0; i < pieces.length; i++) {
            var html = pieces[i].toHTML();
            html.onclick = (function (a,b) { return function () { self.activateHandler(a, b); }}) (self, html)
            board.appendChild(html);
        }
    }
}
