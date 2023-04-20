// 给定一个二叉树，找出其最小深度。

// 最小深度是从根节点到最近叶子节点的最短路径上的节点数量。

// 说明：叶子节点是指没有子节点的节点。

//  

// 示例 1：


// 输入：root = [3,9,20,null,null,15,7]
// 输出：2
// 示例 2：

// 输入：root = [2,null,3,null,4,null,5,null,6]
// 输出：5
//  

// 提示：

// 树中节点数的范围在 [0, 10^5] 内
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
var minDepth = function (root) {//后序，处理顺序是左，右，中
    if (!root) return 0;
    if (!root.left && root.right) return 1 + minDepth(root.right);
    if (root.left && !root.right) return 1 + minDepth(root.left);
    return 1 + Math.min(minDepth(root.left), minDepth(root.right));
};

var minDepthPreorder = function (root) {
    let result = Infinity;
    if (!root) return 0;
    function getDepth(node, depth) {
        if (!node.left && !node.right) {
            result = Math.min(depth, result);//中
            return;
        }
        if (node.left) {//左
            getDepth(node.left, depth + 1);
        }
        if (node.right) {//右
            getDepth(node.right, depth + 1);
        }
        return;
    }
    getDepth(root, 1);
    return result;
};

function minDepthLevelorder(root) {//迭代法用层序
    let depth = 0;
    let queue = [];
    if (root) queue.push(root);
    while (queue.length) {
        let size = queue.length;
        depth++;
        for (let i = 0; i < size; i++) {
            let node = queue.shift();
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
            if (!node.left && !node.right) return depth;
        }
    }
    return depth;
}

//test
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}