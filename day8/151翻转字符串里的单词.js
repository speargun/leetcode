// 给你一个字符串 s ，请你反转字符串中 单词 的顺序。

// 单词 是由非空格字符组成的字符串。s 中使用至少一个空格将字符串中的 单词 分隔开。

// 返回 单词 顺序颠倒且 单词 之间用单个空格连接的结果字符串。

// 注意：输入字符串 s中可能会存在前导空格、尾随空格或者单词间的多个空格。返回的结果字符串中，单词间应当仅用单个空格分隔，且不包含任何额外的空格。

//  

// 示例 1：

// 输入：s = "the sky is blue"
// 输出："blue is sky the"
// 示例 2：

// 输入：s = "  hello world  "
// 输出："world hello"
// 解释：反转后的字符串中不能存在前导空格和尾随空格。
// 示例 3：

// 输入：s = "a good   example"
// 输出："example good a"
// 解释：如果两个单词间有多余的空格，反转后的字符串需要将单词间的空格减少到仅有一个。
//  

// 提示：

// 1 <= s.length <= 10^4
// s 包含英文大小写字母、数字和空格 ' '
// s 中 至少存在一个 单词
/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
    s = removeExtraSpace(s);//移除多余的空格
    s = s.split('');
    s = reverseString(s, 0, s.length - 1);//反转整个字符串
    let slow = 0;
    for (let fast = 0; fast < s.length; fast++) {//反转每个单词
        if (fast == s.length - 1 || s[fast + 1] == ' ') {
            s = reverseString(s, slow, fast);
            slow = fast + 2;
        }
    }
    return s.join('');
};

function removeExtraSpace(s) {//移除多余的空格
    s = s.split('');
    let slow = 0;
    for (let fast = 0; fast < s.length; fast++) {
        if (s[fast] != ' ') {//fast指针检索新数组中的元素
            if (slow != 0) s[slow++] = ' ';//每个单词后添加空格
            while (fast < s.length && s[fast] != ' ') {//每次将一整个单词存入
                s[slow++] = s[fast++];//slow指针存放所有符合新数组条件的元素
            }
        }
    }
    s.length = slow;//将数组缩小为新数组的长度
    return s.join('');
}

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
s = "  the sky is  blue ";
console.log(reverseWords(s));