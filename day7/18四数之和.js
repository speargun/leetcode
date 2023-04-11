// 给你一个由 n 个整数组成的数组 nums ，和一个目标值 target 。请你找出并返回满足下述全部条件且不重复的四元组 [nums[a], nums[b], nums[c], nums[d]] （若两个四元组元素一一对应，则认为两个四元组重复）：

// 0 <= a, b, c, d < n
// a、b、c 和 d 互不相同
// nums[a] + nums[b] + nums[c] + nums[d] == target
// 你可以按 任意顺序 返回答案 。

//  

// 示例 1：

// 输入：nums = [1,0,-1,0,-2,2], target = 0
// 输出：[[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]
// 示例 2：

// 输入：nums = [2,2,2,2,2], target = 8
// 输出：[[2,2,2,2]]
//  

// 提示：

// 1 <= nums.length <= 200
// -109 <= nums[i] <= 109
// -109 <= target <= 109
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums, target) {
    nums = nums.sort((a, b) => { return a - b });
    let arr = [];
    for (let a = 0; a < nums.length; a++) {
        if (nums[a] > target && nums[a] >= 0) break;//剪枝

        if (a > 0 && nums[a] == nums[a - 1]) continue;//去重

        for (let b = a + 1; b < nums.length; b++) {
            if (nums[a] + nums[b] > target && nums[b] >= 0) break;//二级剪枝

            if (b > a + 1 && nums[b] == nums[b - 1]) continue;//去重

            let c = b + 1;
            let d = nums.length - 1;
            while (c < d) {
                if (nums[a] + nums[b] + nums[c] + nums[d] > target) d--;
                else if (nums[a] + nums[b] + nums[c] + nums[d] < target) c++;
                else {
                    arr.push([nums[a], nums[b], nums[c], nums[d]]);
                    while (c < d && nums[d] == nums[d - 1]) d--;
                    while (c < d && nums[c] == nums[c + 1]) c++;
                    d--;
                    c++;
                }
            }
        }
    }
    return arr;
};

//测试
let nums = [1, 0, -1, 0, -2, 2], target = 0;
console.log(fourSum(nums, target));