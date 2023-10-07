def make_biggest_number(numbers, k):
  number = []
  for char in numbers:
    if len(number) == 0:
      number.append(char)
      continue
    elif char > number[-1] and k > 0:
      while len(number) > 0 and char > number[-1] and k > 0:
        number.pop()
        k-=1
    number.append(char)
  number = number[:-k] if k > 0 else number
  return ''.join(number)
    
    


def solution(number, k):
    return make_biggest_number(number, k)