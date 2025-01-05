let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const [N, M] = input[0].split(' ').map(Number);

// 인접 리스트로 그래프 표현
const graph = Array.from({ length: N }, () => []);
for (let i = 1; i <= M; i++) {
    const [x, y] = input[i].split(' ').map(Number);
    graph[x].push(y);
    graph[y].push(x);
}

let answer = false;
const visited = Array(N).fill(false);

// DFS 함수
const dfs = (cur, depth) => {
    if (answer) return;
    if (depth === 4) {
        answer = true;
        return;
    }

    visited[cur] = true;

    for (const next of graph[cur]) {
        if (!visited[next]) {
            dfs(next, depth + 1);
        }
    }

    visited[cur] = false; // 상태 복구
};

// 모든 노드를 시작점으로 탐색
for (let i = 0; i < N; i++) {
    if (answer) break;
    dfs(i, 0);
}

console.log(answer ? 1 : 0);
