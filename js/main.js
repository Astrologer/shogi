function createShogiBoard(boardId) {
    var args = new Args();
    var board = new ShogiBoard("boardX");
    board.initPlayField();
    board.initCSS();
    board.initBoard();
    board.initFigures(args.sfen);

    return board;
}
