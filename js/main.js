var titles = {
    ts1: '1 move tsume',
    ts3: '3 moves tsume',
    ts5: '5 moves tsume',
    ts7: '7 moves tsume',
    ts9: '9 moves tsume',
}

function createShogiBoard(boardId) {
    var args = new Args();
    var board = new ShogiBoard("boardX");
    board.initPlayField();
    board.initCSS();
    board.initBoard();
    board.initFigures(args.sfen);

    if (args.title !== undefined) {
        document.title = titles[args.title] || args.title;
    }
    return board;
}
