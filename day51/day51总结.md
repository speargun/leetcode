# 309最佳买卖股票时机含冷冻期
本题要单独考虑今天卖出股票这种状态，因为有冷冻期。
要考虑的状态很多：
达到买入股票状态（状态一）即：dp[i][0]，有两个具体操作：

操作一：前一天就是持有股票状态（状态一），dp[i][0] = dp[i - 1][0]
操作二：今天买入了，有两种情况
前一天是冷冻期（状态四），dp[i - 1][3] - prices[i]
前一天是保持卖出股票的状态（状态二），dp[i - 1][1] - prices[i]
那么dp[i][0] = max(dp[i - 1][0], dp[i - 1][3] - prices[i], dp[i - 1][1] - prices[i]);

达到保持卖出股票状态（状态二）即：dp[i][1]，有两个具体操作：

操作一：前一天就是状态二
操作二：前一天是冷冻期（状态四）
dp[i][1] = max(dp[i - 1][1], dp[i - 1][3]);

达到今天就卖出股票状态（状态三），即：dp[i][2] ，只有一个操作：

昨天一定是持有股票状态（状态一），今天卖出

即：dp[i][2] = dp[i - 1][0] + prices[i];

达到冷冻期状态（状态四），即：dp[i][3]，只有一个操作：

昨天卖出了股票（状态三）

dp[i][3] = dp[i - 1][2];

# 714买卖股票的最佳时机含手续费
本题的区别就在于卖出时有手续费。