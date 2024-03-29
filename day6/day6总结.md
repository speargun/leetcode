# 哈希表理论基础
大话数据结构里并没有提到哈希表这一概念。哈希表即散列表，它是线性表顺序储存结构，因为它能够直接根据某个元素的索引访问元素。个人理解中，哈希表更像是一种思想方法，其主旨就是形成键值映射从而让查找的时间复杂度从O(n)变为O(1)。其实现方式有多种，包括数组，二叉树，红黑树等。但是如何将键值化为数组下标呢？这就要用到哈希函数。

哈希函数是通过hashCode把名字转化为数值的方法。一边来说，通过特定编码方式，hashCode函数能够把其他数据格式转化为不同的数值。如果转化后的数值大于列表，可以使用模运算处理。

关于哈希碰撞：哈希碰撞是指当哈希表小于所有不同的值的数量时或通过哈希函数运算后，出现同一个下标包含多个值的情况。有两种处理思路：第一种是将重复下标的值存在链表中；第二种则是只适用于哈希表中还有空位的情况：将冲突的值依次乡下找一个空位存放。

# 242有效的字母异位词
本题的暴力解法无需讨论。哈希表法的思路其实也很简单，但我最开始没有太理解哈希表的定义，因此没有将字符化为数组下标，而是直接当作了键名。这就导致了在最后无法对数组进行遍历。利用unicode字符的相对值（以小写a为基准），即可创建一个包含所有字符的数组来统计字符出现的次数了。先对s字符串统计，出现的字符值加一，再对t字符串统计，让对应的数值减一。这样如果数组中最后有不为零的值，即代表s和t不是字母异位词。在写判断条件时，可以做提前判断，如果任何键的值在减一之前就等于了0，即代表s和t不是字母异位词。

时间复杂度 O(n)
空间复杂度 O(1)

# 349两个数组的交集
这题用集合实现的话非常之简单，用filter()即可处理。如果没有限制值的大小的话，更应该避免使用数组来存放，因为这样会导致极大的空间浪费。当然，本题限制了大小，因此可以考虑用数组来实现，因为Set()在诸如C++等语言中还要进行转码操作，会花费额外的时间。

# 202快乐数
这道题看似数学题，其实可以通过集合判断规避。首先，将数字按位数拆解的思路是循环取模，每次循环把数字除以十，相当于每次循环取一位数字。我最开始用的是转字符串split再转回数字，其实也是可以的。

对于快乐数来说，某些输入会造成无限循环。然而，无限循环就意味着某次加和会和以前的某次相等，否则就不叫无限循环而是无线不循环了。因此，可以利用集合判断，当某次加和在集合中出现过时，意味着无限循环已经开始，应当返回false。

# 1两数之和
思路是用map存储已经读取过的值。循环遍历数组，如果map中没有值与当前值的和为target，则将当前值存入map并检测下一个值。本题中即不能用数组，因为数值离散性过强，也不能用集合，因为集合中不能储存额外信息（需要得到符合要求的值得下标），因此用map正合适。需要注意的是js中map的get如果得不到对应值会返回undefined，因此判断时需要判断!=undefined。