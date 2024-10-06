function solution(routes) {
    routes.sort((a, b) => a[1] - b[1]);
    let min = -30001;
    let answer = 0;
    for (route of routes) {
        if (route[0] <= min) {
            continue;
        } else {
            answer += 1;
            min = route[1];
        }
    }
    return answer;
}