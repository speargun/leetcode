# 235二叉搜索树的最近公共祖先
二叉搜索树的最近公共祖先比二叉树更好求，因为p,q一定存在，因此从上至下找到的第一个介于[p,q]间的节点就是最近公共祖先。如果当前值大于p、q，则找左子树，否则找右子树，直到找到符合的或者为空。

# 701二叉搜索树中的插入操作
插入操作相对来说简单，因为也没有要求平衡性，不用改变树的结构，只用顺着找到合理的位置插入值即可。递归时，用root.left或root.right接住下层返回的值，这样就能将新值插入到原先的节点下面。

# 450删除二叉搜索树中的节点
删除节点则是一定要考虑重构二叉树的了。其中有很多复杂的情况需要考虑，因为二叉搜索树的构成条件多而复杂，因此为了在删除完节点后也能保持其特性，就必须对每种情况都做不同处理。

一共有5种需要考虑的情况：第一种是没找到需要删除的节点，遍历到空结点直接返回了；第二种是左右孩子都为空，直接删除节点，返回null为根节点；第三种是左节点为空右节点不为空，删除节点，右节点补位，返回右节点为根节点；第四种是右空左不空，返回左节点；第五种最为复杂：左右孩子都不为空，则将删除节点的左子树头结点放到删除节点右子树最左节点的左节点上，返回删除节点右节点为新的根节点。