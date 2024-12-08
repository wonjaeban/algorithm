let fs = require('fs');
let inputs = fs.readFileSync('/dev/stdin').toString().split('\n');
const numbers = inputs[1].split(' ').map(Number);
const cnt = Number(inputs[0]);
const dp = [[numbers[0]]];

for (let i = 1; i < cnt; i++) {
    let maxLength = -1;
    let maxIndex = -1;
    for (let j = i - 1; j >= 0; j--) {
        if (numbers[i] > numbers[j]) {
            if (maxLength < dp[j].length) {
                maxLength = dp[j].length;
                maxIndex = j;
            }
        }
    }
    if (maxIndex === -1) {
        dp.push([numbers[i]]);
    } else {
        dp.push([...dp[maxIndex], numbers[i]]);
    }
}

let maxLength = -1;
let maxIndex;

for (let i = 0; i < dp.length; i++) {
    if (maxLength < dp[i].length) {
        maxLength = dp[i].length
        maxIndex = i;
    }
}

let answer = '';
answer = answer + maxLength + '\n' + dp[maxIndex].join(' ').trim();

console.log(answer);