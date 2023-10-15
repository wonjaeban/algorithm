def solution(n, costs):
  costs.sort(key = lambda x: x[2])
  list = set([costs[0][0]])
  answer = 0
  while len(list) != n:
    for element in costs:
      if element[0] in list and element[1] in list:
        continue
      elif element[0] in list or element[1] in list:
        list.update([element[0], element[1]])
        answer += element[2]
        break
  return answer