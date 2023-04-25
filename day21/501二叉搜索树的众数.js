// 给你一个含重复值的二叉搜索树（BST）的根节点 root ，找出并返回 BST 中的所有 众数（即，出现频率最高的元素）。

// 如果树中有不止一个众数，可以按 任意顺序 返回。

// 假定 BST 满足如下定义：

// 结点左子树中所含节点的值 小于等于 当前节点的值
// 结点右子树中所含节点的值 大于等于 当前节点的值
// 左子树和右子树都是二叉搜索树
//  

// 示例 1：


// 输入：root = [1,null,2,2]
// 输出：[2]
// 示例 2：

// 输入：root = [0]
// 输出：[0]
//  

// 提示：

// 树中节点的数目在范围 [1, 10^4] 内
// -105 <= Node.val <= 10^5
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
 * @return {number[]}
 */
var findMode = function (root) {
    let maxCount = 0;
    let result = [];
    let pre = null;
    function traversal(cur) {
        if (!cur) return;
        traversal(cur.left);
        if (!pre) count = 1;
        else if (pre.val == cur.val) count++;
        else count = 1;
        pre = cur;
        if (count == maxCount) result.push(cur.val);
        if (count > maxCount) {
            maxCount = count;
            result.splice(0, result.length, cur.val);
        }
        traversal(cur.right);
        return;
    }
    traversal(root);
    return result;
};

//test
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}