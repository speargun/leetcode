// 给定二叉搜索树（BST）的根节点 root 和一个整数值 val。

// 你需要在 BST 中找到节点值等于 val 的节点。 返回以该节点为根的子树。 如果节点不存在，则返回 null 。

//  

// 示例 1:



// 输入：root = [4,2,7,1,3], val = 2
// 输出：[2,1,3]
// 示例 2:


// 输入：root = [4,2,7,1,3], val = 5
// 输出：[]
//  

// 提示：

// 数中节点数在 [1, 5000] 范围内
// 1 <= Node.val <= 10^7
// root 是二叉搜索树
// 1 <= val <= 10^7
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
 * @param {number} val
 * @return {TreeNode}
 */
var searchBST = function (root, val) {//递归法
    if (!root || root.val == val) return root;
    let result = new TreeNode();
    if (root.val > val) result = searchBST(root.left, val);
    if (root.val < val) result = searchBST(root.right, val);
    return result;
};

function searchBST(root, val) {//迭代法
    while (root) {
        if (root.val > val) root = root.left;
        else if (root.val < val) root = root.right;
        else return root;
    }
    return null;
}

//test
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}