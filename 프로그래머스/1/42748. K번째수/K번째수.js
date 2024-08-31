function solution(array, commands) {
    let answer = [];
    for (command of commands) {
        const part = array.slice(command[0] - 1, command[1]);
        part.map((item) => {
            return parseInt(item, 10);
        });
        part.sort((a, b)=> a - b);
        answer = [...answer, part[command[2] - 1]];
    }
    return answer;
}