function solution(rectangle, characterX, characterY, itemX, itemY) {
    // 좌표들을 2배 확장 안하면 근접한 사각형 탐색 시 잘못된 길로 진입한다.
    characterX *= 2;
    characterY *= 2;
    itemX *= 2;
    itemY *= 2;
    
    const doubleRec = rectangle.map(([minX, minY, maxX, maxY]) => [minX * 2, minY * 2, maxX * 2, maxY * 2]);
    
    // x좌표, y좌표, count
    const queue = [[characterX, characterY, 0]];
    const visited = [];
    const possible = [];
    
    for (let i = 0; i < 102; i++) {
        visited.push(Array(102).fill(false));
        possible.push(Array(102).fill(0));
    }
    visited[characterX][characterY] = true;
    
    // 두 배 확장된 사각형의 경계 설정
    for (const [minX, minY, maxX, maxY] of doubleRec) {
        for (let x = minX; x <= maxX; x++) {
          for (let y = minY; y <= maxY; y++) {
              if(x === minX || x === maxX || y === minY || y === maxY) {
                  if(possible[x][y] === 0) {
                      possible[x][y] = 1;
                  } 
              } else {
                    possible[x][y] = 2;
                }
          }
        }
    }
    
    // BFS 탐색
    function BFS() {
        const dx = [1, -1, 0, 0];
        const dy = [0, 0, 1, -1];
        while (queue.length > 0) {
            const [curX, curY, count] = queue.shift();
            if (curX === itemX && curY === itemY) {
                return count / 2; // 원래 좌표로 되돌리기 위해 2로 나눔
            }
            for (let i = 0; i < 4; i++) {
                const newX = curX + dx[i];
                const newY = curY + dy[i];
                if (newX > 0 && newY > 0 && newX < 102 && newY < 102 && visited[newX][newY] === false && possible[newX][newY] === 1) {
                    visited[newX][newY] = true;
                    queue.push([newX, newY, count + 1]);
                }
            }
        }
        return 0;
    }
    return BFS();
}