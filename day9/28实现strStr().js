// 给你两个字符串 haystack 和 needle ，请你在 haystack 字符串中找出 needle 字符串的第一个匹配项的下标（下标从 0 开始）。如果 needle 不是 haystack 的一部分，则返回 - 1 。

//  

// 示例 1：

// 输入：haystack = "sadbutsad", needle = "sad"
// 输出：0
// 解释："sad" 在下标 0 和 6 处匹配。
// 第一个匹配项的下标是 0 ，所以返回 0 。
// 示例 2：

// 输入：haystack = "leetcode", needle = "leeto"
// 输出：-1
// 解释："leeto" 没有在 "leetcode" 中出现，所以返回 - 1 。


// 提示：

// 1 <= haystack.length, needle.length <= 10 ^ 4
// haystack 和 needle 仅由小写英文字符组成
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
    if (!needle.length) return 0;
    const getNext = (needle) => {
        let next = [];
        let j = 0;
        next.push(j);

        for (let i = 1; i < needle.length; i++) {//i是后缀末尾，j是前缀末尾
            while (j > 0 && needle[i] !== needle[j]) {
                j = next[j - 1];
            }
            if (needle[i] === needle[j]) j++;
            next.push(j);
        }
        return next;
    }
    let next = getNext(needle);
    let j = 0;
    for (let i = 0; i < haystack.length; i++) {
        while (j > 0 && haystack[i] != needle[j]) j = next[j - 1];
        if (haystack[i] === needle[j]) j++;
        if (j === needle.length) return (i - needle.length + 1);
    }
    return -1;
};