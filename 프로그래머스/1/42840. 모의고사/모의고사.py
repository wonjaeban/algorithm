def solution(answers):
    first_answers = [1, 2, 3, 4, 5]
    second_answers = [2, 1, 2, 3, 2, 4, 2, 5]
    third_answers = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]
    count = [0, 0, 0]
    for idx, answer in enumerate(answers):
        if first_answers[(idx) % len(first_answers)] == answer:
            count[0] += 1
        if second_answers[(idx) % len(second_answers)] == answer:
            count[1] += 1
        if third_answers[(idx) % len(third_answers)] == answer:
            count[2] += 1
    
    answer = [ x + 1 for x, y in enumerate(count) if y == max(count) ]
    return answer