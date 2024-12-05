let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

const [A, B] = input[0].split(' ').map(Number);

const m = Number(input[1]);
let square = (m - 1);
const numbers = input[2].split(' ').map(Number);

let number = 0;

for (let i = 0; i < m; i++) {
    number += (numbers[i] * (A ** square));
    square -= 1;
}

let answer = '';

while (number >= B) {
    answer = (number % B) + ' ' + answer;
    number = Math.floor(number / B);
}

if (number) {
    answer = number + ' ' + answer;
}

console.log(answer.trim());