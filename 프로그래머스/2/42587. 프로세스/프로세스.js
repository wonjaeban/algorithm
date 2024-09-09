function solution(priorities, location) {
    const queue = priorities.map((_, index) => index);
    const pass = [];
    const order = [];
    
    while (queue.length > 0) {
        if(order.length === priorities.length) break;
        pass.push(queue[0])
        for (let i = 1; i < queue.length; i++) {
            // 통과하는 경우
            if (priorities[queue[0]] >= priorities[queue[i]]) {
                pass.push(queue[i]);
            }
            // 통과 못하는 친구 만나면
            else if (priorities[queue[0]] < priorities[queue[i]]) {
                // 그동안 통과한 친구들 전부다 queue에서 뽑아서 다시 집어넣기
                while (pass.length > 0) {
                    queue.push(queue.shift());
                    pass.shift();
                }
                break;
            } 
        }
        // 전부다 통과했다면 order에 추가.
        if(pass.length === queue.length) {
            order.push(queue.shift());
            pass.length = 0;
        }
    }
    for (let i = 0; i < order.length; i++) {
        if(order[i] === location) return i + 1
    }
}