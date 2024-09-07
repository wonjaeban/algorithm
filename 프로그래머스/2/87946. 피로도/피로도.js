 function permutation (arr, selectNumber) {
    const results = [];
    if (selectNumber === 1) return arr.map((el) => [el]); 

    arr.forEach((fixed, index, origin) => {
      const rest = [...origin.slice(0, index), ...origin.slice(index+1)] 
      const permutations = permutation(rest, selectNumber - 1); 
      const attached = permutations.map((el) => [fixed, ...el]); 
      results.push(...attached); 
    });
    return results; 
}

function solution(k, dungeons) {
    const answers = [];
    const len = dungeons.length;
    const arr = [];
    for (let i = 0; i < len; i++) {
        arr.push(i);
    }
    const combies = permutation(arr, arr.length);
    
    for (comb of combies) {
        let count = 0;
        let rest = k;
        for (index of comb) {
            if (rest >= dungeons[index][0]) {
                count += 1;
                rest -= dungeons[index][1];
            }
        }
        answers.push(count)
    }
    return Math.max(...answers);
}