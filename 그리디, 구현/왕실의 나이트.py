inputs = input()

x, y, = int(inputs[1]), int(ord(inputs[0])) - int(ord('a'))

steps = [(2, 1), (2, -1), (-2, 1), (-2, -1), (1, 2), (1, -2), (-1, 2),
         (-1, -2)]

result = 0

for step in steps:
  nx = x + step[0]
  ny = y + step[1]
  if (ny < 1 or ny > 8 or nx < 1 or ny > 8):
    continue
  result += 1

print(result)
