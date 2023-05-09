// 按照国际象棋的规则，皇后可以攻击与之处在同一行或同一列或同一斜线上的棋子。

// n 皇后问题 研究的是如何将 n 个皇后放置在 n×n 的棋盘上，并且使皇后彼此之间不能相互攻击。

// 给你一个整数 n ，返回所有不同的 n 皇后问题 的解决方案。

// 每一种解法包含一个不同的 n 皇后问题 的棋子放置方案，该方案中 'Q' 和 '.' 分别代表了皇后和空位。

//  

// 示例 1：


// 输入：n = 4
// 输出：[[".Q..","...Q","Q...","..Q."],["..Q.","Q...","...Q",".Q.."]]
// 解释：如上图所示，4 皇后问题存在两个不同的解法。
// 示例 2：

// 输入：n = 1
// 输出：[["Q"]]
//  

// 提示：

// 1 <= n <= 9
/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function (n) {
    let res = [];

    function backTracking(row, chessboard) {
        if (row === n) {
            res.push(transformChessboard(chessboard));
            return;
        }
        for (let col = 0; col < n; col++) {
            if (isValid(row, col, chessboard)) {
                chessboard[row][col] = 'Q';
                backTracking(row + 1, chessboard);
                chessboard[row][col] = '.';
            }
        }
    }

    function isValid(row, col, chessboard) {
        for (let i = 0; i < row; i++) {//行
            if (chessboard[i][col] == 'Q') return false;
        }
        for (let i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {//45度角
            if (chessboard[i][j] == 'Q') return false;
        }
        for (let i = row - 1, j = col + 1; i >= 0 && j < n; i--, j++) {//135度角
            if (chessboard[i][j] == 'Q') return false;
        }
        for (let i = 0; i < col; i++) {//列
            if (chessboard[row][i] == 'Q') return false;
        }
        return true;
    }

    function transformChessboard(chessboard) {
        let chessboardBack = [];
        chessboard.forEach(row => {
            let rowStr = '';
            row.forEach(value => {
                rowStr += value;
            });
            chessboardBack.push(rowStr);
        });
        return chessboardBack;
    }

    backTracking(0, new Array(n).fill([]).map(() => new Array(n).fill('.')));
    return res;
};