let fs = require('fs');
let inputs = fs.readFileSync('/dev/stdin').toString().split('\n');
const cnt = Number(inputs[0]);
const numbers = inputs[1].split(' ').map(Number);

const dp = Array.from({length: cnt}, () => 1);


for (let i = 1; i < cnt; i++) {
    let max = -1;
    let index = -1;
    for (let j = i - 1; j >= 0; j--) {
        if(numbers[j] < numbers[i]) {
            if(max < dp[j]) {
                index = j;
                max = dp[j]
            }
        }
    }
    if(max > 0) {
        dp[i] = max + 1;
    }
}

console.log(Math.max(...dp));