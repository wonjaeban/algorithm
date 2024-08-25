function solution(clothes) {
    const clothMap = new Map();
    for (cloth of clothes) {
        if (clothMap.has(cloth[1])) {
            clothMap.set(cloth[1], clothMap.get(cloth[1]) + 1)
        } else {
            clothMap.set(cloth[1], 1)
        }
    }
    let multiples = 1;
    for ([type, count] of clothMap) {
        multiples *= (count + 1)
    }
    return multiples - 1
}