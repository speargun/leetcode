// 给你一个字符串 s，请你将 s 分割成一些子串，使每个子串都是 回文串 。返回 s 所有可能的分割方案。

// 回文串 是正着读和反着读都一样的字符串。

//  

// 示例 1：

// 输入：s = "aab"
// 输出：[["a","a","b"],["aa","b"]]
// 示例 2：

// 输入：s = "a"
// 输出：[["a"]]
//  

// 提示：

// 1 <= s.length <= 16
// s 仅由小写英文字母组成
/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function (s) {
    let res = [], path = [];
    backtracking(0);
    return res;

    function backtracking(index) {
        if (index >= s.length) {
            res.push([...path]);
            return;
        }
        for (let i = index; i < s.length; i++) {
            if (isPalindrome(index, i)) path.push(s.slice(index, i + 1));
            else continue;
            backtracking(i + 1);
            path.pop();
        }
    }
    function isPalindrome(start, end) {
        for (let i = start, j = end; i < j; i++, j--) {
            if (s[i] != s[j]) return false;
        }
        return true;
    }
};