let fs = require('fs');
let inputs = fs.readFileSync('/dev/stdin').toString().split('\n');
const T = Number(inputs[0]);

let answer = '';

for (let i = 1; i <= T; i++) {
    const n = Number(inputs[i * 3 - 2]);
    const dp = Array.from({length: n}, () => Array.from({length: 2}, () => 0));

    const numbers1 = inputs[i * 3 - 1].split(' ').map(Number);
    const numbers2 = inputs[i * 3].split(' ').map(Number);
    dp[0][0] = numbers1[0];
    dp[0][1] = numbers2[0];
    if (n > 1) {
        dp[1][0] = dp[0][1] + numbers1[1];
        dp[1][1] = dp[0][0] + numbers2[1];
    }
    for (let j = 2; j < n; j++) {
        dp[j][0] = Math.max(dp[j - 1][1], dp[j - 2][1]) + numbers1[j];
        dp[j][1] = Math.max(dp[j - 1][0], dp[j - 2][0]) + numbers2[j];
    } 
    answer = answer + Math.max(...dp[n - 1]) + '\n'
}

console.log(answer.trim());