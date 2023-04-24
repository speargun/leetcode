// 给你一个二叉树的根节点 root ，判断其是否是一个有效的二叉搜索树。

// 有效 二叉搜索树定义如下：

// 节点的左子树只包含 小于 当前节点的数。
// 节点的右子树只包含 大于 当前节点的数。
// 所有左子树和右子树自身必须也是二叉搜索树。
//  

// 示例 1：


// 输入：root = [2,1,3]
// 输出：true
// 示例 2：


// 输入：root = [5,1,4,null,null,3,6]
// 输出：false
// 解释：根节点的值是 5 ，但是右子节点的值是 4 。
//  

// 提示：

// 树中节点数目范围在[1, 10^4] 内
// -2^31 <= Node.val <= 2^31 - 1
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
var isValidBST = function (root) {//变数组法
    let arr = [];
    function traversal(root) {
        if (!root) return;
        traversal(root.left);
        arr.push(root.val);
        traversal(root.right);
    }
    traversal(root);
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] <= arr[i - 1]) return false;
    }
    return true;
};

function isValidBST(root) {//中序法
    let max = null;
    function traversal(root) {
        if (!root) return true;
        let left = traversal(root.left);
        if (max && max.val >= root.val) return false;
        max = root;
        let right = traversal(root.right);
        return left && right;
    }
    return traversal(root);
}

//test
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}