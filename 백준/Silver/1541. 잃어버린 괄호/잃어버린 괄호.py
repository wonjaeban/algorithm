sum = 0
plus_list = []

str = input().split('-')  
  
for s in str:
  sum = 0
  plus_string= s.split('+')
  for number in plus_string:
    sum += int(number)
  plus_list.append(sum)

answer = 0
for i, p in enumerate(plus_list):
  if i == 0:
    answer += p
  else:
    answer -= p
print(answer)