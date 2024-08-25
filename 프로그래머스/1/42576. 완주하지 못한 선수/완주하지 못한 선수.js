function solution(participant, completion) {
    const partMap = new Map();
    for (part of participant) {
        if (!partMap.has(part)) {
            partMap.set(part, 1);
        } else {
            partMap.set(part, partMap.get(part) + 1);
        }
    }
    for (complete of completion) {
        partMap.set(complete, partMap.get(complete) - 1)
    }
    for ([key, value] of partMap) {
        if (value > 0) {
            return key
        }
    }
}