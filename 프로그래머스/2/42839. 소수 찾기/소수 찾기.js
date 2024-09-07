function findDecimal(num) {
    if(num === 1 || num === 0) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if(num % i === 0) return false;
    }
    return true;
}

function makeMix(array, length) {
    const result = [];
    if (length === 1) return array.map((value) => [value]);
    array.forEach((fixed, index, origin) => {
        const rest = origin.slice(0, index).concat(origin.slice(index + 1)); 
        const combinations = makeMix(rest, length - 1);
        const attached = combinations.map((combination) => [fixed, ...combination]); 
        result.push(...attached)
    });
    return result
}

function solution(numbers) {
    let answer = 0;
    const mixArray = [];
    const array = numbers.split('');
    for (let i = 1; i < array.length + 1; i++) {
       mixArray.push(...makeMix(array, i));
    }
    const set = new Set();
    for (ele of mixArray) {
        set.add(Number(ele.join('')));
    }
    for (num of set) {
        if (findDecimal(num)) {
            answer += 1;
        }
    }
    return answer
}