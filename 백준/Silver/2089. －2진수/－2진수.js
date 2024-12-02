let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim();

let answer = '';
let share = parseInt(input);


while (share !== 1 && share !== 0) {
    answer  = share - (Math.ceil(share / -2) * -2) + answer;
    share = Math.ceil(share / -2);
}

answer = share + answer;

console.log(answer);