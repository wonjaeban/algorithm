let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim();

let answer = '';
const stack = [];

for (let i = 0; i < input.length; i++) {
    if (input[i] === '(') {
        stack.push('(');
    } else if (input[i] === ')') {
        while (stack.length && stack[stack.length - 1] !== '(') {
            answer += stack.pop();
        }
        stack.pop();
    } else if (input[i] === '*' || input[i] === '/') {
        while (stack.length && (stack[stack.length - 1] === '*' || stack[stack.length - 1] === '/')) {
            answer += stack.pop();
        }
        stack.push(input[i]);
    } else if (input[i] === '+' || input[i] === '-') {
        while (stack.length && stack[stack.length - 1] !== '(') {
            answer += stack.pop();
        }
        stack.push(input[i]);
    } else if(input[i] >= 'A' && input[i] <= 'Z') {
        answer += input[i];
    }
}

while (stack.length) {
    answer += stack.pop();
}

console.log(answer);

