// 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效。

// 有效字符串需满足：

// 左括号必须用相同类型的右括号闭合。
// 左括号必须以正确的顺序闭合。
// 每个右括号都有一个对应的相同类型的左括号。
//  

// 示例 1：

// 输入：s = "()"
// 输出：true
// 示例 2：

// 输入：s = "()[]{}"
// 输出：true
// 示例 3：

// 输入：s = "(]"
// 输出：false
//  

// 提示：

// 1 <= s.length <= 10^4
// s 仅由括号 '()[]{}' 组成
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    let arr = s.split('');
    let stack = [];
    for (let i = 0; i < arr.length; i++) {
        if (stack.length == 0 && arr[i].match(/\)|\]|\}/)) return false;
        if (arr[i].match(/\(|\[|\{/)) stack.push(s[i]);
        if (stack.length > 0) {
            let x = stack.pop();
            stack.push(x);
            if ((arr[i] == ')' && x != '(') || (arr[i] == ']' && x != '[') || (arr[i] == '}' && x != '{')) return false;
            if ((arr[i] == ')' && x == '(') || (arr[i] == ']' && x == '[') || (arr[i] == '}' && x == '{')) stack.pop();
        }
    }
    return stack.length == 0;
};

function isValidOptimized(s) {//优化
    if (s.length % 2 != 0) return false;
    let stack = [];
    for (let i = 0; i < s.length; i++) {
        if (s[i] == '(') stack.push(')');
        else if (s[i] == '[') stack.push(']');
        else if (s[i] == '{') stack.push('}');
        else if (s[i] != stack.pop()) return false;
    }
    return stack.length == 0;
}

function isValidUltimate(s) {//再优化
    const stack = [];
    const map = {
        '(': ')',
        '[': ']',
        '{': '}'
    }
    for (let x of s) {
        if (x in map) {
            stack.push(x);
            continue;
        }
        if (map[stack.pop()] !== x) return false;
    }
    return stack.length == 0;
}

//测试
let s = '(])';
console.log(isValid(s));
console.log(isValidOptimized(s));
console.log(isValidUltimate(s));