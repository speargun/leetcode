// 给你一个链表，两两交换其中相邻的节点，并返回交换后链表的头节点。你必须在不修改节点内部的值的情况下完成本题（即，只能进行节点交换）。

//

// 示例 1：


// 输入：head = [1,2,3,4]
// 输出：[2,1,4,3]
// 示例 2：

// 输入：head = []
// 输出：[]
// 示例 3：

// 输入：head = [1]
// 输出：[1]
//

// 提示：

// 链表中节点的数目在范围 [0, 100] 内
// 0 <= Node.val <= 100
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
var swapPairs = function (head) {//无虚拟头结点
    let cur = head;
    let prev = null;
    if (cur && cur.next) {
        cur = cur.next;
        head.next = cur.next;
        cur.next = head;
        prev = head;
        head = cur;

        cur = cur.next.next;
    }
    while (cur && cur.next) {
        let temp = cur;
        cur = cur.next;
        temp.next = cur.next;
        cur.next = temp;
        prev.next = cur;
        prev = temp;

        cur = cur.next.next;
    }
    return head;
};

function swapPairsHead(head) {//有虚拟头结点
    let dummy = new ListNode(null, head);
    let cur = dummy;
    while (cur.next && cur.next.next) {
        let temp = cur.next;
        let temp1 = cur.next.next.next;
        cur.next = cur.next.next;
        cur.next.next = temp;
        cur.next.next.next = temp1;

        cur = cur.next.next;
    }
    return dummy.next;
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

let list = newList([1, 2, 3, 4]);
let list1 = newList([]);
let list2 = newList([1]);
// printList(swapPairs(list));
printList(swapPairsHead(list));

// printList(swapPairs(list1));
printList(swapPairsHead(list1));

// printList(swapPairs(list2));
printList(swapPairsHead(list2));