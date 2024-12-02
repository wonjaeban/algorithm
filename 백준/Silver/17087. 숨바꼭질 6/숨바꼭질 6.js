const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split('\n');

const gcd = (a, b) => {return a % b === 0 ? b : gcd(b, a % b)};

const input0 = input[0].split(' ');
const [count, position] = input0.map((each) => Number(each));
const input1 = input[1].split(' ');
const brothers = input1.map((each) => Number(each));
const distances = [];


for (let i = 0; i < count; i++) {
   distances.push(Math.abs(brothers[i] - position));
}

let answer = distances[0];

for (let i = 1; i < distances.length; i++) {
    answer = gcd(answer, distances[i]);
}

console.log(answer);
