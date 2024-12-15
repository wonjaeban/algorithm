let fs = require('fs');
let inputs = fs.readFileSync('/dev/stdin').toString().trim();

const dp = Array.from({length: Number(inputs) + 1}, () => 0);
dp[1] = 3;

for (let i = 3; i < Number(inputs); i += 2) {
    let sum = dp[i - 2] * dp[1];
    for (let j = i - 4; j >= 1; j -= 2) {
        sum += (dp[j] * 2);
    }
    sum += 2;
    dp[i] = sum;
}

console.log(dp[Number(inputs) - 1]);