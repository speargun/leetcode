// 给你一个二叉搜索树的根节点 root ，返回 树中任意两不同节点值之间的最小差值 。

// 差值是一个正数，其数值等于两值之差的绝对值。

//  

// 示例 1：


// 输入：root = [4,2,6,1,3]
// 输出：1
// 示例 2：


// 输入：root = [1,0,48,null,null,12,49]
// 输出：1
//  

// 提示：

// 树中节点的数目范围是 [2, 10^4]
// 0 <= Node.val <= 10^5
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
var getMinimumDifference = function (root) {//转数组
    let arr = [];
    let res = Infinity;
    function traversal(root) {
        if (!root) return;
        traversal(root.left);
        arr.push(root.val);
        traversal(root.right);
    }
    traversal(root);
    for (let i = 1; i < arr.length; i++) {
        res = Math.min(res, arr[i] - arr[i - 1]);
    }
    return res;
};

function getMinimumDifference(root) {//递归
    let res = Infinity;
    let pre = null;
    function traversal(root) {
        if (!root) return;
        traversal(root.left);
        if (pre) res = Math.min(res, root.val - pre.val);
        pre = root;
        traversal(root.right);
    }
    traversal(root);
    return res;
}

function getMinimumDifference(root) {//迭代
    let stack = [];
    let cur = root, pre = null;
    let res = Infinity;
    while (cur || stack.length) {
        if (cur) {
            stack.push(cur);
            cur = cur.left;
        } else {
            cur = stack.pop();
            if (pre) res = Math.min(res, cur.val - pre.val);
            pre = cur;
            cur = cur.right;
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