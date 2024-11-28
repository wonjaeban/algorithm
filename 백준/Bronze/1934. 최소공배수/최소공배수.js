let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
const T = Number(input[0]);

const gcd = (a, b) => a % b === 0 ? b : gcd(b, a % b);

for (let i = 1; i <= T; i++) {
    const [a, b] = input[i].split(' ');
    console.log(Number(a) * Number(b) / gcd(Number(a), Number(b)));
}
