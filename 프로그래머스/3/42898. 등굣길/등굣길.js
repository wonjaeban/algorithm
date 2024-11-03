function solution(m, n, puddles) {
    const graph = Array.from({length: n}, () => Array(m).fill(-1));
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (i === 0 || j === 0) {
                graph[i][j] = 1
            }
        }
    }
    for (let puddle of puddles) {
        const x = puddle[0] - 1;
        const y = puddle[1] - 1;
        graph[y][x] = 0;

        // 첫 번째 행에 웅덩이가 있는 경우 그 이후 경로 차단
        if (y === 0) {
            for (let j = x; j < m; j++) {
                graph[0][j] = 0;
            }
        }

        // 첫 번째 열에 웅덩이가 있는 경우 그 이후 경로 차단
        if (x === 0) {
            for (let i = y; i < n; i++) {
                graph[i][0] = 0;
            }
        }
    }
    
    for (let i = 1; i < n; i++) {
        for (let j = 1; j < m; j++) {
            if (graph[i][j] === 0) {
                continue;
            }
            graph[i][j] = graph[i - 1][j] + graph[i][j - 1];
            
            graph[i][j] %= 1000000007;
        }
    }
    return graph[n - 1][m - 1];
}