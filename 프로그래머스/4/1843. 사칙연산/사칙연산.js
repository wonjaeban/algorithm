function solution(arr) {
    var answer = -1;
    const operandsCount = Math.ceil(arr.length / 2);
    const max_dp = new Array(operandsCount).fill().map(_ => new Array(operandsCount).fill(-Infinity));
    const min_dp = new Array(operandsCount).fill().map(_ => new Array(operandsCount).fill(Infinity));
  
    for(let i = 0; i < operandsCount; i++) {
        max_dp[i][i] = Number(arr[i*2]);
        min_dp[i][i] = Number(arr[i*2]);
    }
    
    // N-1 만큼 반복문을 순회하며 최대값 탐색
    for(let cnt = 1; cnt < operandsCount; cnt++) {
      for(let i = 0; i < operandsCount - cnt; i++) {
        let j = i + cnt;
        for(let k = i; k < j; k++) {
          // 연산자의 위치를 구하는 인덱스 값에 주의
          if(arr[k*2+1] === '+') {
            max_dp[i][j] = Math.max(max_dp[i][j], max_dp[i][k] + max_dp[k+1][j]);
            min_dp[i][j] = Math.min(min_dp[i][j], min_dp[i][k] + min_dp[k+1][j]);
          } else {
            max_dp[i][j] = Math.max(max_dp[i][j], max_dp[i][k] - min_dp[k+1][j]);
            min_dp[i][j] = Math.min(min_dp[i][j], min_dp[i][k] - max_dp[k+1][j]);    
          }
        }
      }
    }

    return max_dp[0][operandsCount-1];
}