function solution(distance, rocks, n) {
    const newRocks = [0, ...rocks, distance];
    newRocks.sort((a, b) =>  a - b);
    let start = 0;
    let end = distance;
    while (start <= end) {
        let mid = Math.floor((end + start) / 2);
        let idx = 0;
        let count = 0;
        let j = idx + 1;
        while (j < newRocks.length) {
            if (newRocks[j] - newRocks[idx] < mid) {
                count++;
            } else {
                idx = j;
            }
            j++;
        }
        if (count > n) {
            end = mid - 1;
        } else {
            start = mid + 1;
        }
    }
    return Math.floor((end + start) / 2);
}