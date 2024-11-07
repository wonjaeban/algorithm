
let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

const count = input[0];
const stack = [];
const answer = [];

for (let i = 1; i <= count; i++) {
    if (input[i].includes('push')) {
        stack.push(input[i].split(' ')[1]);
    } else if (input[i] === 'pop') {
        stack.length === 0 ? answer.push(-1) : answer.push(stack.pop());
    } else if (input[i] === 'size') {
        answer.push(stack.length);
    } else if (input[i] === 'empty') {
        stack.length === 0 ? answer.push(1) : answer.push(0);
    } else if (input[i] === 'top') {
        answer.push(stack[stack.length - 1] ?? -1);
    }
}

for (const ans of answer) {
    console.log(Number(ans));
}
