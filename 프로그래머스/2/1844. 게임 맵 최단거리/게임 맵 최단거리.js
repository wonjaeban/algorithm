

function solution(maps) {
    const queue = [[0, 0, 1]];
    const visited = [];
    const n = maps.length;
    const m = maps[0].length;
    for (let i = 0; i < n; i++) {
        const temp = [];
        for (let j = 0; j < m; j++) {
            temp.push(false);
        }
        visited.push(temp);
    }
    
    function BFS() {
        while(queue.length > 0) {
            const size = queue.length;
            for (let i = 0; i < size; i++) {
                const [x, y, count] = queue.shift();
                if(x === n - 1 && y === m - 1) {
                    return count;
                }
                const dx = [1, -1, 0, 0];
                const dy = [0, 0, 1, -1];

                for (let i = 0; i < 4; i++) {
                    const nx = x + dx[i];
                    const ny = y + dy[i];
                    if(nx >= 0 && ny >= 0 && nx < n && ny < m && maps[nx][ny] === 1 && visited[nx][ny] === false) {
                        visited[nx][ny] = true;
                        queue.push([nx, ny, count + 1]);
                    }
                }
                
            }
        }
        return -1;
    }
    return BFS()
}