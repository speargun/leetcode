function testWeightBagProblem(weight, value, size) {
    const len = weight.length, dp = Array(size + 1).fill(0);
    for (let i = 1; i < len; i++) {
        for (let j = size; j >= weight[i - 1]; j--) {
            dp[j] = Math.max(dp[j], dp[j - weight[i - 1]] + value[i - 1]);
        }
    }
    return dp[size];
}