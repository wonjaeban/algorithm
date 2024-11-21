let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

const count = Number(input[0]);
const numbers = input[1].split(' ').map((num) => Number(num));
const counts = new Map();
const stack = [];
const answers = Array.from({length : count}, () => -1);

for (let i = 0; i < count; i++) {
    if (!counts.get(numbers[i])) {
        counts.set(numbers[i], 1);
    } else {
        counts.set(numbers[i], counts.get(numbers[i]) + 1);
    }
}

for (let i = 0; i < count; i++) {
    while(stack.length > 0 && counts.get(numbers[stack[stack.length - 1]]) < counts.get(numbers[i])) {
        answers[stack[stack.length - 1]] = numbers[i];
        stack.pop();
    }
    stack.push(i);
}

let answerString = '';

for (let i = 0; i < count; i++) {
    i === 0 ? answerString += answers[i] : answerString += ` ${answers[i]}`
}

console.log(answerString);
