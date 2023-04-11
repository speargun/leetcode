// 给你两个字符串：ransomNote 和 magazine ，判断 ransomNote 能不能由 magazine 里面的字符构成。

// 如果可以，返回 true ；否则返回 false 。

// magazine 中的每个字符只能在 ransomNote 中使用一次。

//  

// 示例 1：

// 输入：ransomNote = "a", magazine = "b"
// 输出：false
// 示例 2：

// 输入：ransomNote = "aa", magazine = "ab"
// 输出：false
// 示例 3：

// 输入：ransomNote = "aa", magazine = "aab"
// 输出：true
//  

// 提示：

// 1 <= ransomNote.length, magazine.length <= 105
// ransomNote 和 magazine 由小写英文字母组成
/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {//map法
    let code = new Map();
    for (i of magazine) {
        if (!code.has(i)) {
            code.set(i, 1);
        } else {
            code.set(i, code.get(i) + 1);
        }
    }
    for (i of ransomNote) {
        if (!code.has(i) || code.get(i) < 1) {
            return false;
        }
        code.set(i, code.get(i) - 1);
    }
    return true;
};

function canConstructArr(ransomNote, magazine) {//数组法
    let arr = new Array(26).fill(0);
    let base = 'a'.charCodeAt();
    ransomNote = ransomNote.split('');
    magazine = magazine.split('');
    for (i of magazine) {
        arr[i.charCodeAt() - base]++;
    }
    for (i of ransomNote) {
        if (arr[i.charCodeAt() - base] < 1) {
            return false;
        }
        arr[i.charCodeAt() - base]--;
    }
    return true;
}

//测试
let ransomNote = "aa", magazine = "ab";
console.log(canConstruct(ransomNote, magazine));