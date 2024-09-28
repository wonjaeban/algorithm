function makeNumber(number, length) {
    let remainLength = length;
    let answer = '';
    let startIndex = 0;
    let endIndex = number.length - length;
    while (remainLength > 0) {
        let maxNum = -1;
        let numIndex = -1;
        for (let i = startIndex; i <= endIndex; i++) {
            if (maxNum < Number(number[i])) {
                maxNum = Number(number[i]);
                numIndex = i;
                if(maxNum === 9){
                    break;
                }    
            }
        }
        answer += maxNum.toString();
        remainLength -= 1;
        startIndex = numIndex + 1;
        endIndex = number.length  - remainLength;
    }
    return answer
}

function solution(number, k) {
    const wordLength = number.length - k;
    return makeNumber(number, wordLength);
}