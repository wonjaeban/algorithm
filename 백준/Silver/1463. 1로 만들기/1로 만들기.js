let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString();

const target = Number(input);

const dp = [0, 0, 1, 1];

if(dp[target]) {
    console.log(dp[target]);
    return
}

for (let i = 4; i <= target; i++) {
    const candidate = [dp[i - 1] + 1];
    if (i % 2 === 0) {
        candidate.push(dp[i / 2] + 1)
    } 
    if (i % 3 === 0) {
        candidate.push(dp[i / 3] + 1)
    }
    dp.push(Math.min(...candidate));
}

console.log(dp[target]);