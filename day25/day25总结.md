# 216组和总和III
本题也是回溯思想模板的变形，只是把条件从个数改为了加和，而且限定了集合中元素的个数，且规定了最终组合中的元素不能重复。因此，只需根据要求微调代码即可。对于剪枝操作，可以从题目本身出发，如果当前加和大于target则直接return。并且，如果加和元素个数大于要求个数，也可以提前结束循环。

# 17电话号码的字母组合
该题也是基本回溯，进行了需求上的变更。本题中，外层循环是每一个按键对应的各字母，而内层递归的则是不同按键的字母组合。