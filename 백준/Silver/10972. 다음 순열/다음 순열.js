let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

const target = input[1].split(' ').map(Number);

// 다음 순열 찾기
const findNextPermutation = (arr) => {
    let n = arr.length;

    // Step 1: 오른쪽에서 왼쪽으로 탐색하며 감소하는 위치 찾기
    let i = n - 1;
    while (i > 0 && arr[i - 1] >= arr[i]) {
        i--;
    }

    // 마지막 순열인 경우
    if (i === 0) {
        console.log(-1);
        return;
    }

    // Step 2: arr[i - 1]보다 큰 값 중 가장 작은 값 찾기
    let j = n - 1;
    while (arr[i - 1] >= arr[j]) {
        j--;
    }

    // arr[i - 1]와 arr[j] 교환
    [arr[i - 1], arr[j]] = [arr[j], arr[i - 1]];

    // Step 3: arr[i] 이후의 값을 오름차순 정렬
    let left = i;
    let right = n - 1;
    while (left < right) {
        [arr[left], arr[right]] = [arr[right], arr[left]];
        left++;
        right--;
    }

    console.log(arr.join(' '));
};

findNextPermutation(target);
