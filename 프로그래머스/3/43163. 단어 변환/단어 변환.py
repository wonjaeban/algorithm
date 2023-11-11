from collections import deque

def bfs(words, queue, target):
    visited = [ 0 for i in range(len(words))]
    while queue:
        cur_word, cnt, idx = queue.popleft()
        if cur_word == target:
            return cnt
        if idx != -1:
            visited[idx] = 1
        for i in range(len(words)):
            if visited[i] == 1:
                continue
            diff = 0
            for c_i in range(len(words[i])):
                if words[i][c_i] != cur_word[c_i]:
                    diff += 1
            if diff == 1:
                queue.append((words[i], cnt + 1, i))
    return 0
            
            
def solution(begin, target, words):
    queue = deque([(begin, 0, -1)])
    return bfs(words, queue, target)
    
     