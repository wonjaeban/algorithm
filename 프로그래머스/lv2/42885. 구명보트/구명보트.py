def solution(people, limit):

    # 몸무게를 오름차순 정렬
    people.sort()

    # 시작, 끝 인덱스
    start, end = 0, len(people)-1

    # 보트의 수
    count = 0

    while start <= end:

        # 보트의 수 증가
        count += 1

        # 두 명(몸무게가 가장 적은 사람, 몸무게가 가장 많은 사람)을 태우거나
        if (people[start] + people[end] <= limit):
            start += 1
            end -= 1

        # 한 명(몸무게가 가장 많은 사람)을 태웁니다.   
        else:
            end -= 1

    return count