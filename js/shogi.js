function ShogiBoard(boardId) {
    this.boardId = boardId;
    this.sfen = new Sfen();
    this.board = {};
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

    this.moveHandler = function(item, boardId) {
        var board = document.getElementById(boardId);
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
        var board = document.getElementById(this.boardId);
        var i, j, cell;

        for (i = 1; i < 10; i++) {
            for (j = 1; j < 10; j++) {
                var cell = document.createElement("div");
                cell.classList.add("cell");
                cell.classList.add(`cell${i}${j}`);
                cell.position = `cell${i}${j}`;
                cell.onclick = (function (a,b) { return function () { self.moveHandler(a, b); }}) (cell, this.boardId)
                board.appendChild(cell);
            }
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

    this.activateHandler = function (item, boardId) {
        var board = document.getElementById(boardId);
        console.log("pushed");
        console.log(item.position);
        if ("active" in board) {}
        else board.active = item
    }

    this.initFigures = function() {
        var board = document.getElementById(this.boardId);
        var self = this;

        var position, i;

        var pieces = this.sfen.parse("lnsgk2nl/1r4gs1/p1pppp1pp/1p4p2/7P1/2P6/PP1PPPP1P/1SG4R1/LN2KGSNL b Bb");
        for (i = 0; i < pieces.length; i++) {
            var html = pieces[i].toHTML();
            html.onclick = (function (a,b) { return function () { self.activateHandler(a, b); }}) (html, this.boardId)
            board.appendChild(html);
        }
    }
}
