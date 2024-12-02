const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim();

let answer = '';

while (input.length >= 3) {
    answer = parseInt(input.slice(-3), 2).toString(8) + answer;
    input = input.slice(0, input.length - 3);
}

if (input.length > 0) {
    answer = parseInt(input, 2).toString(8) + answer;
}


console.log(answer);