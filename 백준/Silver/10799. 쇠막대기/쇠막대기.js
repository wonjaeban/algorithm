let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim();

let answer = 0;
const inputStack = [];

for (let i = 0; i < input.length; i++) {
    if (input[i] === ')' && input[i - 1] === '(') {
        inputStack.pop();
        answer += inputStack.length;
    } else if (input[i] === ')') {
        answer += 1;
        inputStack.pop();
    } else {
        inputStack.push(input[i]);
    }
}

console.log(answer);
