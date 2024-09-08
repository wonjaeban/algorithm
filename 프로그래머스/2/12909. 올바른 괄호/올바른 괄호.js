function solution(s){
    const array = s.split('');
    const stack = [];
    for (let i = 0; i < array.length; i++) {
        if(array[i] === ')' && stack.length === 0) {
            return false
        }
        else if (array[i] === '(') {
            stack.push('(');
        } else {
            stack.pop();
        }
    }
    if(stack.length > 0) {
        return false
    }
    return true
}