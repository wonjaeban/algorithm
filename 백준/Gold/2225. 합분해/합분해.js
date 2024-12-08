let fs = require('fs');
let inputs = fs.readFileSync('/dev/stdin').toString().split(' ');
const [N, K] = inputs.map(Number);

const dp = Array.from({length: N + 1}, () => Array.from({length: K + 1}, () => BigInt(0)));

for (let j = 0; j <= K; j++) {
    dp[0][j] = BigInt(1);
}

for (let i = 0; i <= N; i++) {
    dp[i][1] = BigInt(1);
}


for (let i = 1; i <= N; i++) {
    for (let j = 1; j <= K; j++) {
        dp[i][j] = (dp[i - 1][j] + dp[i][j - 1]) % BigInt(1000000000);
    }
}

console.log(dp[N][K].toString());