// 给你一棵 完全二叉树 的根节点 root ，求出该树的节点个数。

// 完全二叉树 的定义如下：在完全二叉树中，除了最底层节点可能没填满外，其余每层节点数都达到最大值，并且最下面一层的节点都集中在该层最左边的若干位置。若最底层为第 h 层，则该层包含 1~ 2h 个节点。

//  

// 示例 1：


// 输入：root = [1,2,3,4,5,6]
// 输出：6
// 示例 2：

// 输入：root = []
// 输出：0
// 示例 3：

// 输入：root = [1]
// 输出：1
//  

// 提示：

// 树中节点的数目范围是[0, 5 * 104]
// 0 <= Node.val <= 5 * 104
// 题目数据保证输入的树是 完全二叉树
//  

// 进阶：遍历树来统计节点是一种时间复杂度为 O(n) 的简单解决方案。你可以设计一个更快的算法吗？
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
var countNodes = function (root) {//普通二叉树解法
    if (!node) return 0;
    return 1 + countNodes(node.left) + countNodes(node.right);
}

var countNodesComplete = function (root) {//完全二叉树特解
    if (!root) return 0;
    let leftDepth = 0, rightDepth = 0;
    let left = root.left, right = root.right;
    while (left) {
        leftDepth++;
        left = left.left;
    }
    while (right) {
        rightDepth++;
        right = right.right;
    }
    if (leftDepth == rightDepth) return (2 << leftDepth) - 1;
    return countNodes(root.left) + countNodes(root.right) + 1;
};

//test
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}