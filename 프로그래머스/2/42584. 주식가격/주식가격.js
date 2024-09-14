function solution(prices) {
    const answer = [];
    
    for (let i = 0; i < prices.length; i++) {
        let count = 0;
        if (i === prices.length - 1) {
            answer.push(0)
            return answer;
        }
        for (let j = i + 1; j < prices.length; j++) {
            count += 1;
            if (prices[i] > prices[j]) {
                break;
            } 
        }
        answer.push(count);
    }
    return answer;
}