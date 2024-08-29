function solution(genres, plays) {
    const answer = [];
    const sumMap = new Map();
    const playsMap = new Map();
    for (let i = 0; i < genres.length; i++) {
        if(sumMap.get(genres[i])) {
            sumMap.set(genres[i], sumMap.get(genres[i]) + plays[i]);
            playsMap.set(genres[i], [...playsMap.get(genres[i]), [i, plays[i]]]);
        } else {
            sumMap.set(genres[i], plays[i]);
            playsMap.set(genres[i], [[i, plays[i]]])
        }
    }
    let count = -1
    let maxGenre = '';
    for (let i = 0; i < playsMap.size; i++) {
        for ([genre, sum] of sumMap) {
            if (count < sum) {
                count = sum;
                maxGenre = genre;
            }
        }
        playsMap.get(maxGenre).sort((a, b)=> b[1] - a[1]);
        answer.push(playsMap.get(maxGenre)[0][0]);
        if (playsMap.get(maxGenre).length > 1) {
            answer.push(playsMap.get(maxGenre)[1][0]);
        }
        sumMap.delete(maxGenre);
        count = -1;
    }
    return answer;
}