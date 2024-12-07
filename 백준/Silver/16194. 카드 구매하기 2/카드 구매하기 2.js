let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

const N = Number(input[0]);
const numbers = [0, ...input[1].split(' ').map(Number)];
const answer = [0];

for (let i = 1; i <= N; i++) {
    if (i === 1) {
        answer.push(numbers[i]);
    } else if (i === 2) {
        const minNum = Math.min(answer[i - 1] * 2 , numbers[i]);
        answer.push(minNum);
    } else {
        const candidates = [];
        for (let j = i - 1; j >= i - j; j--) {
            candidates.push(answer[j] + answer[i - j]);
        }
        candidates.push(numbers[i]);
        answer.push(Math.min(...candidates));
    }
}
console.log(answer[N]);