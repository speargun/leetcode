// 给你一个正整数 n ，生成一个包含 1 到 n2 所有元素，且元素按顺时针顺序螺旋排列的 n x n 正方形矩阵 matrix 。

//  

// 示例 1：
// 1   -→      2   -→      3

//                         ↓

// 8   -→      9           4

// ↑                       ↓

// 7   ←-      6   ←-      5
// 输入：n = 3
// 输出：[[1,2,3],[8,9,4],[7,6,5]]
// 示例 2：

// 输入：n = 1
// 输出：[[1]]
//  

// 提示：

// 1 <= n <= 20
/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function (n) {//暴力解法
    let matrix = Array.from(new Array(n), () => new Array(n));
    let count = 1;//填进矩阵的数值，也是赋值的顺序
    let i = j = offset = -1;//因为每次转到横向向右时都会改变这些变量，因此在初始化时先减去每个循环增加的部分
    let turn = 0;//旋转参数，每次变化时都会顺时针改变填充方向
    while (count <= n * n) {//当填满时退出循环
        if (turn == 0) {//每转一圈时要相应的缩小下一圈的量
            i++;//起始位置向右下挪一格
            j++;
            offset += 2;//每边长度缩小2
        }
        if (n - offset < 1) {//当n=奇数，填充到只剩中间那最后一个空位时，下面的for循环会无法运行，因此要单独填充最后一格
            matrix[i][j] = count;
            count++;
        }
        for (let k = 0; k < n - offset; k++) {//每次转向前的长度是每边长度-1（注意每边长度会缩小）
            matrix[i][j] = count;
            count++;
            switch (turn) {//转向判断
                case 0:
                    j++;
                    break;
                case 1:
                    i++;
                    break;
                case 2:
                    j--;
                    break;
                case 3:
                    i--;
                    break;
            }
        }
        turn = (turn + 1) % 4;//每画完一边都转一次向
    }
    return matrix;
};

function generateMatrixCarl(n) {//Carl的写法，不同于我的一边一循环，Carl是一圈一循环，本质上的算法没有区别
    let startX = startY = 0;   // 起始位置
    let loop = Math.floor(n / 2);   // 旋转圈数
    let mid = Math.floor(n / 2);    // 中间位置
    let offset = 1;    // 控制每一层填充元素个数
    let count = 1;     // 更新填充数字
    let res = new Array(n).fill(0).map(() => new Array(n).fill(0));

    while (loop--) {
        let row = startX, col = startY;
        // 上行从左到右（左闭右开）
        for (; col < startY + n - offset; col++) {
            res[row][col] = count++;
        }
        // 右列从上到下（左闭右开）
        for (; row < startX + n - offset; row++) {
            res[row][col] = count++;
        }
        // 下行从右到左（左闭右开）
        for (; col > startY; col--) {
            res[row][col] = count++;
        }
        // 左列做下到上（左闭右开）
        for (; row > startX; row--) {
            res[row][col] = count++;
        }

        // 更新起始位置
        startX++;
        startY++;

        // 更新offset
        offset += 2;
    }
    // 如果n为奇数的话，需要单独给矩阵最中间的位置赋值
    if (n % 2 === 1) {
        res[mid][mid] = count;
    }
    return res;
}

//测试
let n = 1;
console.log(generateMatrix(n));
console.log(generateMatrixCarl(n));
n = 2;
console.log(generateMatrix(n));
console.log(generateMatrixCarl(n));
n = 3;
console.log(generateMatrix(n));
console.log(generateMatrixCarl(n));
n = 4;
console.log(generateMatrix(n));
console.log(generateMatrixCarl(n));
n = 5;
console.log(generateMatrix(n));
console.log(generateMatrixCarl(n));
n = 6;
console.log(generateMatrix(n));
console.log(generateMatrixCarl(n));