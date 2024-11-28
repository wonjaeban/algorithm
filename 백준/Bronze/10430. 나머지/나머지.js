let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split(' ');
const [A, B, C] = input.map((each)=> Number(each));


const answer = [(A+B)%C, ((A%C) + (B%C))%C, (A*B)%C, ((A%C) * (B%C))%C];


for (const each of answer) {
    console.log(each);
}