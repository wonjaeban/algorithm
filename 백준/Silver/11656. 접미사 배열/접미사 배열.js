let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim();

const answer = [input];

for (let i = 1; i < input.length; i++) {
    answer.push(input.slice(i));
}

answer.sort();

console.log(answer.join('\n'));