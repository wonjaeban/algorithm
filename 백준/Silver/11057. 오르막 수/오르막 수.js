let fs = require('fs');
let inputs = fs.readFileSync('/dev/stdin').toString().trim();
const N = Number(inputs);

const dp = Array.from({length: N}, () => Array.from({length: 10}, () => 0));

for (let i = 0; i < 10; i++) {
    dp[0][i] = 1;
}

for (let i = 1; i < N; i++) {
    for (let j = 0; j < 10; j++) {
        for (let k = 0; k <= j; k++) {
            dp[i][j] += (dp[i - 1][k] % 10007);
        }
    }
}

let sum = 0;
for (const ele of dp[N - 1]) {
    sum += ele;
}

console.log(sum % 10007);