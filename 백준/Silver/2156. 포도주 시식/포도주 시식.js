let fs = require('fs');
let inputs = fs.readFileSync('/dev/stdin').toString().split('\n');
const numbers = inputs.map(Number);
const n = numbers[0];

const dp = Array.from({length: n}, () => Array.from({length: 3}, () => 0));

dp[0][1] = numbers[1];
if(numbers[0] > 1) {
    dp[1][1] = numbers[2];
    dp[1][2] = dp[0][1] + numbers[2];
}

for (let i = 2; i < n; i++) {
    dp[i][0] = Math.max(...dp[i - 1]);
    dp[i][1] = Math.max(...dp[i - 2]) + numbers[i + 1];
    dp[i][2] = dp[i - 1][1] + numbers[i + 1];
}

console.log(Math.max(...dp[n - 1]));