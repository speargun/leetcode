// 给定一个二叉树的根节点 root ，返回 它的 中序 遍历 。

//  

// 示例 1：


// 输入：root = [1,null,2,3]
// 输出：[1,3,2]
// 示例 2：

// 输入：root = []
// 输出：[]
// 示例 3：

// 输入：root = [1]
// 输出：[1]
//  

// 提示：

// 树中节点数目在范围 [0, 100] 内
// -100 <= Node.val <= 100
//  

// 进阶: 递归算法很简单，你可以通过迭代算法完成吗？
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
var inorderTraversal = function (root) {//递归法，如果不再单独地写函数的话，就要用闭包
    let res = [];
    function inorder(root) {
        if (root === null) {
            return;
        }
        inorder(root.left);
        res.push(root.val);
        inorder(root.right);
    }
    inorder(root);
    return res;
};

function inorderIterate(root) {//迭代法
    let result = [];
    let stack = [];
    let cur = root;
    while (stack.length || cur) {
        if (cur) {
            stack.push(cur);//左
            cur = cur.left;
        } else {
            cur = stack.pop();
            result.push(cur.val);//中
            cur = cur.right;//右
        }
    }
    return result;
}

function inorderGlobal(root) {
    let res = [];
    let stack = [];
    if (root) stack.push(root);
    while (stack.length) {
        let node = stack.pop();
        if (!node) {
            res.push(stack.pop().val);
            continue;
        }
        if (node.right) stack.push(node.right);//右
        stack.push(node);//中
        stack.push(null);
        if (node.left) stack.push(node.left);//左
    }
    return res;
}

//test
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}