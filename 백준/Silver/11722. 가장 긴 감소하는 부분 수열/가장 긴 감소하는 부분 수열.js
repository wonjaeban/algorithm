let fs = require('fs');
let inputs = fs.readFileSync('/dev/stdin').toString().split('\n');

const N = Number(inputs[0]);
const numbers = inputs[1].split(' ').map(Number);
const dp = [1];

for (let i = 1; i < N; i++) {
    let maxLength = 0;
    for (let j = i - 1; j >= 0; j--) {
        if (numbers[j] > numbers[i] && maxLength < dp[j]) {
            maxLength = dp[j]
        }
    }
    maxLength === 0 ? dp.push(1) : dp.push(maxLength + 1);
}

console.log(Math.max(...dp));