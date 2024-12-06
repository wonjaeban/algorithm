let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString();

const target = Number(input);

const dp = [0, 1, 3];

if (target <= 2) {
    console.log(dp[target]);
    return;
}

for (let i = 3; i <= target; i++) {
    dp[i] = (dp[i - 1] + (dp[i - 2] * 2)) % 10007
}

console.log(dp[target]);