function solution(arr)
{
    const answer = [];
    for (let i = 0; i < arr.length; i++) {
        if (answer.length === 0 || arr[i] !== answer[answer.length-1]) {
            answer.push(arr[i]);
        } 
    }
    return answer
}