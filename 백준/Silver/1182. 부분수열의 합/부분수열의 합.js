const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const [N, S] = input[0].split(' ').map(Number);
const allNumbers = input[1].split(' ').map(Number);

let answer = 0;

const sumOrNot = (idx, sum) => {
    if (idx === N) {
        if (sum === S) {
            answer += 1;
        }
        return;
    }
    sumOrNot(idx + 1, sum + allNumbers[idx]);
    sumOrNot(idx + 1, sum);
}

sumOrNot(0, 0);
if(S === 0) answer--;

console.log(answer);