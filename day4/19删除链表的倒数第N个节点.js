// 给你一个链表，删除链表的倒数第 n 个结点，并且返回链表的头结点。

//  

// 示例 1：


// 输入：head = [1,2,3,4,5], n = 2
// 输出：[1,2,3,5]
// 示例 2：

// 输入：head = [1], n = 1
// 输出：[]
// 示例 3：

// 输入：head = [1,2], n = 1
// 输出：[1]
//  

// 提示：

// 链表中结点的数目为 sz
// 1 <= sz <= 30
// 0 <= Node.val <= 100
// 1 <= n <= sz
//  

// 进阶：你能尝试使用一趟扫描实现吗？
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
    let dummy = new ListNode(null, head);
    let fast = slow = dummy;
    for (let count = 0; count < n - 1; count++) {
        fast = fast.next;
    }
    while (fast.next && fast.next.next) {
        fast = fast.next;
        slow = slow.next;
    }
    slow.next = slow.next.next;
    return dummy.next;
};

//测试
class ListNode {
    val = null;
    next = null;
    constructor(value, next) {
        this.val = value;
        this.next = next;
    }
}

function newList(arr) {
    let list = null;
    if (arr.length > 0) {
        list = new ListNode(arr[0]);
        let node = list;
        for (let i = 1; i < arr.length; i++) {
            node.next = new ListNode(arr[i]);
            node = node.next;
        }
    }
    return list;
}

function printList(list) {
    let arr = [];
    while (list) {
        arr.push(list.val);
        list = list.next;
    }
    console.log(arr);
}

let list = newList([1, 2, 3, 4, 5]);
printList(removeNthFromEnd(list, 3));