let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim();

let answer = '';

for (let i = input.length - 1; i >= 0; i--) {
    if(i === 0) {
        answer = parseInt(input[i], 8).toString(2) + answer;
    } else {
        answer =  parseInt(input[i], 8).toString(2).padStart(3, '0') + answer;
    }
}

console.log(answer);