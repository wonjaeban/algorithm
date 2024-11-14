let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split(' ');

const N = Number(input[0]);
const K = Number(input[1]);

const queue = Array.from({length: N}, (_, i) => i + 1);
const answer = [];
let count = 0;

while (queue.length > 0) {
    const next = queue.shift();
    count++;
    if (count === K) {
        count = 0;
        answer.push(next);
    } else {
        queue.push(next);
    }
}

let stringAnswer = '';

while (answer.length > 0) {
    const next = answer.shift();
    if (stringAnswer === '') {
        stringAnswer += `<${next}`;
    } else {
        stringAnswer += `, ${next}`;
    } 
    if (answer.length === 0) {
        stringAnswer += `>`
    }
}



console.log(stringAnswer);