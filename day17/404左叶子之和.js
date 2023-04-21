// 给定二叉树的根节点 root ，返回所有左叶子之和。

//  

// 示例 1：



// 输入: root = [3,9,20,null,null,15,7] 
// 输出: 24 
// 解释: 在这个二叉树中，有两个左叶子，分别是 9 和 15，所以返回 24
// 示例 2:

// 输入: root = [1]
// 输出: 0
//  

// 提示:

// 节点数在 [1, 1000] 范围内
// -1000 <= Node.val <= 1000
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumOfLeftLeaves = function (root) {
    let val = 0;
    if (!root || !root.left && !root.right) return 0;
    if (root.left && !root.left.left && !root.left.right) {
        val = root.left.val;
    }
    return val + sumOfLeftLeaves(root.left) + sumOfLeftLeaves(root.right);
};

//test
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}