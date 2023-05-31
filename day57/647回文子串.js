// 给你一个字符串 s ，请你统计并返回这个字符串中 回文子串 的数目。

// 回文字符串 是正着读和倒过来读一样的字符串。

// 子字符串 是字符串中的由连续字符组成的一个序列。

// 具有不同开始位置或结束位置的子串，即使是由相同的字符组成，也会被视作不同的子串。

//  

// 示例 1：

// 输入：s = "abc"
// 输出：3
// 解释：三个回文子串: "a", "b", "c"
// 示例 2：

// 输入：s = "aaa"
// 输出：6
// 解释：6个回文子串: "a", "a", "a", "aa", "aa", "aaa"
//  

// 提示：

// 1 <= s.length <= 1000
// s 由小写英文字母组成
/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function (s) {
    const strLen = s.length;
    let numOfPalindromicStr = 0;
    let dp = Array.from(Array(strLen), () => Array(strLen).fill(false));

    for (let j = 0; j < strLen; j++) {
        for (let i = 0; i <= j; i++) {
            if (s[i] === s[j]) {
                if ((j - i) < 2) {
                    dp[i][j] = true;
                } else {
                    dp[i][j] = dp[i + 1][j - 1];
                }
                numOfPalindromicStr += dp[i][j] ? 1 : 0;
            }
        }
    }

    return numOfPalindromicStr;
};