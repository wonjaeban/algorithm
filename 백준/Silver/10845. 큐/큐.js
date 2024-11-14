let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

const count = Number(input[0]);
const queue = [];

for (let i = 1; i <= count; i++) {
    const order = input[i].split(' ');
    if(order[0] === 'push') {
        queue.push(order[1]);
    } else if (order[0] === 'pop') {
        queue.length === 0 ? console.log(-1) : console.log(queue.shift());
    } else if (order[0] === 'size') {
        console.log(queue.length);
    } else if (order[0] === 'empty') {
        queue.length === 0 ? console.log(1) : console.log(0);
    } else if (order[0] === 'front') {
        queue.length === 0 ? console.log(-1) : console.log(queue[0]);
    } else {
        queue.length === 0 ? console.log(-1) : console.log(queue[queue.length - 1]);
    }
}