let fs = require('fs');
let inputs = fs.readFileSync('/dev/stdin').toString().trim();
const N = Number(inputs);

// N이 1일 때 예외 처리
if (N === 1) {
    console.log(3); // 1 + 1 + 1 = 3
    return;
}

// DP 테이블 생성
const dp = Array.from({ length: N }, () => [0, 0, 0]);

// 초기값 설정
dp[0][0] = 1; // 0번째 줄에 동물을 배치하지 않음
dp[0][1] = 1; // 0번째 줄에 왼쪽에 동물 배치
dp[0][2] = 1; // 0번째 줄에 오른쪽에 동물 배치

for (let i = 1; i < N; i++) {
    const sum = (dp[i - 1][0] + dp[i - 1][1] + dp[i - 1][2]) % 9901;
    dp[i][0] = sum;
    dp[i][1] = (dp[i - 1][0] + dp[i - 1][2]) % 9901;
    dp[i][2] = (dp[i - 1][0] + dp[i - 1][1]) % 9901;
}

const result = (dp[N - 1][0] + dp[N - 1][1] + dp[N - 1][2]) % 9901;
console.log(result);
