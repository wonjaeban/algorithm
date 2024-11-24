let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

const count = Number(input[0]);
const numbers = new Map();
const stack = [];

// 변수 초기화
for (let i = 0; i < count; i++) {
    numbers.set(String.fromCharCode(65 + i), Number(input[i + 2]));
}

// 후위 표기식 처리
for (const element of input[1]) {
    if (element.charCodeAt(0) >= 65 && element.charCodeAt(0) <= 90) {
        // A~Z이면 숫자로 변환 후 스택에 추가
        stack.push(numbers.get(element));
    } else {
        // 연산자 처리
        const recent = stack.pop();
        const past = stack.pop();
        if (element === '+') {
            stack.push(past + recent);
        } else if (element === '-') {
            stack.push(past - recent);
        } else if (element === '*') {
            stack.push(past * recent);
        } else if (element === '/') {
            stack.push(past / recent);
        }
    }
}

// 결과 출력
console.log(stack.pop().toFixed(2));
