import sys

sys.setrecursionlimit(10000)

def make_new_height(graph, ice_position, visited):
  dx = [1, -1, 0, 0]
  dy = [0, 0, 1, -1]
  ice_positions_to_remove = set()

  for ice in ice_position:
    count = 0
    for i in range(4):
      nx = ice[0] + dx[i]
      ny = ice[1] + dy[i]
      if 0 <= nx < len(graph) and 0 <= ny < len(graph[0]) and graph[nx][ny] == 0 and not visited[nx][ny]:
        count += 1
    graph[ice[0]][ice[1]] -= count
    if graph[ice[0]][ice[1]] < 0:
      graph[ice[0]][ice[1]] = 0
    if graph[ice[0]][ice[1]] == 0:
      ice_positions_to_remove.add((ice[0], ice[1]))
  ice_position -= ice_positions_to_remove
  
  

def dfs(graph, visited, cur, ice_position):
  visited[cur[0]][cur[1]] = True
  dx = [1, -1, 0, 0]
  dy = [0, 0, 1, -1]
  
  for idx in range(4):
    nx = cur[0] + dx[idx]
    ny = cur[1] + dy[idx]
    if 0 <= nx < len(graph) and 0 <= ny < len(graph[0]) and not visited[nx][ny] and graph[nx][ny] > 0:
      dfs(graph, visited, (nx, ny), ice_position)
    

def solution():
  n, m = map(int, sys.stdin.readline().split())
  graph = []
  year = 0
  ice_position = set()
  for x in range(n):
    new_line = list(map(int, sys.stdin.readline().split()))
    graph.append(new_line)
    for y in range(m):
      if new_line[y] > 0:
        ice_position.add((x, y))
  while len(ice_position) > 0:
    visited = [[False for _ in range(m)] for _ in range(n)]
    count = 0
    for pos in ice_position:
      if graph[pos[0]][pos[1]] != 0 and not visited[pos[0]][pos[1]]:
        count += 1
        dfs(graph, visited, (pos[0], pos[1]), ice_position)
    if count >= 2:
      print(year)
      return
    make_new_height(graph, ice_position, visited)
    year += 1
  print(0)
  return

solution()