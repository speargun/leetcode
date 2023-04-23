// 给定两个整数数组 inorder 和 postorder ，其中 inorder 是二叉树的中序遍历， postorder 是同一棵树的后序遍历，请你构造并返回这颗 二叉树 。

//  

// 示例 1:


// 输入：inorder = [9,3,15,20,7], postorder = [9,15,7,20,3]
// 输出：[3,9,20,null,null,15,7]
// 示例 2:

// 输入：inorder = [-1], postorder = [-1]
// 输出：[-1]
//  

// 提示:

// 1 <= inorder.length <= 3000
// postorder.length == inorder.length
// -3000 <= inorder[i], postorder[i] <= 3000
// inorder 和 postorder 都由 不同 的值组成
// postorder 中每一个值都在 inorder 中
// inorder 保证是树的中序遍历
// postorder 保证是树的后序遍历
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function (inorder, postorder) {
    //step1
    if (!postorder.length) return null;
    //step2:后序遍历数组做后一个元素作为当前的中间节点
    let rootValue = postorder[postorder.length - 1];
    let root = new TreeNode(rootValue);
    //叶子结点
    if (postorder.length == 1) return root;

    //step3:找切割点
    let delimiterIndex = 0;
    for (delimiterIndex = 0; delimiterIndex < inorder.length; delimiterIndex++) {
        if (inorder[delimiterIndex] == rootValue) break;
    }
    //step4:切割中序数组，得到中序左数组和中序右数组
    let leftInorder = inorder.slice(0, delimiterIndex);
    let rightInorder = inorder.slice(delimiterIndex + 1, inorder.length);
    //舍弃末尾元素
    postorder.length--;

    //step5:切割后序数组，得到后序左数组和后序右数组
    let leftPostorder = postorder.slice(0, leftInorder.length);
    let rightPostorder = postorder.slice(leftInorder.length, postorder.length);
    //step6:递归处理左区间和右区间
    root.left = buildTree(leftInorder, leftPostorder);
    root.right = buildTree(rightInorder, rightPostorder);

    return root;
};

function buildTree(inorder, postorder) {//优化
    if (!inorder.length) return null;
    const rootVal = postorder.pop();
    let rootIndex = inorder.indexOf(rootVal);
    const root = new TreeNode(rootVal);
    root.left = buildTree(inorder.slice(0, rootIndex), postorder.slice(0, rootIndex));
    root.right = buildTree(inorder.slice(rootIndex + 1), postorder.slice(rootIndex));
    return root;
}

//test
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}