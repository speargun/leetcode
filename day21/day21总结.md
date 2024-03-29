# 530二叉搜索树的最小绝对差
利用二叉搜索树的特点，使用中序即可。

# 501二叉搜索树的众数
如果不是二叉搜索树，则暴力方法就是用Map统计频率后排序取最高值。而对于二叉搜索树而言，中序遍历则能更快得到有序数组。如果不占用额外空间呢？可以使用双指针技巧，即使用pre指针和cur指针的方法判断钙元素是否等于前一个元素。因为是二叉搜索树，如果该元素不等于前一个元素，它肯定也不等于之前已经遍历过的其他元素。因此，只需在递归外层保存一个最大频率即可获得众数的集合：如果当前元素的count等于maxCount，则放入result中，如果大于，则清空result并将当前元素放入result中并让maxCount等于count。

# 236二叉树的最近公共祖先
求最小公共祖先，需要从底向上遍历，那么二叉树，只能通过后序遍历（即：回溯）实现从底向上的遍历方式。

在回溯的过程中，必然要遍历整棵二叉树，即使已经找到结果了，依然要把其他节点遍历完，因为要使用递归函数的返回值（也就是代码中的left和right）做逻辑判断。

要理解如果返回值left为空，right不为空为什么要返回right，为什么可以用返回right传给上一层结果。