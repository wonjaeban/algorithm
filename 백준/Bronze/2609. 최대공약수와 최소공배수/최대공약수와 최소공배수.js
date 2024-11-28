let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split(' ');
const [input1, input2] = input.map((each) => Number(each));

const gcd = (a, b) =>  a % b === 0 ?  b : gcd(b, a%b);
const lcm = input1 * input2 / gcd(input1, input2);

const answer = [gcd(input1, input2), lcm];


for (const each of answer) {
    console.log(each);
}