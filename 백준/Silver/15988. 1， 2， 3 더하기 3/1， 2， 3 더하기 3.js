let fs = require('fs');
let inputs = fs.readFileSync('/dev/stdin').toString().split('\n');
const numbers = inputs.map(Number);

const T = numbers[0];
const ns = numbers.slice(1);
const maxNum = Math.max(...ns);

const dp = [BigInt(0), BigInt(1), BigInt(2), BigInt(4)];

for (let i = 4; i <= maxNum; i++) {
    dp[i] = (dp[i - 1] + dp[i - 2] + dp[i - 3]) % BigInt(1000000009);
}

let answer = '';

for (let i = 0; i < T; i++) {
    answer = answer + dp[ns[i]].toString() + '\n';
}

console.log(answer.trim());