let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const answer = [];

const dfs = (curX, curY, graph) => {
    graph[curX][curY] = -1;
    const dx = [1, -1, 0, 0, 1, -1, -1, 1];
    const dy = [0, 0, 1, -1, 1, -1, 1, -1];

    for (let i = 0; i < 8; i++) {
        const nextX = curX + dx[i];
        const nextY = curY + dy[i];
        if (nextX < 0 || nextY < 0 || nextX >= graph.length || nextY >= graph[0].length) {
            continue;
        }
        if(graph[nextX][nextY] === 1) {
            dfs(nextX, nextY, graph);
        }
    }
}

for (let i = 0; i < input.length; i++) {
    const [w, h] = input[i].split(' ').map(Number);
    if(w === 0 && h === 0) break;
    const graph = [];
    for (let j = i + 1; j <= i + h; j++) {
        graph.push(input[j].split(' ').map(Number));
    }
    let count = 0;
    for (let j = 0; j < graph.length; j++) {
        for (let k = 0; k < graph[0].length; k++) {
            if(graph[j][k] === 1) {
                count++;
                dfs(j, k, graph);
            }
        }
    }
    answer.push(count);
    i = i + h;
}

let answerString = '';

for (let i = 0; i < answer.length; i++) {
    answerString = answerString + answer[i] + '\n';
}

console.log(answerString.trim());