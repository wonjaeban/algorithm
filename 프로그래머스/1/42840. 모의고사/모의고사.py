def solution(answers):
  first_choices = [1, 2, 3, 4, 5]
  second_choices = [2, 1, 2, 3, 2, 4, 2, 5]
  third_choices = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]
  answer_list = [0, 0, 0]
  
  for idx, answer in enumerate(answers):
    if first_choices[idx % len(first_choices)] == answer:
      answer_list[0] += 1
    if second_choices[idx % len(second_choices)] == answer:
      answer_list[1] += 1
    if third_choices[idx % len(third_choices)] == answer:
      answer_list[2] += 1

  max_count = max(answer_list)
  return [i + 1 for i, x in enumerate(answer_list) if x == max_count]