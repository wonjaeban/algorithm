let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const [M, N] = input[0].split(' ').map(Number);

const graph = [];
const queue = [];

// 그래프 초기화 및 익은 토마토 큐에 추가
for (let i = 1; i <= N; i++) {
    const row = input[i].split(' ').map(Number);
    graph.push(row);
    for (let j = 0; j < M; j++) {
        if (row[j] === 1) {
            queue.push([i - 1, j]); // 익은 토마토 위치 저장
        }
    }
}

let days = 0;

const bfs = () => {
    const dx = [1, -1, 0, 0];
    const dy = [0, 0, 1, -1];
    let index = 0; // 큐에서 직접 `shift()`를 사용하지 않도록 관리

    while (index < queue.length) {
        const size = queue.length - index; // 현재 큐 레벨 크기
        let updated = false;

        for (let k = 0; k < size; k++) {
            const [curX, curY] = queue[index++];
            for (let i = 0; i < 4; i++) {
                const nextX = curX + dx[i];
                const nextY = curY + dy[i];
                // 범위 밖이거나 이미 익은 경우
                if (nextX < 0 || nextY < 0 || nextX >= N || nextY >= M || graph[nextX][nextY] !== 0) {
                    continue;
                }
                graph[nextX][nextY] = 1; // 익은 상태로 변경
                queue.push([nextX, nextY]); // 큐에 추가
                updated = true;
            }
        }
        // 하루 경과
        if (updated) {
            days++;
        }
    }
};

bfs();

// 익지 않은 토마토가 남아있는지 확인
for (let i = 0; i < N; i++) {
    if (graph[i].includes(0)) {
        console.log(-1);
        return;
    }
}

console.log(days);
