// 给出由小写字母组成的字符串 S，重复项删除操作会选择两个相邻且相同的字母，并删除它们。

// 在 S 上反复执行重复项删除操作，直到无法继续删除。

// 在完成所有重复项删除操作后返回最终的字符串。答案保证唯一。

//

// 示例：

// 输入："abbaca"
// 输出："ca"
// 解释：
// 例如，在 "abbaca" 中，我们可以删除 "bb" 由于两字母相邻且相同，这是此时唯一可以执行删除操作的重复项。之后我们得到字符串 "aaca"，其中又只有 "aa" 可以执行重复项删除操作，所以最后的字符串为 "ca"。
//

// 提示：

// 1 <= S.length <= 20000
// S 仅由小写英文字母组成。
/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicates = function (s) {
    let stack = [];
    for (let i = 0; i < s.length; i++) {
        if (stack.length == 0) {
            stack.push(s[i]);
            continue;
        }
        let x = stack.pop();
        if (s[i] != x) {
            stack.push(x);
            stack.push(s[i]);
        }
    }
    return stack.join('');
};

function removeDuplicatesAdvance(s) {//原地解法
    s = [...s];
    let top = -1;
    for (let i = 0; i < s.length; i++) {
        if (top === -1 || s[top] != s[i]) {
            s[++top] = s[i];
        } else {
            top--;
        }
    }
    s.length = top + 1;
    return s.join('');
}

//test
let s = "abbaca";
console.log(removeDuplicates(s));