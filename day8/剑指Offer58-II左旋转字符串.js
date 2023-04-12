// 字符串的左旋转操作是把字符串前面的若干个字符转移到字符串的尾部。请定义一个函数实现字符串左旋转操作的功能。比如，输入字符串"abcdefg"和数字2，该函数将返回左旋转两位得到的结果"cdefgab"。

//

// 示例 1：

// 输入: s = "abcdefg", k = 2
// 输出: "cdefgab"
// 示例 2：

// 输入: s = "lrloseumgh", k = 6
// 输出: "umghlrlose"
//

// 限制：

// 1 <= k < s.length <= 10000
/**
 * @param {string} s
 * @param {number} n
 * @return {string}
 */
var reverseLeftWords = function (s, n) {
    s = s.split('');
    s = reverseString(s, 0, n - 1);
    s = reverseString(s, n, s.length - 1);
    s = reverseString(s, 0, s.length - 1);
    return s.join('');
};

var reverseString = function (s, start, end) {//反转指定区间的字符
    let slow = start;
    let fast = end;
    while (slow < fast) {
        let temp = s[slow];
        s[slow] = s[fast];
        s[fast] = temp;
        slow++;
        fast--;
    }
    return s;
};

//测试
let s = "abcdefg", k = 4;
console.log(reverseLeftWords(s, k)); 