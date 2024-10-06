function solution(n, times) {
    times.sort((a, b) => a - b);
    let left = 1;
    let right = n * times[times.length - 1];
    let mid = Math.floor((left + right) / 2);
    let answer = right;
    
    while (left <= right) {
        let count = 0;
        times.forEach((time) => count += Math.floor(mid / time));
        if (count >= n) {
            answer = mid;
            right = mid - 1;
            mid = Math.floor((left + right) / 2);
        } else if (count < n) {
            left = mid + 1;
            mid = Math.floor((left + right) / 2);
        }
    }
    return answer
}