let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString();

const factorial = (num) => {
    if (num === 0) return 1
    return num * factorial(num - 1);
}

console.log(factorial(Number(input)));