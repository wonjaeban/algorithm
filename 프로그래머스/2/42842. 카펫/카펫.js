function solution(brown, yellow) {
    for (let i = 1; i <= Math.sqrt(yellow); i++) {
        if (yellow % i === 0) {
            const horizon = Math.max((yellow / i), i);
            const vertical = Math.min((yellow / i), i);
            if ((horizon + 2) * (vertical + 2) === (brown + yellow)) {
                return [horizon + 2, vertical + 2]
            }
        }
    }
    return [];
}