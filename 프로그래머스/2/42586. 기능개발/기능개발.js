function solution(progresses, speeds) {
    const rests = [];
    const answer = [];
    for (let i = 0; i < progresses.length; i++) {
        rests.push(Math.ceil((100 - progresses[i]) / speeds[i]))
    }
    let index = 0;
    let count = 0;
    let std = 0;
    while (index <= rests.length) {
        if(index === 0) {
            count += 1;
        }
        else if (rests[index] <= rests[std]) {
            count += 1;
        } else {
            answer.push(count);
            std = index;
            count = 1;
        }
        index += 1;
    }
    return answer;
}