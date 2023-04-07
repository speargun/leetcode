// 给你单链表的头节点 head ，请你反转链表，并返回反转后的链表。
//  

// 示例 1：


// 输入：head = [1,2,3,4,5]
// 输出：[5,4,3,2,1]
// 示例 2：


// 输入：head = [1,2]
// 输出：[2,1]
// 示例 3：

// 输入：head = []
// 输出：[]
//  

// 提示：

// 链表中节点的数目范围是 [0, 5000]
// -5000 <= Node.val <= 5000
//  

// 进阶：链表可以选用迭代或递归方式完成反转。你能否用两种方法解决这道题？
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {//借用数组
    let cur = head;
    let arr = [];
    while (cur) {
        arr.push(cur.val);
        cur = cur.next;
    }
    cur = head;
    while (cur) {
        cur.val = arr.pop();
        cur = cur.next;
    }
    return head;
};

function reverseListAd(head) {//用prev
    let cur = head;
    let prev = null;
    while (cur) {
        let temp = cur.next;
        cur.next = prev;
        prev = cur;
        cur = temp;
    }
    return prev;
}

function reverseListRe(prev, cur) {//用递归
    if (cur == null) {
        return prev;
    }
    let temp = cur.next;
    cur.next = prev;
    return reverseListRe(cur, temp);
}

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

let list = newList([1, 2, 3, 4, 5, 6, 7]);
printList(reverseListAd(list));
printList(reverseListRe(null, list));
// printList(reverseList(reverseList(list)));