function solution(n, lost, reserve) {
    lost.sort((a, b) => a - b);
    reserve.sort((a, b) => a - b);
    let realLost = lost.filter((l) => !reserve.includes(l));
    const realReserve = reserve.filter((re) => !lost.includes(re));
    for (res of realReserve) {
        if (realLost.includes(res - 1)) {
            realLost = realLost.filter((l) => l !== res - 1);
        } else if (realLost.includes(res + 1)) {
            realLost = realLost.filter((l) => l !== res + 1)
        }
    }
    return n - realLost.length;
}