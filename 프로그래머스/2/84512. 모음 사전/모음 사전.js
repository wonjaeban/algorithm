function solution(word) {
    const gathers = ['A', 'E', 'I', 'O', 'U'];
    const dictionary = [];
    function DFS(newWord) {
        if(newWord.length > 5) return;
        dictionary.push(newWord);
        for (let i = 0; i < 5; i++) {
            DFS(newWord + gathers[i]);
        }
    }
    DFS('');
    return dictionary.indexOf(word);
}