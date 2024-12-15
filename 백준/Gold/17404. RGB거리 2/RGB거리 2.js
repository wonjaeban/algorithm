let fs = require('fs');
let inputs = fs.readFileSync('/dev/stdin').toString().split('\n');
const N = Number(inputs[0]);

const answer = [];

for (let j = 0; j < 3; j++) {
    const dp = Array.from({length: N}, () => Array.from({length: 3}, () => 0));
    dp[0][0] = Infinity;
    dp[0][1] = Infinity;
    dp[0][2] = Infinity;
    for (let i = 0; i < N; i++) {
        const line = inputs[i + 1].split(' ').map(Number);
        if (i === 0) {
            dp[i][j] = line[j];
        } else {
            dp[i][0] = line[0] + Math.min(dp[i - 1][1], dp[i - 1][2]);
            dp[i][1] = line[1] + Math.min(dp[i - 1][0], dp[i - 1][2]);
            dp[i][2] = line[2] + Math.min(dp[i - 1][0], dp[i - 1][1]);
        }
    }
    answer.push(Math.min(...dp[N - 1].filter((_, i) => i !== j)));
}
console.log(Math.min(...answer));

