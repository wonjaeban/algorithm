let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString();

const factorial = (num) => {
    let count = 0;
    while (num >= 5) {
        count += parseInt(num / 5);
        num /= 5;
    }
    return count;
}



console.log(factorial(Number(input)));