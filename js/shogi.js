function ShogiBoard(boardId) {
    this.boardId = boardId;
    this.sfen = new Sfen();
    this.blackHands = {};
    this.whiteHands = {};

    this.initCSS = function() {
        var i, j;
        var l, t;
        var rule;

        for (i = 1; i < 10; i++) {
            for (j = 1; j < 10; j++) {
                l = 5 + 10 * (i - 1);
                t = 5 + 10 * (j - 1);
                rule = `.cell${i}${j} { top: ${l}%; left: ${t}%; }`
                document.styleSheets[0].insertRule(rule, 0);
            }
        }
    }

    this.drawLine = function(svg, x1, x2, y1, y2, style) {
        var line = document.createElementNS('http://www.w3.org/2000/svg','line');
        line.setAttribute("x1", x1 + "%");
        line.setAttribute("x2", x2 + "%");
        line.setAttribute("y1", y1 + "%");
        line.setAttribute("y2", y2 + "%");
        line.classList.add(style);
        svg.appendChild(line);
    }

    this.initPlayField = function() {
        var i;

        this.table = (this.boardId === undefined) ? document.createElement("div") : document.getElementById(boardId);
        this.table.classList.add("play-field");

        this.board = document.createElement("div");
        this.board.classList.add("board");

        this.whiteHands = document.createElement("div");
        this.whiteHands.classList.add("hand");

        this.blackHands = document.createElement("div");
        this.blackHands.classList.add("hand");
        this.blackHands.classList.add("column-reverse");

        this.boardSvg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        this.boardSvg.classList.add("board-svg");

        var offset = 5;
        var len = (100 - 2 * offset) / 9.0;
        for (i = 0; i < 10; i++) {
            this.drawLine(this.boardSvg, offset, 100 - offset, offset + i * len, offset + i * len, "cell-line");
            this.drawLine(this.boardSvg, offset + i * len, offset + i * len, offset, 100 - offset, "cell-line");
        }

        for (i = 1; i < 3; i++) {
            this.drawLine(this.boardSvg, offset + len * 3 * i, offset + len * 3 * i, offset + len * 6, offset + len * 6, "dot");
            this.drawLine(this.boardSvg, offset + len * 3 * i, offset + len * 3 * i, offset + len * 3, offset + len * 3, "dot");
        }

        this.table.appendChild(this.whiteHands);
        this.table.appendChild(this.board);
        this.table.appendChild(this.blackHands);
        this.board.appendChild(this.boardSvg);
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
            cell.classList.add("column-index");
            board.appendChild(cell);
        }

        j = 9;
        for (i = 1; i < 10; i++) {
            var cell = document.createElement("div");
            cell.classList.add(`cell${i}${j}`);
            cell.innerHTML = String.fromCharCode(96 + i);
            cell.classList.add("row-index");
            board.appendChild(cell);
        }
    }

    this.activateHandler = function (self, item) {
        var board = self.board;
        console.log("pushed");
        console.log(item.position);
        if ("active" in board) {}
        else board.active = item
    }

    this.addPiece = function(piece) {
        var self = this;
        var html = piece.toHTML();

        if (!piece.isHand()) {
            html.onclick = (function (a,b) { return function () { self.activateHandler(a, b); }}) (self, html)
            this.board.appendChild(html);
        } else {
            if (piece.isBlack()) {
                this.blackHands.appendChild(html);
            } else {
                this.whiteHands.appendChild(html);
            }
        }
    }

    this.initFigures = function() {
        var position, i;

        var pieces = this.sfen.parse("lnsgk2nl/1r4gs1/p1pppp1pp/1p4p2/7P1/2P6/PP1PPPP1P/1SG4R1/LN2KGSNL b Bb");
        for (i = 0; i < pieces.length; i++) {
            this.addPiece(pieces[i]);
        }
    }
}
