let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString();
let number = Number(input);

let answer = '';
let index = 2;


while (index * index <= number) {
    if (number % index === 0) {
        answer = answer + index + '\n';
        number /= index;
    } else {
        index++;
    }
}

if (number > 1) {
    answer = answer + number;

}

console.log(answer);