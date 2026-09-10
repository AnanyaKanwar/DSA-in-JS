/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function(board) {
    solve(board);
};

function solve(board) {
    for (let r = 0; r < 9; r++) {
        for (let c = 0; c < 9; c++) {
            if (board[r][c] === '.') {
                for (let ch = 1; ch <= 9; ch++) {
                    const charVal = ch.toString();
                    if (isValid(board, r, c, charVal)) {
                        board[r][c] = charVal;
                        
                        if (solve(board)) return true;
                        

                        board[r][c] = '.';
                    }
                }
                return false; 
            }
        }
    }
    return true; 
}

function isValid(board, row, col, ch) {
    for (let i = 0; i < 9; i++) {
        if (board[row][i] === ch) return false;
        if (board[i][col] === ch) return false;
        const boxRow = 3 * Math.floor(row / 3) + Math.floor(i / 3);
        const boxCol = 3 * Math.floor(col / 3) + (i % 3);
        if (board[boxRow][boxCol] === ch) return false;
    }
    return true;
}