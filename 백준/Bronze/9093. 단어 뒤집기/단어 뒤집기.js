
let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

const testCount = Number(input[0]);

for (let j = 1; j <= testCount; j++) {
    const oneLine = input[j].split(' ');
    let answer = '';
    for(const word of oneLine) {
        for (let i = word.length - 1; i >= 0; i--) {
            answer += word[i];
        }
        answer += ' '
    }
    console.log(answer);
}