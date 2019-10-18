/**
 * 判断是否成功
 * @param checkerboard 棋盘
 * @param row 横坐标
 * @param col 纵坐标
 */
function isSuccess(checkerboard, row, col) {
    return acrossSuccess(checkerboard, row, col) || columnSuccess(checkerboard, row, col)
        || leftObliqueSuccess(checkerboard, row, col) || rightObliqueSuccess(checkerboard, row, col);
}

/**
 * 判断一行是否成功
 * @param checkerboard
 * @param row
 * @param col
 * @returns {boolean}
 */
function acrossSuccess(checkerboard, row, col) {
    let total = 1;
    // 判断左右两个方向，把这两个方向的棋子加在一起，如果等于5就代表成功，否则失败
    // 判断左侧有几个连续的棋子
    for (let i = col - 1; i >= 0; i--) {
        // 判断是不是和下的这个棋相同
        // checkerboard[row][col]  当前的棋子
        // checkerboard[row][i] 左侧第i个
        if (checkerboard[row][col] === checkerboard[row][i]) {
            total += 1;
        } else {
            break;
        }
    }

    for (let i = col + 1; i < 15; i++) {
        // 判断是不是和下的这个棋相同
        // checkerboard[row][col]  当前的棋子
        // checkerboard[row][i] 左侧第i个
        if (checkerboard[row][col] === checkerboard[row][i]) {
            total += 1;
        } else {
            break;
        }
    }

    return total === 5;
}

/**
 * 判断列是否成功
 * @param checkerboard
 * @param row
 * @param col
 * @returns {boolean}
 */
function columnSuccess(checkerboard, row, col) {
    let total = 1;
    // 判断左右两个方向，把这两个方向的棋子加在一起，如果等于5就代表成功，否则失败
    // 判断左侧有几个连续的棋子
    for (let i = row - 1; i >= 0; i--) {
        // 判断是不是和下的这个棋相同
        // checkerboard[row][col]  当前的棋子
        // checkerboard[row][i] 左侧第i个
        if (checkerboard[row][col] === checkerboard[i][col]) {
            total += 1;
        } else {
            break;
        }
    }

    for (let i = row + 1; i < 15; i++) {
        // 判断是不是和下的这个棋相同
        // checkerboard[row][col]  当前的棋子
        // checkerboard[row][i] 左侧第i个
        if (checkerboard[row][col] === checkerboard[i][col]) {
            total += 1;
        } else {
            break;
        }
    }

    return total === 5;
}

/**
 * 左斜线
 * @param checkerboard
 * @param row
 * @param col
 * @returns {boolean}
 */
function leftObliqueSuccess(checkerboard, row, col) {
    let total = 1;
    for (let i = 1; row + i < 15 && col + i < 15; i++) {
        if (checkerboard[row][col] === checkerboard[row + i][col + i]) {
            total += 1;
        } else {
            break;
        }
    }

    for (let i = 1; row - i >= 0 && col - i >= 0; i++) {
        if (checkerboard[row][col] === checkerboard[row - i][col - i]) {
            total += 1;
        } else {
            break;
        }
    }

    return total === 5;
}

/**
 * 右斜线
 * @param checkerboard
 * @param row
 * @param col
 * @returns {boolean}
 */
function rightObliqueSuccess(checkerboard, row, col) {
    let total = 1;
    for (let i = 1; row - i >= 0 && col + i < 15; i++) {
        if (checkerboard[row][col] === checkerboard[row - i][col + i]) {
            total += 1;
        } else {
            break;
        }
    }

    for (let i = 1; row + i < 15 && col - i >= 0; i++) {
        if (checkerboard[row][col] === checkerboard[row + i][col - i]) {
            total += 1;
        } else {
            break;
        }
    }

    return total === 5;
}

export {
    isSuccess
}
