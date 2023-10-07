def solution(people, limit):
  people.sort()
  left_index = 0
  right_index = len(people) - 1
  count = len(people)
  while left_index < right_index:
    if people[left_index] + people[right_index] <= limit:
      left_index += 1
      right_index -= 1
      count -= 1
      continue
    right_index -= 1 
  return count