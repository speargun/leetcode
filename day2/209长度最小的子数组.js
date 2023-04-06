// 给定一个含有 n 个正整数的数组和一个正整数 target 。

// 找出该数组中满足其和 ≥ target 的长度最小的 连续子数组 [numsl, numsl+1, ..., numsr-1, numsr] ，并返回其长度。如果不存在符合条件的子数组，返回 0 。

//  

// 示例 1：

// 输入：target = 7, nums = [2,3,1,2,4,3]
// 输出：2
// 解释：子数组 [4,3] 是该条件下的长度最小的子数组。
// 示例 2：

// 输入：target = 4, nums = [1,4,4]
// 输出：1
// 示例 3：

// 输入：target = 11, nums = [1,1,1,1,1,1,1,1]
// 输出：0
//  

// 提示：

// 1 <= target <= 109
// 1 <= nums.length <= 105
// 1 <= nums[i] <= 105
//  

// 进阶：

// 如果你已经实现 O(n) 时间复杂度的解法, 请尝试设计一个 O(n log(n)) 时间复杂度的解法。
/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {//暴力解法
    let result = Infinity;
    let subLength = 0;
    for (let i = 0; i < nums.length; i++) {
        let sum = 0;
        for (let j = i; j < nums.length; j++) {
            sum += nums[j];
            if (sum >= target) {
                subLength = j - i + 1;
                result = result < subLength ? result : subLength;
                break;
            }
        }
    }
    return result == Infinity ? 0 : result;
};

function minSubArrayLen1(target, nums) {//滑动窗口法
    let left = 0;
    let right = 0;
    let sum = 0;
    let result = Infinity;
    for (right = 0; right < nums.length; right++) {
        sum += nums[right];
        while (sum >= target) {
            result = result > right - left + 1 ? right - left + 1 : result;
            sum -= nums[left++];
        }
    }
    return result == Infinity ? 0 : result;
}

//测试
let target = 11;
let nums = [1, 1, 1, 1, 1, 1, 1, 1];
console.log(minSubArrayLen(target, nums));
console.log(minSubArrayLen1(target, nums));
let target1 = 7;
let nums1 = [2, 3, 1, 2, 4, 3];
console.log(minSubArrayLen(target1, nums1));
console.log(minSubArrayLen1(target1, nums1));
let target2 = 15;
let nums2 = [1, 2, 3, 4, 5];
console.log(minSubArrayLen(target2, nums2));
console.log(minSubArrayLen1(target2, nums2));