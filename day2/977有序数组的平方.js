// 给你一个按 非递减顺序 排序的整数数组 nums，返回 每个数字的平方 组成的新数组，要求也按 非递减顺序 排序。

//  

// 示例 1：

// 输入：nums = [-4,-1,0,3,10]
// 输出：[0,1,9,16,100]
// 解释：平方后，数组变为 [16,1,0,9,100]
// 排序后，数组变为 [0,1,9,16,100]
// 示例 2：

// 输入：nums = [-7,-3,2,3,11]
// 输出：[4,9,9,49,121]
//  

// 提示：

// 1 <= nums.length <= 104
// -104 <= nums[i] <= 104
// nums 已按 非递减顺序 排序
//  

// 进阶：

// 请你设计时间复杂度为 O(n) 的算法解决本问题
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {//暴力解法
    for (let i = 0; i < nums.length; i++) {//平方
        nums[i] = nums[i] * nums[i];
    }
    for (let i = 0; i < nums.length; i++) {//排序
        // console.log('i:', i);
        for (let j = 0; j < nums.length - 1; j++) {
            if (nums[j] > nums[j + 1]) {
                nums[j] = nums[j] ^ nums[j + 1];
                nums[j + 1] = nums[j] ^ nums[j + 1];
                nums[j] = nums[j] ^ nums[j + 1];
            }
            // console.log('j:', j, nums);
        }
    }
    return nums;
};

function sortedSquaresAdvance(nums) {//双指针法
    let arr = [];
    let left = 0;
    let right = nums.length - 1;
    for (let i = nums.length - 1; i >= 0; i--) {
        if (nums[left] * nums[left] >= nums[right] * nums[right]) {
            arr[i] = nums[left] * nums[left];
            left++;
        } else {
            arr[i] = nums[right] * nums[right];
            right--;
        }
    }
    return arr;
}

//测试
let nums = [-7, -3, 2, 3, 11];
console.log(sortedSquares(nums));
let nums1 = [-7, -3, 2, 3, 11];
console.log(sortedSquaresAdvance(nums1));