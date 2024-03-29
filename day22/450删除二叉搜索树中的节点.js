// 给定一个二叉搜索树的根节点 root 和一个值 key，删除二叉搜索树中的 key 对应的节点，并保证二叉搜索树的性质不变。返回二叉搜索树（有可能被更新）的根节点的引用。

// 一般来说，删除节点可分为两个步骤：

// 首先找到需要删除的节点；
// 如果找到了，删除它。
//  

// 示例 1:



// 输入：root = [5,3,6,2,4,null,7], key = 3
// 输出：[5,4,6,2,null,null,7]
// 解释：给定需要删除的节点值是 3，所以我们首先找到 3 这个节点，然后删除它。
// 一个正确的答案是 [5,4,6,2,null,null,7], 如下图所示。
// 另一个正确答案是 [5,2,6,null,4,null,7]。


// 示例 2:

// 输入: root = [5,3,6,2,4,null,7], key = 0
// 输出: [5,3,6,2,4,null,7]
// 解释: 二叉树不包含值为 0 的节点
// 示例 3:

// 输入: root = [], key = 0
// 输出: []
//  

// 提示:

// 节点数的范围 [0, 10^4].
// -10^5 <= Node.val <= 10^5
// 节点值唯一
// root 是合法的二叉搜索树
// -10^5 <= key <= 10^5
//  

// 进阶： 要求算法时间复杂度为 O(h)，h 为树的高度。
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
 * @param {number} key
 * @return {TreeNode}
 */
var deleteNode = function (root, key) {
    if (!root) return root;//state1
    if (root.val == key) {
        if (!root.left && !root.right) return null;//state2
        else if (!root.left) {//state3
            return root.right;
        } else if (!root.right) {//state4
            return root.left;
        } else {//state5
            let cur = root.right;
            while (cur.left) cur = cur.left;
            cur.left = root.left;
            root = root.right;
            return root;
        }
    }
    if (root.val > key) root.left = deleteNode(root.left, key);
    if (root.val < key) root.right = deleteNode(root.right, key);
    return root;
};

//test
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}