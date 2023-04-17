// 给你一个整数数组 nums，有一个大小为 k 的滑动窗口从数组的最左侧移动到数组的最右侧。你只可以看到在滑动窗口内的 k 个数字。滑动窗口每次只向右移动一位。

// 返回 滑动窗口中的最大值 。

//

// 示例 1：

// 输入：nums = [1,3,-1,-3,5,3,6,7], k = 3
// 输出：[3,3,5,5,6,7]
// 解释：
// 滑动窗口的位置                最大值
// ---------------               -----
// [1  3  -1] -3  5  3  6  7       3
//  1 [3  -1  -3] 5  3  6  7       3
//  1  3 [-1  -3  5] 3  6  7       5
//  1  3  -1 [-3  5  3] 6  7       5
//  1  3  -1  -3 [5  3  6] 7       6
//  1  3  -1  -3  5 [3  6  7]      7
// 示例 2：

// 输入：nums = [1], k = 1
// 输出：[1]
//

// 提示：

// 1 <= nums.length <= 10^5
// -104 <= nums[i] <= 10^4
// 1 <= k <= nums.length
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
// var maxSlidingWindow = function (nums, k) {
//     const start = process.hrtime();
//     const queue = new MyQueue();
//     const result = [];
//     let left = 0, right = 0;
//     for (right = 0; right < k; right++) {
//         queue.push(nums[right]);
//     }
//     result.push(queue.front());
//     while (right < nums.length) {
//         queue.push(nums[right++]);
//         queue.pop(nums[left++]);
//         result.push(queue.front());
//     }
//     let end = process.hrtime(start);
//     console.log(end[0], end[1] / 1000000);
//     return result;
// };

// class MyQueue {
//     queue;
//     constructor() {
//         this.queue = [];
//     }
//     pop(value) {
//         if (this.queue.length != 0 && this.front() == value) return this.queue.shift();
//     };
//     push(value) {
//         while (this.queue[this.queue.length - 1] != undefined && value > this.queue[this.queue.length - 1]) {
//             this.queue.pop();
//         }
//         this.queue.push(value);
//     };
//     front() {
//         return this.queue[0];
//     };
// }

var maxSlidingWindow = function (nums, k) {
    const start = process.hrtime();
    const queue = [];
    const result = [];
    let left = 0, right = 0;
    for (right = 0; right < k; right++) {
        while (queue.length && nums[right] > queue[queue.length - 1]) {
            queue.pop();
        }
        queue.push(nums[right]);
    }
    result.push(queue[0]);
    while (right < nums.length) {
        while (queue[queue.length - 1] != undefined && nums[right] > queue[queue.length - 1]) {
            queue.pop();
        }
        queue.push(nums[right]);
        if (queue.length != 0 && queue[0] == nums[left]) queue.shift();
        result.push(queue[0]);
        left++;
        right++;
        if (right < k + 6) console.log(queue.length);
    }
    let end = process.hrtime(start);
    console.log(end[0], end[1] / 1000000);
    return result;
};

var maxSlidingWindowAdvance = function (nums, k) {//优化后，存储下标而非值
    const start = process.hrtime();
    const queue = [];
    const result = [];
    let right = 0;
    for (right = 0; right < k; right++) {
        while (queue.length && nums[right] >= nums[queue[queue.length - 1]]) {
            queue.pop();
        }
        queue.push(right);
    }
    result.push(nums[queue[0]]);
    while (right < nums.length) {
        if (queue.length && queue[0] < right - k + 1) queue.shift();
        while (queue.length && nums[right] >= nums[queue[queue.length - 1]]) {
            queue.pop();
        }
        queue.push(right);
        result.push(nums[queue[0]]);
        right++;
        if (right < k + 6) console.log(queue.length);
    }
    let end = process.hrtime(start);
    console.log(end[0], end[1] / 1000000);
    return result;
};

//test
let nums = new Array(500000);
let j = 10000;
for (let i = 0; i < 500000; i++) {
    nums[i] = j;
}
let k = 100000;
console.log(maxSlidingWindow(nums, k));
console.log(maxSlidingWindowAdvance(nums, k));