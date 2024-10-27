function solution(rectangle, characterX, characterY, itemX, itemY) {
    const graph = Array.from({ length: 101 }, () => Array(101).fill(0));
    
    for (const each of rectangle) {
        const [minX, minY, maxX, maxY] = each;
        
        for (let i = minX * 2; i <= maxX * 2; i++) {
            for (let j = minY * 2; j <= maxY * 2; j++) {
                if (
                    (i === minX * 2 || i === maxX * 2 || j === minY * 2 || j === maxY * 2) &&
                    graph[i][j] !== -1
                ) {
                    graph[i][j] = 1; // 경계선을 1로 표시
                } else if (i > minX * 2 && i < maxX * 2 && j > minY * 2 && j < maxY * 2) {
                    graph[i][j] = -1; // 내부는 -1로 표시
                }
            }
        }
    }
    
    const queue = [[characterX * 2, characterY * 2, 0]];
    graph[characterX * 2][characterY * 2] = 2;
    
    function BFS() {
        while (queue.length > 0) {
            const [curX, curY, distance] = queue.shift();
            
            const dx = [1, -1, 0, 0];
            const dy = [0, 0, 1, -1];
            
            for (let i = 0; i < 4; i++) {
                const newX = curX + dx[i];
                const newY = curY + dy[i];
                
                if (newX === itemX * 2 && newY === itemY * 2) {
                    return Math.floor((distance + 1) / 2);
                }
                
                if (newX >= 0 && newY >= 0 && newX < 101 && newY < 101 && graph[newX][newY] === 1) {
                    graph[newX][newY] = 2;
                    queue.push([newX, newY, distance + 1]);
                }
            }
        }
    }
    
    return BFS();
}
