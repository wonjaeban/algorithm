function countUpAndDown(target) {
    const down = target.charCodeAt(0) - 'A'.charCodeAt(0);
    const up = 'Z'.charCodeAt(0) - target.charCodeAt(0) + 1;
    return down < up ? down : up;
}


function solution(name) {
      let answer = 0;
      let min = name.length - 1;

      for (let i = 0; i < name.length; i++) {
        let currentAlPhabet = name[i];
        answer += countUpAndDown(currentAlPhabet);

        let nextIndex = i + 1;

          // A가 안나오는 인덱스 지점 찾기
        while (nextIndex < name.length && name[nextIndex] === 'A') {
          nextIndex += 1;
        }

        min = Math.min(
          min,
          i * 2 + name.length - nextIndex, 
          i + (name.length - nextIndex) * 2 
        );
      }
      answer += min;
      return answer;
}