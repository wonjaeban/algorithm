const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split('\n');

const gcd = (a, b) =>  a % b === 0 ?  b : gcd(b, a % b);

const answer = [];

const count = Number(input[0]);

for (let i = 1; i <= count; i++) {
    const lines = input[i].split(' ').filter((each, i) => i !== 0).map((each) => Number(each)).sort((a, b) => b - a);
    let sum = 0;
    for (let i = 0; i < lines.length - 1; i++) {
        for (let j = i + 1; j < lines.length; j++) {
            const temp = gcd(lines[i], lines[j]);
            sum += temp;
        }
    }
    answer.push(sum);
}

for (const ans of answer) {
    console.log(ans);
}
