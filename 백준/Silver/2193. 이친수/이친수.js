let fs = require('fs');
let inputs = fs.readFileSync('/dev/stdin').toString().trim();
const target = Number(inputs);

// DP 배열 생성
const dp = Array.from({ length: target + 1 }, () => [BigInt(0), BigInt(0)]);

// 초기값 설정
dp[1] = [BigInt(0), BigInt(1)]; // 1자리 이친수는 "1" 하나뿐
if (target >= 2) dp[2] = [BigInt(1), BigInt(0)]; // 2자리 이친수는 "10" 하나뿐

// 점화식 적용
for (let i = 3; i <= target; i++) {
    dp[i][0] = dp[i - 1][0] + dp[i - 1][1]; // 끝이 0으로 끝나는 경우
    dp[i][1] = dp[i - 1][0]; // 끝이 1로 끝나는 경우
}

// 최종 출력
console.log((dp[target][0] + dp[target][1]).toString()); // 이미 BigInt로 계산되어 있으므로 그대로 출력
