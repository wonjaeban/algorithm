function solution(N, number) {
    if (N === number) return 1;
    const dp = Array.from({ length: 8 }, (_, i) => {
        const set = new Set();
        const value = parseInt(String(N).repeat(i + 1)); // N을 i+1번 반복해서 생성된 값
        set.add(value);
        return set;
    });

    dp[1].add(N * N);
    if (N !== 0) dp[1].add(N / N);
    dp[1].add(N + N);
    dp[1].add(N - N);


    for (let i = 1; i < 8; i++) {
        const temp = new Set(); // 임시로 결과를 저장할 Set

        for (let j = 0; j < i; j++) {
            for (const high of dp[j]) {
                for (const low of dp[i - j - 1]) {
                    temp.add(high + low);
                    temp.add(high - low);
                    temp.add(high * low);
                    if (low !== 0) temp.add(Math.floor(high / low)); // 0으로 나누기 방지
                }
            }
        }

        // 현재 인덱스의 dp에 temp Set의 값들 추가
        temp.forEach((v) => dp[i].add(v));

        // 원하는 숫자를 찾으면 인덱스 + 1 반환
        if (dp[i].has(number)) {
            return i + 1;
        }
    }

    // 원하는 숫자를 찾지 못하면 -1 반환
    return -1;
}