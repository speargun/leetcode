# 435无重叠区间
区间划分要选好从左边界看还是从右边界看。如果用左边界排序，则统计重叠的个数；如果用右边界排序，则统计非重叠区间的个数再相减。

# 763划分字母区间
 从第一个字母开始确定每个遇到字母的最后出现位置。如果在到达最后出现位置之前遇到了最后出现位置更远的新字母，则更新最后出现位置，直到当前位置等于区间内字母的最后出现位置，这时就可以分割字符串了。

# 56合并区间
和前面几题思路基本一致，都是重叠区间类型的题。