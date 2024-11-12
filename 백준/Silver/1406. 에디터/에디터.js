let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

const inputs = input[0].split('');
const count = Number(input[1]);
const leftStack = [...inputs];
const rightStack = [];


for (let i = 2; i <= count + 1; i++) {
    const oneLine = input[i].split(' ');
    if (oneLine[0] === 'L') {
        if (leftStack.length === 0) continue;
        rightStack.push(leftStack.pop());
    } else if (oneLine[0] === 'D') {
        if (rightStack.length === 0) continue;
        leftStack.push(rightStack.pop());
    } else if (oneLine[0] === 'B') {
        leftStack.pop();
    } else if (oneLine[0] === 'P') {
        leftStack.push(oneLine[1]);
    }
}


console.log([...leftStack, ...rightStack.reverse()].join(''));