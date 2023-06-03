// 给定 n 个非负整数，用来表示柱状图中各个柱子的高度。每个柱子彼此相邻，且宽度为 1 。

// 求在该柱状图中，能够勾勒出来的矩形的最大面积。

//  

// 示例 1:



// 输入：heights = [2,1,5,6,2,3]
// 输出：10
// 解释：最大的矩形为图中红色区域，面积为 10
// 示例 2：



// 输入： heights = [2,4]
// 输出： 4
//  

// 提示：

// 1 <= heights.length <=10^5
// 0 <= heights[i] <= 10^4
/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function (heights) {//双指针
    const len = heights.length;
    const minLeftIndex = new Array(len);
    const maxRigthIndex = new Array(len);
    // 记录每个柱子 左边第一个小于该柱子的下标
    minLeftIndex[0] = -1; // 注意这里初始化，防止下面while死循环
    for (let i = 1; i < len; i++) {
        let t = i - 1;
        // 这里不是用if，而是不断向左寻找的过程
        while (t >= 0 && heights[t] >= heights[i]) t = minLeftIndex[t];
        minLeftIndex[i] = t;
    }
    // 记录每个柱子 右边第一个小于该柱子的下标
    maxRigthIndex[len - 1] = len; // 注意这里初始化，防止下面while死循环
    for (let i = len - 2; i >= 0; i--) {
        let t = i + 1;
        // 这里不是用if，而是不断向右寻找的过程
        while (t < len && heights[t] >= heights[i]) t = maxRigthIndex[t];
        maxRigthIndex[i] = t;
    }
    // 求和
    let maxArea = 0;
    for (let i = 0; i < len; i++) {
        let sum = heights[i] * (maxRigthIndex[i] - minLeftIndex[i] - 1);
        maxArea = Math.max(maxArea, sum);
    }
    return maxArea;
};

function largestRectangleArea(heights) {//单调栈
    let maxArea = 0;
    const stack = [];
    heights = [0, ...heights, 0]; // 数组头部加入元素0 数组尾部加入元素0
    for (let i = 0; i < heights.length; i++) {
        if (heights[i] > heights[stack[stack.length - 1]]) { // 情况三
            stack.push(i);
        } else if (heights[i] === heights[stack[stack.length - 1]]) { // 情况二
            stack.pop(); // 这个可以加，可以不加，效果一样，思路不同
            stack.push(i);
        } else { // 情况一
            while (heights[i] < heights[stack[stack.length - 1]]) {// 当前bar比栈顶bar矮
                const stackTopIndex = stack.pop();// 栈顶元素出栈，并保存栈顶bar的索引
                let w = i - stack[stack.length - 1] - 1;
                let h = heights[stackTopIndex]
                // 计算面积，并取最大面积
                maxArea = Math.max(maxArea, w * h);
            }
            stack.push(i);// 当前bar比栈顶bar高了，入栈
        }
    }
    return maxArea;
}