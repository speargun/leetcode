// 给定一个二叉树的 根节点 root，请找出该二叉树的 最底层 最左边 节点的值。

// 假设二叉树中至少有一个节点。

//  

// 示例 1:



// 输入: root = [2,1,3]
// 输出: 1
// 示例 2:



// 输入: [1,2,3,4,null,5,6,null,null,7]
// 输出: 7
//  

// 提示:

// 二叉树的节点个数的范围是 [1,10^4]
// -231 <= Node.val <= 2^31 - 1 
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
var findBottomLeftValue = function (root) {//递归法
    let res = 0;
    let maxDepth = -1;
    function traverse(node, depth) {
        if (!node.left && !node.right) {
            if (depth > maxDepth) {
                maxDepth = depth;
                res = node.val;
            }
            return;
        }
        if (node.left) traverse(node.left, depth + 1);
        if (node.right) traverse(node.right, depth + 1);
    }
    traverse(root, 0);
    return res;
};

function findBottomLeftValueLevel(root) {//层序
    let res = 0;
    let queue = [];
    if (root) queue.push(root);
    while (queue.length) {
        let size = queue.length;
        for (let i = 0; i < size; i++) {
            let node = queue.shift();
            if (i == 0) res = node.val;
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
    }
    return res;
}

//test
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}