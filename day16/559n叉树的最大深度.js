// 给定一个 N 叉树，找到其最大深度。

// 最大深度是指从根节点到最远叶子节点的最长路径上的节点总数。

// N 叉树输入按层序遍历序列化表示，每组子节点由空值分隔（请参见示例）。

//  

// 示例 1：



// 输入：root = [1,null,3,2,4,null,5,6]
// 输出：3
// 示例 2：



// 输入：root = [1,null,2,3,4,5,null,null,6,7,null,8,null,9,10,null,null,11,null,12,null,13,null,null,14]
// 输出：5
//  

// 提示：

// 树的深度不会超过 1000 。
// 树的节点数目位于 [0, 10^4] 之间。
/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number}
 */
var maxDepth = function (root) {//后序，处理顺序是左，右，中
    if (!root) return 0;
    let depth = 0;
    for (let i = 0; i < root.children.length; i++) {
        depth = Math.max(depth, maxDepth(root.children[i]));
    }
    return 1 + depth;
};

function maxDepthPreorder(root) {//前序
    let result = 0;
    if (!root) return result;
    function getDepth(node, depth) {
        result = Math.max(depth, result);//中
        if (!node.children.length) return;
        for (child of node.children) {
            if (child) getDepth(child, depth + 1);
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
            for (let i = 0; i < node.children.length; i++) {
                if (node.children[i]) queue.push(node.children[i]);
            }
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