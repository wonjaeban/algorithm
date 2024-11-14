let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

const count = Number(input[0]);
const dequeue = [];

for (let i = 1; i <= count; i++) {
    const order = input[i].split(' ');
    if (order[0] === 'push_front') {
        dequeue.unshift(order[1]);
    } else if (order[0] === 'push_back') {
        dequeue.push(order[1]);
    } else if (order[0] === 'pop_front') {
        dequeue.length === 0 ? console.log(-1) : console.log(dequeue.shift());
    } else if (order[0] === 'pop_back') {
        dequeue.length === 0 ? console.log(-1) : console.log(dequeue.pop());
    } else if (order[0] === 'size') {
        console.log(dequeue.length);
    } else if (order[0] === 'empty') {
        dequeue.length === 0 ? console.log(1) : console.log(0);
    } else if (order[0] === 'front') {
        dequeue.length === 0 ? console.log(-1) : console.log(dequeue[0]);
    } else {
        dequeue.length === 0 ? console.log(-1) : console.log(dequeue[dequeue.length - 1]);
    }
}