
function ShogiBoard(boardId) {
    this.boardId = boardId;

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

    this.initBoard = function() {
        function moveHandler(item, boardId) {
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

        var i, j;
        var cell;
        var board = document.getElementById(this.boardId);

        for (i = 1; i < 10; i++) {
            for (j = 1; j < 10; j++) {
                var cell = document.createElement("div");
                cell.classList.add("cell");
                cell.classList.add(`cell${i}${j}`);
                cell.position = `cell${i}${j}`;
                cell.onclick = (function (a,b) { return function () { moveHandler(a, b); }}) (cell, this.boardId)
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

    this.initFigures = function() {
        function activateHandler(item, boardId) {
            var board = document.getElementById(boardId);
            console.log("pushed");
            console.log(item.position);
            if ("active" in board) {}
            else board.active = item
        }

        var board = document.getElementById(this.boardId);
        var cell = document.createElement("div");

        cell.classList.add(`cell34`);
        cell.position = `cell34`;
        cell.classList.add(`item`);
        cell.innerHTML = "歩";
        cell.onclick = (function (a,b) { return function () { activateHandler(a, b); }}) (cell, this.boardId)
        board.appendChild(cell);
    }
}
