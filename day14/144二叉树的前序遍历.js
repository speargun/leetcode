// 给你二叉树的根节点 root ，返回它节点值的 前序 遍历。

//  

// 示例 1：


// 输入：root = [1,null,2,3]
// 输出：[1,2,3]
// 示例 2：

// 输入：root = []
// 输出：[]
// 示例 3：

// 输入：root = [1]
// 输出：[1]
// 示例 4：


// 输入：root = [1,2]
// 输出：[1,2]
// 示例 5：


// 输入：root = [1,null,2]
// 输出：[1,2]
//  

// 提示：

// 树中节点数目在范围 [0, 100] 内
// -100 <= Node.val <= 100
//  

// 进阶：递归算法很简单，你可以通过迭代算法完成吗？
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
var preorderTraversal = function (root) {//递归法，如果不再单独地写函数的话，就要用闭包
    let res = [];
    function preorder(root) {
        if (root === null) {
            return;
        }
        res.push(root.val);
        preorder(root.left);
        preorder(root.right);
    }
    preorder(root);
    return res;
};

function preorderIterate(root) {//迭代法
    result = [];
    if (root === null) return result;
    let stack = [root];
    while (stack.length) {
        let cur = stack.pop();
        result.push(cur.val);
        if (cur.right) {
            stack.push(cur.right);
        }
        if (cur.left) {
            stack.push(cur.left);
        }
    }
    return result;
}

function preorderGlobal(root) {//统一迭代法
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
        if (node.left) stack.push(node.left);//左
        stack.push(node);//中
        stack.push(null);
    }
    return res;
}

//test
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}