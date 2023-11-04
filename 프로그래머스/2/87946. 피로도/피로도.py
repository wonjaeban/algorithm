from itertools import permutations
 
def solution(k, dungeons):
    dun_cnt_list = []
    # 방문 순서 확인
    for perm in permutations(range(len(dungeons)), len(dungeons)):
        # 피로도, 방문 수 초기화
        temp_k = k
        dun_cnt = 0
        # 던전 방문
        for i in perm:
            need_k, use_k = dungeons[i]
            # 방문 가능한 경우
            if temp_k >= need_k:
                dun_cnt += 1
                temp_k -= use_k
        # 방문한 던전의 수
        dun_cnt_list.append(dun_cnt)
    # 최대 방문 횟수
    return max(dun_cnt_list)