// 给你一个按照非递减顺序排列的整数数组 nums，和一个目标值 target。请你找出给定目标值在数组中的开始位置和结束位置。

// 如果数组中不存在目标值 target，返回 [-1, -1]。

// 你必须设计并实现时间复杂度为 O(log n) 的算法解决此问题。

//

// 示例 1：

// 输入：nums = [5,7,7,8,8,10], target = 8
// 输出：[3,4]
// 示例 2：

// 输入：nums = [5,7,7,8,8,10], target = 6
// 输出：[-1,-1]
// 示例 3：

// 输入：nums = [], target = 0
// 输出：[-1,-1]
//

// 提示：

// 0 <= nums.length <= 105
// -109 <= nums[i] <= 109
// nums 是一个非递减数组
// -109 <= target <= 109
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

//两个二分法的实现方式
function searchRight(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    let rightBorder = -2;//没赋值时
    while (left <= right) {
        let middle = left + ((right - left) >> 1);
        if (target < nums[middle]) {
            right = middle - 1;
        } else {
            left = middle + 1;
            rightBorder = left;
        }
    }
    return rightBorder;
}

function searchLeft(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    let leftBorder = -2;//没赋值时
    while (left <= right) {
        let middle = left + ((right - left) >> 1);
        if (target > nums[middle]) {
            left = middle + 1;
        } else {
            right = middle - 1;
            leftBorder = right;
        }
    }
    return leftBorder;
}

function searchLeftRight(nums, target) {
    let leftBorder = searchLeft(nums, target);
    let rightBorder = searchRight(nums, target);
    if (leftBorder == -2 || rightBorder == -2) {
        return [-1, -1];
    }
    if (rightBorder - leftBorder > 1) {
        return [leftBorder + 1, rightBorder - 1];
    }
    return [-1, -1];
}

//一个二分法实现方法
var searchRangeLR = function (nums, target, lower) {//
    let left = 0;
    let right = nums.length - 1;
    let ans = -1;
    while (left <= right) {
        middle = left + ((right - left) >> 1);
        if (target > nums[middle] || (lower && target >= nums[middle])) {
            left = middle + 1;
            ans = middle;
        } else {
            right = middle - 1;
        }
    }
    return ans;
};

function searchRange(nums, target) {
    let leftBorder = searchRangeLR(nums, target, false) + 1;
    let rightBorder = searchRangeLR(nums, target, true);
    if (leftBorder <= rightBorder && leftBorder > -1 && nums[leftBorder] == target && nums[rightBorder] == target) {
        return [leftBorder, rightBorder];
    }
    return [-1, -1];
}

//确定一个然后查找其他
function binarySearch(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    let middle;
    while (left <= right) {
        middle = left + ((right - left) >> 1);
        if (target < nums[middle]) {
            right = middle - 1;
        } else if (target > nums[middle]) {
            left = middle + 1;
        } else {
            return middle;
        }
    }
    return -1;
}

function binarySolution(nums, target) {
    let result = binarySearch(nums, target);
    let left = result;
    let right = result;
    if (result != -1) {
        while (left >= 0 && nums[left] == target) {
            left--;
        }
        while (right < nums.length && nums[right] == target) {
            right++;
        }
        return [left + 1, right - 1];
    }
    return [-1, -1];
}

//测试
let nums = [1, 2, 3, 4, 4, 4, 5, 8];
let target = 4;
console.log(searchLeftRight(nums, target));
console.log(searchRange(nums, target));
console.log(binarySolution(nums, target));