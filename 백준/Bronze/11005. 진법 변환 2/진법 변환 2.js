let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split(' ');

const [N, B] = input.map(Number);
let answer = '';
let newNum = N;

while (newNum >= B) {
    const next = newNum % B;
    if (next >= 10) {
        answer = String.fromCharCode(next - 10 + 65) + answer;
    } else {
        answer = next + answer;
    }
    newNum = Math.floor(newNum / B);
}

if (newNum >= 10) {
    answer = String.fromCharCode(newNum - 10 + 65) + answer;
} else {
    answer = newNum + answer;
}

console.log(answer);