let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

const N = Number(input[0]);
const numbers = input[1].split(' ');

let answer = 0;

const isPrime = (number) => {
    if(number <= 1) return false;
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return false;
        }
    }
    return true;
}

for (let i = 0; i < N; i++) {
    const number = Number(numbers[i]);
    if(isPrime(number)) answer += 1;
}

console.log(answer);