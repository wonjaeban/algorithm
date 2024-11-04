function solution(n, edge) {
    const graph = Array.from({length: n + 1}, () => []);
    for (const vertex of edge) {
        graph[vertex[0]].push(vertex[1]);
        graph[vertex[1]].push(vertex[0]);
    }
    const queue = [1];
    const visited = [1];
    const counts = Array(n + 1).fill(0);
    counts[1] = 1;
    
    function BFS() {
        while (queue.length > 0) {
            const cur = queue.shift();
            for (const next of graph[cur]) {
                if (!visited.includes(next)) {
                    counts[next] = counts[cur] + 1;
                    queue.push(next);
                    visited.push(next);
                }
            }
        }
    }
    BFS();
    const max = Math.max(...counts);
    let answer = 0;
    for (const count of counts) {
        if (count === max) {
            answer += 1;
        }
    }
    return answer;
}