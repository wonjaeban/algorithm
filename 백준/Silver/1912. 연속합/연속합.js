let fs = require('fs');
let inputs = fs.readFileSync('/dev/stdin').toString().split('\n');
const n = Number(inputs[0]);
const numbers = inputs[1].split(' ').map(Number);
const dp = [];

for (let i = 0; i < n; i++) {
    if (i === 0) {
        dp.push(numbers[i]);
    } else {
        dp.push(Math.max(dp[i - 1] + numbers[i], numbers[i]));
    }
}

console.log(Math.max(...dp));