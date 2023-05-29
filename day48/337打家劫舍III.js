// 小偷又发现了一个新的可行窃的地区。这个地区只有一个入口，我们称之为 root 。

// 除了 root 之外，每栋房子有且只有一个“父“房子与之相连。一番侦察之后，聪明的小偷意识到“这个地方的所有房屋的排列类似于一棵二叉树”。 如果 两个直接相连的房子在同一天晚上被打劫 ，房屋将自动报警。

// 给定二叉树的 root 。返回 在不触动警报的情况下 ，小偷能够盗取的最高金额 。

//  

// 示例 1:



// 输入: root = [3, 2, 3, null, 3, null, 1]
// 输出: 7
// 解释: 小偷一晚能够盗取的最高金额 3 + 3 + 1 = 7
// 示例 2:



// 输入: root = [3, 4, 5, 1, 3, null, 1]
// 输出: 9
// 解释: 小偷一晚能够盗取的最高金额 4 + 5 = 9


// 提示：

// 树的节点数在[1, 10 ^ 4] 范围内
// 0 <= Node.val <= 10 ^ 4
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
var rob = function (root) {//记忆化递归
    const map = new Map();
    backTracking(root);

    function backTracking(root) {
        if (!root) return 0;
        if (!root.left && !root.right) return root.val;
        if (map.has(root)) return map.get(root);
        let val1 = root.val;
        if (root.left) val1 += backTracking(root.left.left) + backTracking(root.left.right);
        if (root.right) val1 += backTracking(root.right.left) + backTracking(root.right.right);
        let val2 = backTracking(root.left) + backTracking(root.right);
        map[root] = Math.max(val1, val2);
        return Math.max(val1, val2);
    }
};

const rob = root => {
    // 后序遍历函数
    const postOrder = node => {
        // 递归出口
        if (!node) return [0, 0];
        // 遍历左子树
        const left = postOrder(node.left);
        // 遍历右子树
        const right = postOrder(node.right);
        // 不偷当前节点，左右子节点都可以偷或不偷，取最大值
        const DoNot = Math.max(left[0], left[1]) + Math.max(right[0], right[1]);
        // 偷当前节点，左右子节点只能不偷
        const Do = node.val + left[0] + right[0];
        // [不偷，偷]
        return [DoNot, Do];
    };
    const res = postOrder(root);
    // 返回最大值
    return Math.max(...res);
};

//test
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}