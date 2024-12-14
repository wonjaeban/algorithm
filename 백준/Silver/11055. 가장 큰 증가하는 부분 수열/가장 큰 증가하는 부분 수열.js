let fs = require('fs');
let inputs = fs.readFileSync('/dev/stdin').toString().split('\n');

const N = Number(inputs[0]);
const A = inputs[1].split(' ').map(Number);
const dp = [A[0]];

for (let i = 1; i < A.length; i++) {
    let max = 0;
    for (let j = i - 1; j >= 0; j--) {
        if (A[j] < A[i] && max < dp[j]) {
            max = dp[j]
        }
    }
    max !== 0 ? dp.push(max + A[i]) : dp.push(A[i]);
}

console.log(Math.max(...dp));