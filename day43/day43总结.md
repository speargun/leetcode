# 1049最后一块石头的重量II
dp[j]=max(dp[j],dp[j-stones[i]]+stones[i]);


# 494目标和
left组合-right组合=target;left+right=sum.因此，推导出left=(target+sum)/2。

用一维数组的话，dp[j]表示填满j这么大容积的包有多少种方法。

如何推导：凑成dp[j]有dp[j-nums[i]]种方法。因此，dp[j]+=dp[j-nums[i]]。初始化时，dp[0]应该是1，其他情况初始化应该是0。

# 474一和零
本题其实还是排列组合问题，但因为参数多了一个，所以要多一个考虑的维度。

dp[i][j]就是最多有i个0和j个1的最大子集大小。

dp[i][j]=max(dp[i][j],dp[i-zeroNum][j-oneNum]+1)。