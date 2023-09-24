def solution(n, lost, reserve):
    lost_copy = [x for x in lost if x not in reserve]
    reserve_copy = [x for x in reserve if x not in lost]
    lost_copy.sort()
    reserve_copy.sort()

    answer = n - len(lost_copy)
    for index in lost_copy:
        if index in reserve_copy:
            answer += 1
            reserve_copy.remove(index)

        elif index - 1 in reserve_copy:
            answer += 1
            reserve_copy.remove(index - 1)

        elif index + 1 in reserve_copy:
            answer += 1
            reserve_copy.remove(index + 1)

    return answer