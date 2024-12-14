let fs = require('fs');
let inputs = fs.readFileSync('/dev/stdin').toString().split('\n');
const n = Number(inputs[0]);
const numbers = inputs[1].split(' ').map(Number);
const increase = [1];
const decrease = Array.from({length : n}, () => 0);
decrease[n - 1] = 1;

for (let i = n - 2; i >= 0; i--) {
    let max = 0;
    for (let j = i + 1; j < n; j++) {
        if (numbers[i] > numbers[j] && max < decrease[j]) {
            max = decrease[j]
        }
    }
    decrease[i] = max === 0 ? 1 : max + 1;
}

for (let i = 1; i < n; i++) {
    let max = 0;
    for (let j = i - 1; j >= 0; j--) {
        if (numbers[i] > numbers[j] && max < increase[j]) {
            max = increase[j]
        }
    }
    max === 0 ? increase.push(1) : increase.push(max + 1);
}

let answer = 0;
for (let i = 0; i < n; i++) {
    const newVal = increase[i] + decrease[i];
    if (answer < newVal) {
        answer = newVal;
    }
}

console.log(answer - 1);