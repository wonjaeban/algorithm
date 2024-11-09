let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

const testCount = Number(input[0]);

for (let i = 1; i <= testCount; i++) {
    const stack = [];
    const oneLine = input[i];
    let answer = 'YES'
    for (const newWord of oneLine) {
        if (newWord === ')') {
            const lastWord = stack.pop();
            if (!lastWord || lastWord === ')') {
                answer = 'NO'
                break;
            }
        } else {
            stack.push('(');
        }
    }
    (stack.length > 0 || answer === 'NO') ? console.log('NO') : console.log('YES');
}