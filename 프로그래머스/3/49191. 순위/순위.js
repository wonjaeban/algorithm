function solution(n, results) {
    const graph = Array.from({length: n + 1}, () => Array(n + 1).fill(0));
    for (result of results) {
        graph[result[0]][result[1]] = 1;
        graph[result[1]][result[0]] = -1;
    }
    for (let mid = 1; mid <= n; mid++) {
        for (let start = 1; start <= n; start++) {
            for (let end = 1; end <= n; end++) {
                if(graph[start][mid] === 1 && graph[mid][end] === 1) {
                    graph[start][end] = 1
                } else if(graph[start][mid] === -1 && graph[mid][end] === -1) {
                    graph[start][end] = -1;
                }
            }
        }
    }
    
    let answer = 0;
    
    for (let i = 1; i <= n; i++) {
        let isDecided = true;
        for (let j = 1; j <= n; j++) {
            if (i !== j && graph[i][j] === 0) {
                isDecided = false;
                break;
            }
        }
        if (isDecided) {
            answer += 1;
        }
    }
    //
    
    
    return answer;
    
}