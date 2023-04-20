// 给定一个二叉树，找出其最大深度。

// 二叉树的深度为根节点到最远叶子节点的最长路径上的节点数。

// 说明: 叶子节点是指没有子节点的节点。

// 示例：
// 给定二叉树 [3,9,20,null,null,15,7]，

//     3
//    / \
//   9  20
//     /  \
//    15   7
// 返回它的最大深度 3 。
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
var maxDepth = function (root) {//后序，处理顺序是左，右，中
    if (!root) return 0;
    return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
};

function maxDepthPreorder(root) {//前序
    let result = 0;
    if (!root) return result;
    function getDepth(node, depth) {
        result = Math.max(depth, result);//中
        if (!node.left && !node.right) return;
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
}

function maxDepthLevelorder(root) {//迭代法用层序
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