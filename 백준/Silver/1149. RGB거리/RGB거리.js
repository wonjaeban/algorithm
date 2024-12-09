let fs = require('fs');
let inputs = fs.readFileSync('/dev/stdin').toString().split('\n');

const N = Number(inputs[0]);
const firstLine = inputs[1].split(' ').map(Number);

const dp = Array.from({length : N}, () => [0, 0, 0]);
dp[0][0] = firstLine[0];
dp[0][1] = firstLine[1];
dp[0][2] = firstLine[2];

for (let i = 1; i < N; i++) {
    const newLine = inputs[i + 1].split(' ').map(Number);
    for (let j = 0; j < 3; j++) {
        dp[i][j] = newLine[j] + Math.min(...dp[i - 1].filter((_, i) => i !== j));
    }
}

console.log(Math.min(...dp[N - 1]));