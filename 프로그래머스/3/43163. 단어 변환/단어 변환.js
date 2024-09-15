function solution(begin, target, words) {
    const queue = [[begin, 0]];
    const visited = [begin];
    function BFS() {
        while (queue.length > 0) {
            const [cur, count] = queue.shift();
            if (cur === target) {
                return count;
            }
            const newCount = count + 1;
            for (word of words) {
                if(visited.includes(word)) {
                    continue;
                }
                let diff = 0;
                for (let i = 0; i < word.length; i++) {
                    if(word[i] !== cur[i]) {
                        diff += 1;
                    }
                }
                if(diff === 1) {
                    queue.push([word, newCount]);
                    visited.push(word);
                }
            }
        }
        return 0
    }
    return BFS();
}