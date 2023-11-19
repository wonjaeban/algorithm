def dfs(graph, cur, apt, count):
  dx = [1, -1, 0, 0]
  dy = [0, 0, 1, -1]
  graph[cur[0]][cur[1]] = apt
  count[apt] += 1

  for i in range(4):
    new_x = cur[0] + dx[i] 
    new_y = cur[1] + dy[i]
    if 0 <= new_x < len(graph) and 0 <= new_y < len(graph) and graph[new_x][new_y] == 1:
      dfs(graph, (new_x, new_y), apt, count)


def solution():
  n = int(input())
  graph = []
  for _ in range(n):
    graph.append(list(map(int, input())))
  apt = 2
  count = [ 0 for _ in range(625)]
  for x in range(n):
    for y in range(n):
      if graph[x][y] == 1:
        dfs(graph, (x, y), apt, count)
        apt += 1
  filter_count = list(filter(lambda x: x != 0, count))
  filter_count.sort()
  print(apt - 2)
  for cnt in filter_count:
    print(cnt)
 
solution()
  