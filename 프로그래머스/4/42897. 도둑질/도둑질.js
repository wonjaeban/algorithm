function solution(money) {
    const dp = [[money[0], money[0]],[0, money[1]]];
    for (let i = 2; i < money.length; i++) {
        if (i === money.length - 1) {
            dp[0][i] = dp[0][i - 1];
            dp[1][i] = Math.max((dp[1][i - 2] || 0) + money[i], dp[1][i - 1]);
        }
        dp[0][i] = Math.max((dp[0][i - 2] || 0) + money[i], dp[0][i - 1]);
        dp[1][i] = Math.max((dp[1][i - 2] || 0) + money[i], dp[1][i - 1]);
    }
    return Math.max(dp[0][money.length - 2], dp[1][money.length - 1]);
}