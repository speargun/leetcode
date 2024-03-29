# 39组合总和
有两点需要注意。首先是元素可以重复，因此在递归的时候index不用加一。其次是剪枝时的条件：如果下一层的sum已经大于target，就可以结束本轮for循环的遍历。但这要求对初始数组进行排序。

P.S.一定要注意箭头函数简写模式的含义！如果箭头函数的函数体没有大括号，则表示return箭头后的内容；如果加了大括号而没写return，那么会默认return null！

# 40组合总和II
本题重点在于去重。因为不限制元素重复而限制不能有相同的组合，因此本题去重是树层去重。树层去重需要对数组进行排序，这样才能更高效地判断两元素是否相同。

# 131分割回文串
这种切割题的思路其实和组合是相同的逻辑。本题的难点在于想到切割问题可以抽象为组合问题、切割线如何模拟、切割问题中递归如何终止、递归循环中如何截取子串以及如何判断回文。