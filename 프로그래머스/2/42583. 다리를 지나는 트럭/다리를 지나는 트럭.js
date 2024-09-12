function solution(bridge_length, weight, truck_weights) {
    let count = 0;
    let weightSum = 0;
    const inBridge = [];
    let outTruckCount = 0;
    const waiting = [...truck_weights];
    // 기다리는 트럭 없을때까지 반복
    while (waiting.length > 0 || inBridge.length > 0) {
        // console.log(count, waiting, inBridge)
        // 다리에 트럭이 한대라도 있다면
        if (inBridge.length > 0) {
            // 트럭의 운행거리를 1씩 높여줍니다.
            for (let i = 0; i < inBridge.length; i++) {
                inBridge[i][1] += 1;
                // 다 나온 트럭이 있다면 outTruckCount에 + 1
                if (inBridge[i][1] > bridge_length) {
                     outTruckCount++;
                }
            }
            // 다 나온 트럭들은 다리에서 제거합니다.
            while (outTruckCount > 0) {
                weightSum -= inBridge[0][0]
                inBridge.shift();
                outTruckCount--;
                
            }
        }
        // 기다리는 트럭 한대 더 들어올 수 있으면 다리에 추가
        if(waiting.length > 0 && ((weightSum + waiting[0]) <= weight) && ((inBridge.length + 1) <= bridge_length)) {
            weightSum += waiting[0];
            // 운행거리는 1로 시작합니다.
            inBridge.push([waiting.shift(), 1]);

        }
        count += 1;
    }
    return count
}