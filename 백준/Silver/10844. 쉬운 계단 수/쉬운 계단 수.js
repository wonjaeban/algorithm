let fs = require('fs');
let inputs = fs.readFileSync('/dev/stdin').toString().trim();

const N = Number(inputs);

// 2차원 배열 생성 (answer[n][digit] = n자리 계단 수 중 마지막 숫자가 digit인 경우의 수)
const answer = Array.from({ length: N + 1 }, () => Array(10).fill(0));

// 초기값 설정: n = 1일 때, 1부터 9까지는 계단 수로 인정됨
answer[1] = [0, 1, 1, 1, 1, 1, 1, 1, 1, 1];

// DP 점화식
for (let i = 2; i <= N; i++) {
    for (let j = 0; j <= 9; j++) {
        if (j === 0) {
            answer[i][j] = answer[i - 1][1] % 1000000000;
        } else if (j === 9) {
            answer[i][j] = answer[i - 1][8] % 1000000000;
        } else {
            answer[i][j] = (answer[i - 1][j - 1] + answer[i - 1][j + 1]) % 1000000000;
        }
    }
}

// 최종 결과 계산 (마지막 줄의 합을 구함)
let sumOfAnswer = answer[N].reduce((sum, each) => (sum + each) % 1000000000, 0);
console.log(sumOfAnswer);
