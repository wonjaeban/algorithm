def solution(n, costs):
    answer = 0
    costs.sort(key = lambda x: x[2]) 
    link = set([costs[0][0]])

    # Kruskal 알고리즘으로 최소 비용 구하기
    while len(link) != n:
        for v in costs:
            if v[0] in link and v[1] in link:
                continue
            if v[0] in link or v[1] in link:
                link.update([v[0], v[1]])
                answer += v[2]
                break
                
    return answer