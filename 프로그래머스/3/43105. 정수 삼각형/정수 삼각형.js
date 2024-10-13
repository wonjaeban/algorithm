function solution(triangle) {
    const dp = [[...triangle[0]]];
    for (let i = 1; i < triangle.length; i++) {
        const temp = [];
        for (let j = 0; j <= i; j++) {
            if (j === 0) {
                temp.push(dp[i - 1][0] + triangle[i][0])
            } else if (j === i) {
                temp.push(dp[i - 1][j - 1] + triangle[i][j])
            }
            else {
                temp.push(Math.max(dp[i - 1][j - 1] + triangle[i][j], dp[i - 1][j] + triangle[i][j]))
            }
        }
        dp.push(temp);
    }
    return Math.max(...dp.pop());
}