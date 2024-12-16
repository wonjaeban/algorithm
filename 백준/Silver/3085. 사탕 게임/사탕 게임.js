let fs = require('fs');
let inputs = fs.readFileSync('/dev/stdin').toString().split('\n').filter(Boolean);

const findMaxCandy = (arr) => {
    let max = 1;
    const vertical = Array.from({length: arr.length}, () => Array.from({length: arr.length}, () => 'A'));
    for (let i = 0; i < arr.length; i++) {
        let count = 0;
        const temp = arr[i];
        for (let k = 0; k < temp.length; k++) {
            vertical[k][i] = temp[k];
            if (k === 0) count++;
            else {
                if(temp[k - 1] === temp[k]) {
                    count++;
                } else {
                    max = Math.max(max, count);
                    count = 1;
                }
            }
        }
        max = Math.max(max, count);
    }

    for (let i = 0; i < vertical.length; i++) {
        let count = 0;
        const temp = vertical[i];
        for (let k = 0; k < temp.length; k++) {
            if (k === 0) count++;
            else {
                if(temp[k - 1] === temp[k]) {
                    count++;
                } else {
                    max = Math.max(max, count);
                    count = 1;
                }
            }
        }
        max = Math.max(max, count);
    }
    return max;
}

const N = Number(inputs[0]);

const origin = inputs.slice(1);
const newOrigin = Array.from({length: N}, () => Array.from({length: N}));

for (let i = 0; i < N; i++) {
    const temp = origin[i];
    for (let j = 0; j < temp.length; j++) {
        newOrigin[i][j] = temp[j];
    }
}


let max = findMaxCandy(newOrigin);

for (let i = 0; i < N; i++) {
    for (let j = 0; j < N - 1; j++) {
        if (newOrigin[i][j] !== newOrigin[i][j + 1]) {
            let temp = newOrigin[i][j];
            newOrigin[i][j] = newOrigin[i][j + 1];
            newOrigin[i][j + 1] = temp;
            max = Math.max(max, findMaxCandy(newOrigin));
            temp = newOrigin[i][j];
            newOrigin[i][j] = newOrigin[i][j + 1];
            newOrigin[i][j + 1] = temp;
        }
        if (newOrigin[j][i] !== newOrigin[j + 1][i]) {
            let temp = newOrigin[j][i];
            newOrigin[j][i] = newOrigin[j + 1][i];
            newOrigin[j + 1][i] = temp;
            max = Math.max(max, findMaxCandy(newOrigin));
            temp = newOrigin[j][i];
            newOrigin[j][i] = newOrigin[j + 1][i];
            newOrigin[j + 1][i] = temp;
        }
    }
}

console.log(max);