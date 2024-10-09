function solution(distance, rocks, n) {
    const newRocks = [0, ...rocks, distance];
    newRocks.sort((a, b) => a - b);
    
    let left = 0;
    let right = distance
    
    while(left <= right) {
        let mid = Math.floor((right + left) / 2);
        let count = 0;
        let current = 0;
        for (let i = 1; i < newRocks.length; i++) {
            if (mid > newRocks[i] - newRocks[current]) {
                count += 1;
            } else {
                current = i;
            }
        }
        if (count > n) {
            right = mid - 1;
        } else {
            left = mid + 1;
        } 
    }
    return right;
}