function solution(answers) {
    
    const one = [1, 2, 3, 4, 5];
    const two = [2, 1, 2, 3, 2, 4, 2, 5];
    const three = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    
    const scores = [0, 0, 0];
    
    for (let i = 0; i < answers.length; i++) {
        if (one[i % 5] === answers[i]) {
            scores[0] += 1;
        } if (two[i % 8] === answers[i]) {
            scores[1] += 1;
        } if (three[i % 10] === answers[i]) {
            scores[2] += 1;
        }
    }
    const maxVal = Math.max(...scores);
    const answer = [];
    for (let i = 0; i < 3; i++) {
        if (scores[i] === maxVal) {
            answer.push(i + 1);
        }
    }    
    return answer;
}