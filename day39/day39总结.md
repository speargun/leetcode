# 62不同路径
1. 确定dp数组以及下标的含义：dp[i][j]表示从(0,0)到(i,j)的不同路径数。
2. 确定递推公式：因为每一步只能向右或向下，因此dp[i][j]从dp[i-1][j]和dp[i][j-1]加和
3. dp数组如何初始化：dp[0][j]和dp[i][0]都是1，因为能走到这些地方的方法只有一种。
4. 确定遍历顺序：从前到后
5. 举例推导dp数组 略

# 63不同路径II
1. 确定dp数组以及下标的含义：dp[i][j]表示从(0,0)到(i,j)的不同路径数。
2. 确定递推公式：因为每一步只能向右或向下，因此dp[i][j]从dp[i-1][j]和dp[i][j-1]加和；但如果(i,j)有障碍物，则要跳过该点。
3. dp数组如何初始化：dp[0][j]和dp[i][0]都是1，因为能走到这些地方的方法只有一种。但需要注意的是，如果路径上有障碍，则障碍后的点全部无法到达。
4. 确定遍历顺序：从前到后
5. 举例推导dp数组 略