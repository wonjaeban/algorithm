n = int(input())
currentX, currentY = 1, 1
plans = input().split()

dx = [-1, 1, 0, 0]
dy = [0, 0, -1, 1]
move_types = ['L', 'R', 'U', 'D']

for plan in plans:
  for i in range(len(move_types)):
    if (plan == move_types[i]):
      nx = currentX + dx[i]
      ny = currentY + dy[i]
    if (nx < 1 or nx > n or ny < 1 or ny > n):
      continue
    currentX, currentY = nx, ny

print(currentX, currentY)
