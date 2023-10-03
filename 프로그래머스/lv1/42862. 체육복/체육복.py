
def solution(n, lost, reserve):
    lost_copy = [x for x in lost if x not in reserve]
    reserve_copy = [x for x in reserve if x not in lost]
    lost_copy.sort()
    answer = n - len(lost_copy)
    for each in lost_copy:
        if each - 1 in reserve_copy:
          reserve_copy.remove(each - 1)
          answer += 1
        elif each + 1 in reserve_copy:
          reserve_copy.remove(each + 1)
          answer += 1
    return answer

def main():
  print(solution(3, [3], [1]))

if __name__ == "__main__":
    main()