// 请实现一个函数，把字符串 s 中的每个空格替换成"%20"。

//  

// 示例 1：

// 输入：s = "We are happy."
// 输出："We%20are%20happy."
//  

// 限制：

// 0 <= s 的长度 <= 10000
/**
 * @param {string} s
 * @return {string}
 */
var replaceSpace = function (s) {
    s = s.split('');
    for (let i = 0; i < s.length; i++) {
        if (s[i] == ' ') {
            s[i] = '%20';
        }
    }
    return s.join('');
};

function replaceSpacePointer(s) {
    s = s.split('');
    let count = 0;
    for (i in s) {
        if (s[i] == ' ') {
            count++;
        }
    }
    let origin = s.length - 1;
    for (let i = s.length + count * 2 - 1; i > origin; i--) {
        if (s[origin] != ' ') {
            s[i] = s[origin];
        } else {
            s[i] = '0';
            s[i - 1] = '2';
            s[i - 2] = '%';
            i -= 2;
        }
        origin--;
    }
    return s.join('');
}

//测试
let s = "We are happy.";
console.log(replaceSpace(s));
let s1 = "We are happy.";
console.log(replaceSpacePointer(s1));