let fs = require('fs');
let inputs = fs.readFileSync('/dev/stdin').toString().split('\n');
const n = Number(inputs[0]);
const dp = [[Number(inputs[1])]];

for (let i = 2; i <= n; i++) {
    const newLine = [];
    const numbers = inputs[i].split(' ').map(Number);
    for (let j = 0; j < numbers.length; j++) {
        if (j === 0) {
            newLine.push(dp[dp.length - 1][j] + numbers[j]);
        } else if (j === numbers.length - 1) {
            newLine.push(dp[dp.length - 1][j - 1] + numbers[j]);
        } else {
            newLine.push(Math.max(dp[dp.length - 1][j - 1], dp[dp.length - 1][j]) + numbers[j]);
        }
    }
    dp.push(newLine);
}
console.log(Math.max(...dp[dp.length - 1]));