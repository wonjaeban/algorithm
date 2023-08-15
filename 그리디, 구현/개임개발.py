n, m = map(int, input().split())
x, y, direction = map(int, input().split())
mapInfo = []

for i in range(n):
  mapInfo.append(list(map(int, input().split())))

visited = [[0] * m for _ in range(n)]
visited[x][y] = 1

dx = [-1, 0, 1, 0]
dy = [0, 1, 0, -1]


def turn_left():
  global direction
  direction -= 1
  if (direction == -1):
    direction = 3


count = 1
turn_time = 0
while True:
  turn_left()
  nx = x + dx[direction]
  ny = y + dy[direction]
  if (mapInfo[nx][ny] == 0 and visited[nx][ny] == 0):
    x = nx
    y = ny
    visited[nx][ny] = 1
    count += 1
    turn_time = 0
    continue
  else:
    turn_time += 1
  if (turn_time == 4):
    nx = x - dx[direction]
    ny = y - dy[direction]
    if (mapInfo[nx][ny] == 0):
      x = nx
      y = ny
    else:
      break
    turn_time = 0

print(count)
