# 84柱状图中最大的矩形
本题双指针的写法整体思路和42. 接雨水 (opens new window)是一致的，但要比42. 接雨水 (opens new window)难一些。

难就难在本题要记录记录每个柱子 左边第一个小于该柱子的下标，而不是左边第一个小于该柱子的高度。

所以需要循环查找，也就是下面在寻找的过程中使用了while，详细请看下面注释，整理思路在题解：42. 接雨水 (opens new window)中已经介绍了。

本地单调栈的解法和接雨水的题目是遥相呼应的。

为什么这么说呢，42. 接雨水 (opens new window)是找每个柱子左右两边第一个大于该柱子高度的柱子，而本题是找每个柱子左右两边第一个小于该柱子的柱子。

这里就涉及到了单调栈很重要的性质，就是单调栈里的顺序，是从小到大还是从大到小。

在题解42. 接雨水 (opens new window)中我讲解了接雨水的单调栈从栈头（元素从栈头弹出）到栈底的顺序应该是从小到大的顺序。

那么因为本题是要找每个柱子左右两边第一个小于该柱子的柱子，所以从栈头（元素从栈头弹出）到栈底的顺序应该是从大到小的顺序！

只有栈里从大到小的顺序，才能保证栈顶元素找到左右两边第一个小于栈顶元素的柱子。

所以本题单调栈的顺序正好与接雨水反过来。

此时大家应该可以发现其实就是栈顶和栈顶的下一个元素以及要入栈的三个元素组成了我们要求最大面积的高度和宽度

理解这一点，对单调栈就掌握的比较到位了。

除了栈内元素顺序和接雨水不同，剩下的逻辑就都差不多了，在题解42. 接雨水 (opens new window)我已经对单调栈的各个方面做了详细讲解，这里就不赘述了。

主要就是分析清楚如下三种情况：

情况一：当前遍历的元素heights[i]大于栈顶元素heights[st.top()]的情况
情况二：当前遍历的元素heights[i]等于栈顶元素heights[st.top()]的情况
情况三：当前遍历的元素heights[i]小于栈顶元素heights[st.top()]的情况

首先来说末尾为什么要加元素0？

如果数组本身就是升序的，例如[2,4,6,8]，那么入栈之后 都是单调递减，一直都没有走 情况三 计算结果的哪一步，所以最后输出的就是0了。

那么结尾加一个0，就会让栈里的所有元素，走到情况三的逻辑。

开头为什么要加元素0？

如果数组本身是降序的，例如 [8,6,4,2]，在 8 入栈后，6 开始与8 进行比较，此时我们得到 mid（8），rigt（6），但是得不到 left。

（mid、left，right 都是对应版本一里的逻辑）

因为 将 8 弹出之后，栈里没有元素了，那么为了避免空栈取值，直接跳过了计算结果的逻辑。

之后又将6 加入栈（此时8已经弹出了），然后 就是 4 与 栈口元素 8 进行比较，周而复始，那么计算的最后结果resutl就是0。

# 一刷总结
整个一刷完毕以后，我感觉自己对于代码，尤其是算法思想的理解深刻了许多。从几乎不懂到能够手撕部分代码，这其中系统的学习和实践都是少不了的。虽然从回溯算法开始我的跟进有些吃力，但也算是勉强跟上了。当然，以我现在对于回溯算法及之后这些更难算法的熟练程度来说，我还远没有达到掌握的程度，因此要不断地总结，实践，进行二刷，三刷等等，一直到能够彻底的独立的举一反三为止。