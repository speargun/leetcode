// 给你一个二叉树的根节点 root ， 检查它是否轴对称。

//  

// 示例 1：


// 输入：root = [1,2,2,3,4,4,3]
// 输出：true
// 示例 2：


// 输入：root = [1,2,2,null,3,null,3]
// 输出：false
//  

// 提示：

// 树中节点数目在范围 [1, 1000] 内
// -100 <= Node.val <= 100
//  

// 进阶：你可以运用递归和迭代两种方法解决这个问题吗？
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
 * @return {boolean}
 */
var isSymmetric = function (root) {//递归法
    if (!root) return true;
    function compare(left, right) {
        if (left == null && right == null) return true;
        else if ((left == null && right != null) || (left != null && right == null)) return false;
        else if (left.val != right.val) return false;
        let outside = compare(left.left, right.right);
        let inside = compare(left.right, right.left);
        return outside && inside;
    }
    return compare(root.left, root.right);
};

function isSymmetricIterate(root) {//迭代法
    if (!root) return true;
    let queue = [];
    queue.push(root.left);
    queue.push(root.right);
    while (queue.length) {
        let left = queue.pop();
        let right = queue.pop();
        if (!left && !right) continue;
        if (!left || !right || (left.val != right.val)) return false;
        queue.push(left.left);
        queue.push(right.right);
        queue.push(left.right);
        queue.push(right.left);
    }
    return true;
}

//test
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}