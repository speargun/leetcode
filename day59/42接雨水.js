// 给定 n 个非负整数表示每个宽度为 1 的柱子的高度图，计算按此排列的柱子，下雨之后能接多少雨水。

//  

// 示例 1：



// 输入：height = [0,1,0,2,1,0,1,3,2,1,2,1]
// 输出：6
// 解释：上面是由数组 [0,1,0,2,1,0,1,3,2,1,2,1] 表示的高度图，在这种情况下，可以接 6 个单位的雨水（蓝色部分表示雨水）。 
// 示例 2：

// 输入：height = [4,2,0,3,2,5]
// 输出：9
//  

// 提示：

// n == height.length
// 1 <= n <= 2 * 10^4
// 0 <= height[i] <= 10^5
/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {//双指针
    const len = height.length;
    if (len <= 2) return 0;
    const maxLeft = new Array(len).fill(0);
    const maxRight = new Array(len).fill(0);
    // 记录每个柱子左边柱子最大高度
    maxLeft[0] = height[0];
    for (let i = 1; i < len; i++) {
        maxLeft[i] = Math.max(height[i], maxLeft[i - 1]);
    }
    // 记录每个柱子右边柱子最大高度
    maxRight[len - 1] = height[len - 1];
    for (let i = len - 2; i >= 0; i--) {
        maxRight[i] = Math.max(height[i], maxRight[i + 1]);
    }
    // 求和
    let sum = 0;
    for (let i = 0; i < len; i++) {
        let count = Math.min(maxLeft[i], maxRight[i]) - height[i];
        if (count > 0) sum += count;
    }
    return sum;
};

function trap(height) {//单调栈
    const len = height.length;
    if (len <= 2) return 0; // 可以不加
    const st = [];// 存着下标，计算的时候用下标对应的柱子高度
    st.push(0);
    let sum = 0;
    for (let i = 1; i < len; i++) {
        if (height[i] < height[st[st.length - 1]]) { // 情况一
            st.push(i);
        }
        if (height[i] == height[st[st.length - 1]]) {  // 情况二
            st.pop(); // 其实这一句可以不加，效果是一样的，但处理相同的情况的思路却变了。
            st.push(i);
        } else { // 情况三
            while (st.length !== 0 && height[i] > height[st[st.length - 1]]) { // 注意这里是while
                let mid = st[st.length - 1];
                st.pop();
                if (st.length !== 0) {
                    let h = Math.min(height[st[st.length - 1]], height[i]) - height[mid];
                    let w = i - st[st.length - 1] - 1; // 注意减一，只求中间宽度
                    sum += h * w;
                }
            }
            st.push(i);
        }
    }
    return sum;
}