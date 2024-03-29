// 给你一棵二叉树的根节点 root ，翻转这棵二叉树，并返回其根节点。

//

// 示例 1：



// 输入：root = [4,2,7,1,3,6,9]
// 输出：[4,7,2,9,6,3,1]
// 示例 2：



// 输入：root = [2,1,3]
// 输出：[2,3,1]
// 示例 3：

// 输入：root = []
// 输出：[]
//

// 提示：

// 树中节点数目范围在 [0, 100] 内
// -100 <= Node.val <= 100
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
 * @return {TreeNode}
 */
var invertTree = function (root) {//递归法
    if (root === null) return root;
    [root.left, root.right] = [root.right, root.left];
    invertTree(root.left);
    invertTree(root.right);
    return root;
};

function preorderInvertGlobal(root) {//统一迭代法
    let stack = [];
    if (root) stack.push(root);
    while (stack.length) {
        let node = stack.pop();
        if (!node) {
            node = stack.pop();
            [node.left, node.right] = [node.right, node.left];
            continue;
        }
        if (node.right) stack.push(node.right);//右
        if (node.left) stack.push(node.left);//左
        stack.push(node);//中
        stack.push(null);
    }
    return root;
}

function levelorderInver(root) {//层序遍历法
    let queue = [];
    if (root) queue.push(root);
    while (queue.length) {
        let size = queue.length;
        for (let i = 0; i < size; i++) {
            let node = queue.shift();
            [node.left, node.right] = [node.right, node.left];
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
    }
    return root;
}

//test
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}