function makeGraph(except, wires, n) {
    const graph = Array.from({ length: n + 1 }, () => []);
    for (let i = 0; i < wires.length; i++) {
        if(i === except) continue;
        graph[wires[i][0]] = [...graph[wires[i][0]], wires[i][1]];
        graph[wires[i][1]] = [...graph[wires[i][1]], wires[i][0]];
    }
    return graph;
}

function DFS(cur, visited, graph) {
    visited.push(cur);
    for (const next of graph[cur]) {
        if(!visited.includes(next)) {
            DFS(next, visited, graph);
        }
    }
}

function solution(n, wires) {
    let min = n;
    for (let i = 0; i < wires.length; i++) {
        const graph = makeGraph(i, wires, n);
        const visited = [];
        DFS(1, visited, graph);
        if (min > Math.abs((n - visited.length) - visited.length)) {
            min = Math.abs((n - visited.length) - visited.length);
        }
    }
    return min;
}