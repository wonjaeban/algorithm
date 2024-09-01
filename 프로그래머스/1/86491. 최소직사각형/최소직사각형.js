function solution(sizes) {
    let horizon = sizes[0][0];
    let vertical = sizes[0][1];
    for (size of sizes) {
        if (size[0] > horizon || size[1] > vertical) {
            if (Math.max(horizon, size[0]) * Math.max(vertical, size[1]) < Math.max(horizon, size[1]) * Math.max(vertical, size[0])) {
                horizon = Math.max(horizon, size[0]);
                vertical = Math.max(vertical, size[1]);
            } else {
                horizon = Math.max(horizon, size[1]);
                vertical = Math.max(vertical, size[0]);
            }
        }
    }
    return horizon * vertical;
}