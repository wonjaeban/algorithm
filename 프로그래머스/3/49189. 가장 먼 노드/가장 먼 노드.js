function solution(n, edge) {
    const graph = Array.from({length: n + 1}, ()=> []);
    for (ed of edge) {
        graph[ed[0]].push(ed[1]);
        graph[ed[1]].push(ed[0]);
    }
    const visited = [1];
    const queue = [1];
    const counts = Array.from({length: n + 1}, () => 0);
    
    function BFS () {
        while (queue.length > 0) {
            const cur = queue.shift();
            for (next of graph[cur]) {
                if (!visited.includes(next)) {
                    queue.push(next);
                    visited.push(next);
                    counts[next] = counts[cur] + 1;
                }
            }
        }  
    }
    BFS();
    const max = Math.max(...counts);
    let answer = 0;
    for (count of counts) {
        if (count === max) {
            answer += 1;
        }
    }
    return answer;
}