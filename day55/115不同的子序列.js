// 给你两个字符串 s 和 t ，统计并返回在 s 的 子序列 中 t 出现的个数。

// 题目数据保证答案符合 32 位带符号整数范围。

//  

// 示例 1：

// 输入：s = "rabbbit", t = "rabbit"
// 输出：3
// 解释：
// 如下所示, 有 3 种可以从 s 中得到 "rabbit" 的方案。
// rabbbit
// rabbbit
// rabbbit
// 示例 2：

// 输入：s = "babgbag", t = "bag"
// 输出：5
// 解释：
// 如下所示, 有 5 种可以从 s 中得到 "bag" 的方案。 
// babgbag
// babgbag
// babgbag
// babgbag
// babgbag
//  

// 提示：

// 1 <= s.length, t.length <= 1000
// s 和 t 由英文字母组成
/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var numDistinct = function (s, t) {
    let dp = Array.from(Array(s.length + 1), () => Array(t.length + 1).fill(0));

    for (let i = 0; i <= s.length; i++) {
        dp[i][0] = 1;
    }

    for (let i = 1; i <= s.length; i++) {
        for (let j = 1; j <= t.length; j++) {
            if (s[i - 1] === t[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + dp[i - 1][j];
            } else {
                dp[i][j] = dp[i - 1][j]
            }
        }
    }

    return dp[s.length][t.length];
};