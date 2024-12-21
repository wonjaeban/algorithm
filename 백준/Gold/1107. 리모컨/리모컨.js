let fs = require('fs');
let inputs = fs.readFileSync('/dev/stdin').toString().split('\n');

const N = Number(inputs[0]); // 목표 숫자
const disable = inputs[1] !== '0' ? inputs[2].split(' ').map(Number) : [];
const buttons = Array.from({ length: 10 }, (_, i) => i).filter(n => !disable.includes(n));

// 초기 답: 현재 채널(100)에서 +, -로 이동하는 경우
let answer = Math.abs(N - 100);

function getPressCount(target) {
    const targetStr = target.toString();
    for (let i = 0; i < targetStr.length; i++) {
        if (!buttons.includes(Number(targetStr[i]))) return Infinity;
    }
    return targetStr.length;
}

// 목표 채널에서 +/-로 탐색
for (let i = 0; i <= 1000000; i++) {
    const pressCount = getPressCount(i); // i를 버튼으로 입력할 수 있는 횟수
    if (pressCount !== Infinity) {
        const totalPress = pressCount + Math.abs(N - i); // 버튼 입력 횟수 + 이동 횟수
        answer = Math.min(answer, totalPress);
    }
}

console.log(answer);
