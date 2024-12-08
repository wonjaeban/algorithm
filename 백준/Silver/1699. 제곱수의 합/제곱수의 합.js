let fs = require('fs');
let inputs = fs.readFileSync('/dev/stdin').toString().trim();
const number = Number(inputs);

const dp = [0];

for (let i = 1; i <= number; i++) {
    if (Math.sqrt(i) % 1 === 0) {
        dp[i] = 1;
    } else {
        let min = Infinity;
        for (let j = 1; j <= i / 2; j++) {
            if(min > dp[j] + dp[i - j]) {
                min = dp[j] + dp[i - j];
            }
        }
        dp[i] = min;
    }
}

console.log(dp[number]);