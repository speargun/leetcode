// 给定两个数组 nums1 和 nums2 ，返回 它们的交集 。输出结果中的每个元素一定是 唯一 的。我们可以 不考虑输出结果的顺序 。

//  

// 示例 1：

// 输入：nums1 = [1,2,2,1], nums2 = [2,2]
// 输出：[2]
// 示例 2：

// 输入：nums1 = [4,9,5], nums2 = [9,4,9,8,4]
// 输出：[9,4]
// 解释：[4,9] 也是可通过的
//  

// 提示：

// 1 <= nums1.length, nums2.length <= 1000
// 0 <= nums1[i], nums2[i] <= 1000
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {//Set解决
    return [...new Set(nums2.filter(item => new Set(nums1).has(item)))];
};

function intersectionArr(nums1, nums2) {//数组解决
    let hash = new Array(1002);
    let arr = new Set();
    for (let i = 0; i < nums1.length; i++) {
        hash[nums1[i]] = 1;
    }
    for (let i = 0; i < nums2.length; i++) {
        if (hash[nums2[i]] == 1) {
            arr.add(nums2[i]);
        }
    }
    return [...arr];
}

//测试
let nums1 = [4, 9, 5];
let nums2 = [9, 4, 9, 8, 4];
console.log(intersection(nums1, nums2));