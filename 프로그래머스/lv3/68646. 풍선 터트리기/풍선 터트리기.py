def solution(a):
    if len(a) == 1:
        return 1
    left, right = a[0],a[-1]
    answer = 2
    
    for i in range(1, len(a)-1):
        if left > a[i]:
            answer += 1
            left = a[i]
        if right > a[-1-i]:
            answer += 1
            right = a[-1-i]

    if left == right:
      answer -= 1
    
    return answer