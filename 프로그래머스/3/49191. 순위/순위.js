function solution(n, results) {
    const graph = Array.from({length: n + 1}, () => Array(n + 1).fill(0));
    
    for (const result of results) {
        graph[result[0]][result[1]] = 1;
        graph[result[1]][result[0]] = -1;
    }
    
    for (let j = 1; j < n + 1; j++) {
        for (let i = 1; i < n + 1; i++) {
            for (let k = 1; k < n + 1; k++) {
                if (i === j || j === k) {
                    continue;
                }
                if (graph[i][j] === 1 && graph[j][k] === 1) {
                    graph[i][k] = 1;
                } else if (graph[i][j] === -1 && graph[j][k] === -1) {
                    graph[i][k] = -1;
                }
            }   
        }
    }
    let answer = 0;
    for (let i = 1; i < n + 1; i++) {
        const result = graph[i];
        let count = 0;
        for (const element of result) {
            if (element === 0) {
                count += 1;
            }
        }
        if (count === 2) {
            answer += 1;
        }
    }
    
    return answer;
}