let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString();

let answer = '';

for (let i = 0; i < input.length; i++) {
    if (input[i] >= 'a' && input[i] <= 'z') {
        if (input[i].charCodeAt(0) + 13 > 122) {
            answer += String.fromCharCode(97 + (13 - (122 - input[i].charCodeAt(0) + 1)));
        } else {
            answer += String.fromCharCode(input[i].charCodeAt(0) + 13);
        }
    } else if (input[i] >= 'A' && input[i] <= 'Z') {
        if (input[i].charCodeAt(0) + 13 > 90) {
            answer += String.fromCharCode(65 + (13 - (90 - input[i].charCodeAt(0) + 1)));
        } else {
            answer += String.fromCharCode(input[i].charCodeAt(0) + 13);
        }
    } else {
        answer += input[i];
    }
}

console.log(answer);
