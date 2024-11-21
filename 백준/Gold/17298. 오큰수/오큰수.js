let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');


const count = input[0];
const numbers = input[1].split(' ').map((num) => Number(num));
const answer = Array.from({length : count}, () => -1);
const stack = [];

for (let i = 0; i < numbers.length; i++) {
    while(stack.length > 0 && numbers[stack[stack.length - 1]] < numbers[i]) {
        answer[stack[stack.length - 1]] = numbers[i];
        stack.pop();
    }
    stack.push(i);
}

let answerString = '';

for (let i = 0; i < answer.length; i++) {
    i === 0 ? answerString += answer[i] : answerString += ` ${answer[i]}`  
}

console.log(answerString);