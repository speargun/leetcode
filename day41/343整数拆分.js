// 给定一个正整数 n ，将其拆分为 k 个 正整数 的和（ k >= 2 ），并使这些整数的乘积最大化。

// 返回 你可以获得的最大乘积 。

//  

// 示例 1:

// 输入: n = 2
// 输出: 1
// 解释: 2 = 1 + 1, 1 × 1 = 1。
// 示例 2:

// 输入: n = 10
// 输出: 36
// 解释: 10 = 3 + 3 + 4, 3 × 3 × 4 = 36。
//  

// 提示:

// 2 <= n <= 58
/**
 * @param {number} n
 * @return {number}
 */
var integerBreak = function (n) {
    let dp = new Array(n + 1).fill(0);
    dp[2] = 1;
    for (let i = 3; i <= n; i++) {
        for (let j = 1; j <= i / 2; j++) {
            dp[i] = Math.max(dp[i], j * (i - j), j * dp[i - j]);
        }
    }
    return dp[n];
};