let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

const inputs = input.map(Number);
const numbers = inputs.slice(1);
const maxNum = Math.max(...numbers);

const dp = [1, 1, 2];
let answer = '';

for (let i = 3; i <= maxNum; i++) {
    dp[i] = dp[i - 1] + dp[i - 2] + dp[i - 3];
}

for (let i = 1; i <= inputs[0]; i++) {
    answer = answer + dp[input[i]]+ '\n';
}

console.log(answer.trim());