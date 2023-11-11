from collections import deque

def bfs(maps):
    queue = deque([[0, 0]])
    dx = [+1, -1, 0, 0]
    dy = [0, 0, +1, -1]
    
    while queue:
        row_idx, col_idx = queue.popleft()
        for i in range(4):
            new_row = row_idx + dx[i]
            new_col = col_idx + dy[i]
            if 0 <= new_row < len(maps) and 0 <= new_col < len(maps[0]) and maps[new_row][new_col] == 1:
                queue.append([new_row, new_col])
                maps[new_row][new_col] = maps[row_idx][col_idx] + 1
                
    return maps[len(maps) - 1][len(maps[0]) - 1] if maps[len(maps) - 1][len(maps[0]) - 1] > 1 else -1
        

def solution(maps):
    return bfs(maps)