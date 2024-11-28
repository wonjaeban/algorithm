let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split(' ');
const [M, N] = input.map((each) => Number(each));

const answer = [];

const isPrime = (number) => {
    if(number === 1) return false;
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) return false;
    }
    return true;
};

for (let i = M; i <= N; i++ ) {
    if(isPrime(i)) console.log(i);
}