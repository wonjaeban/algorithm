function solution(arrows) {
    const dots = new Map();
    const edges = new Map();
    // 예외 케이스 때문에 2배씩 움직여야함.
    const directions = [[-1, 0], [-1, 1], [0, 1], [1, 1], [1, 0], [1, -1], [0, -1], [-1, -1]];
    let currentX = 0;
    let currentY = 0;
    dots.set('0,0', true);
    let answer = 0;
    for (const arrow of arrows) {
        for (let i = 0; i < 2; i++) {
            const newX = currentX + directions[arrow][0];
            const newY = currentY + directions[arrow][1];
            if (dots.has(`${newX},${newY}`) && !edges.has(`${currentX},${currentY},${newX},${newY}`)) {
                answer += 1;
            }
            dots.set(`${newX},${newY}`, true);
            edges.set(`${currentX},${currentY},${newX},${newY}`, true);
            edges.set(`${newX},${newY},${currentX},${currentY}`, true);
            currentX = newX;
            currentY = newY;
        }
    }
    return answer;
}