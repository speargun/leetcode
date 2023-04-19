// 给你一棵二叉树的根节点 root ，返回其节点值的 后序遍历 。

//  

// 示例 1：


// 输入：root = [1,null,2,3]
// 输出：[3,2,1]
// 示例 2：

// 输入：root = []
// 输出：[]
// 示例 3：

// 输入：root = [1]
// 输出：[1]
//  

// 提示：

// 树中节点的数目在范围 [0, 100] 内
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
var postorderTraversal = function (root) {//递归法，如果不再单独地写函数的话，就要用闭包
    let res = [];
    function postorder(root) {
        if (root === null) {
            return;
        }
        postorder(root.left);
        postorder(root.right);
        res.push(root.val);
    }
    postorder(root);
    return res;
};

function postorderIterate(root) {//迭代法
    result = [];
    if (root === null) return result;
    let stack = [root];
    while (stack.length) {
        let cur = stack.pop();
        result.push(cur.val);
        if (cur.left) {
            stack.push(cur.left);
        }
        if (cur.right) {
            stack.push(cur.right);
        }
    }
    return result.reverse();
}

function postorderGlobal(root) {//统一迭代法
    let res = [];
    let stack = [];
    if (root) stack.push(root);
    while (stack.length) {
        let node = stack.pop();
        if (!node) {
            res.push(stack.pop().val);
            continue;
        }
        stack.push(node);//中
        stack.push(null);
        if (node.right) stack.push(node.right);//右
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