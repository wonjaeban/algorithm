let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim();
const inputStack = [];
let answer = '';
let inTag = false;

function addAnswer() {
    if (inputStack.length === 0) return;
    if (inTag) {
        while (inputStack.length > 0) {
            answer += inputStack.shift();
        }
    } else {
        while (inputStack.length > 0) {
            answer += inputStack.pop();
        }
    }
}

for (let i = 0; i < input.length; i++) {
    const char = input[i];

    if (char === '<') {
        addAnswer(); // 태그 외부의 단어 처리
        inTag = true;
    }

    if (char === '>') {
        inputStack.push(char);
        addAnswer(); // 태그 내부 내용 처리
        inTag = false;
        continue;
    }

    if (char === ' ' && !inTag) {
        addAnswer(); // 단어 끝에서 처리
        answer += ' '; // 공백 추가
        continue;
    }

    inputStack.push(char);
}

addAnswer(); // 마지막 남은 단어 처리

console.log(answer);
