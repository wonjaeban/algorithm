let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

const maxNum = Number(input[0]);

const stack = [];
const answer = [];
let num = 1;


for (let i = 1; i <= maxNum; i++) {
    while(Number(input[i]) >= num) {
        stack.push(num);
        answer.push('+');
        num++;
    }
    if (stack[stack.length - 1] === Number(input[i])) {
        stack.pop();
        answer.push('-');
    } else {
        console.log('NO');
        return;
    }
}

for (const each of answer) {
    console.log(each);
}