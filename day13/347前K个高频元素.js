// 给你一个整数数组 nums 和一个整数 k ，请你返回其中出现频率前 k 高的元素。你可以按 任意顺序 返回答案。

//

// 示例 1:

// 输入: nums = [1,1,1,2,2,3], k = 2
// 输出: [1,2]
// 示例 2:

// 输入: nums = [1], k = 1
// 输出: [1]
//

// 提示：

// 1 <= nums.length <= 105
// k 的取值范围是 [1, 数组中不相同的元素的个数]
// 题目数据保证答案唯一，换句话说，数组中前 k 个高频元素的集合是唯一的
//

// 进阶：你所设计算法的时间复杂度 必须 优于 O(n log n) ，其中 n 是数组大小。
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
    const map = new Map();

    for (const num of nums) {
        map.set(num, (map.get(num) || 0) + 1);
    }

    const heap = new Heap((a, b) => a[1] - b[1]);

    for (const entry of map.entries()) {
        heap.push(entry);

        if (heap.size() > k) heap.pop();
    }

    const res = [];
    for (let i = heap.size() - 1; i >= 0; i--) {
        res[i] = heap.pop()[0];
    }
    return res;
};

class Heap {
    constructor(compareFn) {
        this.compareFn = compareFn;
        this.queue = [];
    }

    push(item) {//添加
        this.queue.push(item);

        let index = this.size() - 1;//记录推入元素的下标
        let parent = Math.floor((index - 1) / 2);//记录父节点的下标

        while (parent >= 0 && this.compare(parent, index) > 0) {
            [this.queue[index], this.queue[parent]] = [this.queue[parent], this.queue[index]];
            //更新下标
            index = parent;
            parent = Math.floor((index - 1) / 2);
        }
    }

    pop() {//获取堆顶元素并移除
        const out = this.queue[0];
        this.queue[0] = this.queue.pop();//在堆顶位置填进最后一个元素
        let index = 0;//记录下沉元素下标
        let left = 1;//left加1就是右子节点
        let searchChild = this.compare(left, left + 1) > 0 ? left + 1 : left;

        while (searchChild !== undefined && this.compare(index, searchChild) > 0) {
            [this.queue[index], this.queue[searchChild]] = [this.queue[searchChild], this.queue[index]];

            //更新下标
            index = searchChild;
            left = 2 * index + 1;
            searchChild = this.compare(left, left + 1) > 0 ? left + 1 : left;
        }
        return out;
    }

    size() {
        return this.queue.length;
    }

    compare(index1, index2) {//使用传入的compareFn比较两个位置的元素
        //处理下标越界
        if (this.queue[index1] === undefined) return 1;
        if (this.queue[index2] === undefined) return -1;

        return this.compareFn(this.queue[index1], this.queue[index2]);
    }
}

//test
let nums = [1, 1, 1, 2, 2, 3], k = 2;
console.log(topKFrequent(nums, k));