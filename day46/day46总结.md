# 139单词拆分
本题就是看能不能把背包装满。
字符串长度为i的话，dp[i]为true则表示可以拆分。
如果确定dp[j]为true，j小于i，且[j,i]区间的子串出现在字典中，那么dp[i]为true。
dp[0]一定为true，其他初始化为false。

遍历顺序的话，因为是完全背包，要求组合数就是外层for循环遍历物品，内层for遍历背包；求排列数就是外层for遍历背包，内层for遍历物品。本题求的是排列数，因为顺序影响结果。因为可重复使用子串，所以顺序是正序。

# 多重背包理论基础
有N种物品和一个容量为V 的背包。第i种物品最多有Mi件可用，每件耗费的空间是Ci ，价值是Wi 。求解将哪些物品装入背包可使这些物品的耗费的空间 总和不超过背包容量，且价值总和最大。其实把每一件物品摊开，就是01背包的问题。

# 背包问题总结
见背包问题1.jpeg。