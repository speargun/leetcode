// 你可以选择使用单链表或者双链表，设计并实现自己的链表。

// 单链表中的节点应该具备两个属性：val 和 next 。val 是当前节点的值，next 是指向下一个节点的指针/引用。

// 如果是双向链表，则还需要属性 prev 以指示链表中的上一个节点。假设链表中的所有节点下标从 0 开始。

// 实现 MyLinkedList 类：

// MyLinkedList() 初始化 MyLinkedList 对象。
// int get(int index) 获取链表中下标为 index 的节点的值。如果下标无效，则返回 -1 。
// void addAtHead(int val) 将一个值为 val 的节点插入到链表中第一个元素之前。在插入完成后，新节点会成为链表的第一个节点。
// void addAtTail(int val) 将一个值为 val 的节点追加到链表中作为链表的最后一个元素。
// void addAtIndex(int index, int val) 将一个值为 val 的节点插入到链表中下标为 index 的节点之前。如果 index 等于链表的长度，那么该节点会被追加到链表的末尾。如果 index 比长度更大，该节点将 不会插入 到链表中。
// void deleteAtIndex(int index) 如果下标有效，则删除链表中下标为 index 的节点。
//  

// 示例：

// 输入
// ["MyLinkedList", "addAtHead", "addAtTail", "addAtIndex", "get", "deleteAtIndex", "get"]
// [[], [1], [3], [1, 2], [1], [1], [1]]
// 输出
// [null, null, null, null, 2, null, 3]

// 解释
// MyLinkedList myLinkedList = new MyLinkedList();
// myLinkedList.addAtHead(1);
// myLinkedList.addAtTail(3);
// myLinkedList.addAtIndex(1, 2);    // 链表变为 1->2->3
// myLinkedList.get(1);              // 返回 2
// myLinkedList.deleteAtIndex(1);    // 现在，链表变为 1->3
// myLinkedList.get(1);              // 返回 3
//  

// 提示：

// 0 <= index, val <= 1000
// 请不要使用内置的 LinkedList 库。
// 调用 get、addAtHead、addAtTail、addAtIndex 和 deleteAtIndex 的次数不超过 2000 。
class MyLinkedNode {
    val = null;
    next = null;
    prev = null;
    constructor(val, next, prev) {
        this.val = val;
        this.next = next;
        this.prev = prev;
    }
}
var MyLinkedList = function () {
    this.dummy = new MyLinkedNode();
    this.size = 0;
};

/** 
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function (index) {
    let dummy = this.dummy;
    let i = -1;
    while (i < index && dummy.next != null) {
        i++;
        dummy = dummy.next;
    }
    return i == index ? dummy.val : -1;
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function (val) {
    let dummy = this.dummy;
    let node = new MyLinkedNode(val, dummy.next, dummy);
    if (dummy.next) {
        dummy.next.prev = node;
    }
    dummy.next = node;
    this.size++;
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function (val) {
    let dummy = this.dummy;
    for (let i = 0; i < this.size; i++) {
        dummy = dummy.next;
    }
    let node = new MyLinkedNode(val, null, dummy);
    dummy.next = node;
    this.size++;
};

/** 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function (index, val) {
    if (index <= this.size && index >= 0) {
        let dummy = this.dummy;
        for (let i = 0; i < index; i++) {
            dummy = dummy.next;
        }
        let node = new MyLinkedNode(val, dummy.next, dummy);
        if (dummy.next) {
            dummy.next.prev = node;
        }
        dummy.next = node;
        this.size++;
    }
};

/** 
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function (index) {
    if (index < this.size && index >= 0) {
        let dummy = this.dummy;
        for (let i = 0; i <= index; i++) {
            dummy = dummy.next;
        }
        if (dummy.next) {
            dummy.next.prev = dummy.prev;
        }
        dummy.prev.next = dummy.next;
        this.size--;
    }
};

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */

//测试
function printList(list) {
    list = list.dummy.next;
    let arr = [];
    while (list.next) {
        arr.push(list.val);
        list = list.next;
    }
    arr.push(list.val);
    console.log(arr);
}

var obj = new MyLinkedList();//初始化MyLinkedList
console.log(obj.get(0));//get(Index)
obj.addAtHead(5);//头插节点
obj.addAtHead(4);
obj.addAtHead(3);
obj.addAtHead(2);
obj.addAtHead(1);
printList(obj);
console.log(obj.get(3));//get(Index)
obj.addAtTail(6);//尾插节点
obj.addAtTail(8);
obj.addAtTail(9);
obj.addAtTail(10);
obj.addAtTail(11);
printList(obj);
obj.addAtIndex(6, 7);//按位置插入
obj.addAtIndex(0, 0);
obj.addAtIndex(12, 12);
printList(obj);
obj.deleteAtIndex(12);//按位置删除
obj.deleteAtIndex(5);
obj.deleteAtIndex(0);
printList(obj);
