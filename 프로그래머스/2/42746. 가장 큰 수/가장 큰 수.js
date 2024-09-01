function solution(numbers) {
    const stringNumbers = numbers.map((number)=> number.toString())
    stringNumbers.sort((a, b) => (b + a) - (a + b));
    let answer = '';
    for (number of stringNumbers) {
        answer += number;
    }
    return answer[0] === '0' ? '0' : answer;
}