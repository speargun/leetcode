// 当且仅当每个相邻位数上的数字 x 和 y 满足 x <= y 时，我们称这个整数是单调递增的。

// 给定一个整数 n ，返回 小于或等于 n 的最大数字，且数字呈 单调递增 。

//  

// 示例 1:

// 输入: n = 10
// 输出: 9
// 示例 2:

// 输入: n = 1234
// 输出: 1234
// 示例 3:

// 输入: n = 332
// 输出: 299
//  

// 提示:

// 0 <= n <= 10^9
/**
 * @param {number} n
 * @return {number}
 */
var monotoneIncreasingDigits = function (n) {
    if (n < 10) return n;
    let num = n.toString().split('').map(item => +item);
    let flag = Infinity;
    for (let i = num.length - 1; i >= 0; i--) {
        if (num[i] < num[i - 1]) {
            flag = i;
            num[i] = 9;
            num[i - 1]--;
        }
    }
    for (let i = flag; i < num.length; i++) {
        num[i] = 9;
    }
    return parseInt(num.join(''));
};

//test
monotoneIncreasingDigits(10);