// 给你一个链表的头节点 head 和一个整数 val ，请你删除链表中所有满足 Node.val == val 的节点，并返回 新的头节点 。
//  

// 示例 1：


// 输入：head = [1,2,6,3,4,5,6], val = 6
// 输出：[1,2,3,4,5]
// 示例 2：

// 输入：head = [], val = 1
// 输出：[]
// 示例 3：

// 输入：head = [7,7,7,7], val = 7
// 输出：[]
//  

// 提示：

// 列表中的节点数目在范围 [0, 104] 内
// 1 <= Node.val <= 50
// 0 <= val <= 50
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function (head, val) {//傀儡头结点法
    let dummy = new ListNode(0, head);//令傀儡头结点指向头结点，这样就不用单独处理头结点
    let temp = dummy;
    while (head != null) {
        if (head.val == val) {
            temp.next = head.next;
        } else {
            temp = temp.next;
        }
        head = head.next;
    }
    return dummy.next;
};

function removeElementsHead(head, val) {//单独处理头结点法
    let cur = head;
    while (head != null && head.val == val) {//注意这里要循环处理头结点
        head = head.next;
    }
    while (cur != null && cur.next != null) {//这里用了处理下一个节点的逻辑，本质上没有什么不同，只是要注意边界条件
        if (cur.next.val == val) {
            cur.next = cur.next.next;
        } else {
            cur = cur.next;
        }
    }
    return head;
}

//测试
class ListNode {
    val = 0;
    next = null;
    constructor(value, next) {
        this.val = value;
        this.next = next;
    }
}

function newList(arr) {
    let list = new ListNode(arr[0]);
    let node = list;
    for (let i = 1; i < arr.length; i++) {
        node.next = new ListNode(arr[i]);
        node = node.next;
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

let list = newList([6, 1, 6, 6, 2, 6]);
printList(removeElements(list, 6));
printList(removeElementsHead(list, 6));
let list1 = newList([1, 2, 3, 4, 5]);
printList(removeElements(list1, 6));
printList(removeElementsHead(list1, 6));