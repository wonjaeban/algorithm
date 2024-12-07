let fs = require('fs');
let inputs = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);
let cases = inputs[0];
let numbers = inputs.slice(1);
let max = Math.max(...numbers);

let MOD = 1000000009;

// 초기값 설정
let arr = [[0,0,0], [1,0,0], [0,1,0], [1,1,1]];

// DP 점화식 적용
for(let i = 4; i <= max; i++){
    arr[i] = [
        (arr[i-1][1] + arr[i-1][2]) % MOD, 
        (arr[i-2][0] + arr[i-2][2]) % MOD, 
        (arr[i-3][0] + arr[i-3][1]) % MOD
    ];
}

// 결과 출력
for(let k = 0; k < cases; k++){
    let num = numbers[k];
    let result = (arr[num][0] + arr[num][1] + arr[num][2]) % MOD;
    console.log(result);
}
