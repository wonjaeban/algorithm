class MinHeap {
    constructor() {
        this.heap = [];
    }
    
    push(value) {
        this.heap.push(value);
        if(this.heap.length === 1) {
            return;
        }
        let currentIndex = this.heap.length - 1;
        while (currentIndex > 0) {
            // 부모가 자식보다 크면 change
            let parent = this.heap[Math.floor((currentIndex - 1) / 2)];
            let child = this.heap[currentIndex]
            if (parent[1] > child[1]) {
                const temp = parent;
                this.heap[Math.floor((currentIndex - 1) / 2)] = this.heap[currentIndex];
                this.heap[currentIndex] = temp;
            } else {
                break;
            }
            currentIndex = Math.floor((currentIndex - 1) / 2);
        }
    }
    
    pop() {
        if (this.heap.length === 0) return null;
        if (this.heap.length === 1) return this.heap.pop();
        const minValue = this.heap[0];
        this.heap[0] = this.heap.pop();
        let currentIndex = 0;
        while ((currentIndex + 1) * 2 - 1 <= this.heap.length - 1) {
            let leftChildIndex = (currentIndex + 1) * 2 - 1;
            let rightChildIndex = (currentIndex + 1) * 2;
            let minIndex = leftChildIndex;
            if (rightChildIndex <= this.heap.length - 1 && this.heap[rightChildIndex][1] < this.heap[leftChildIndex][1]) {
                minIndex = rightChildIndex;
            }
            // 부모가 자식보다 크면 바꾸기~
            if (this.heap[currentIndex][1] > this.heap[minIndex][1]) {
                const temp = this.heap[currentIndex];
                this.heap[currentIndex] = this.heap[minIndex];
                this.heap[minIndex] = temp;
                currentIndex = minIndex;
            } else {
                break;
            }
        }
        return minValue;
    }
    
    size() {
        return this.heap.length;
    }
}

function solution(jobs) {
    jobs.sort((a, b) => {
        if (a[0] === b[0]) {
            return a[1] - b[1];
        } else {
            return a[0] - b[0];
        }
    });

    const minHeap = new MinHeap();
    let sumTime = 0;
    let currentTime = 0;  // 작업을 처리하는 현재 시간
    let index = 0;

    while (index < jobs.length || minHeap.size() > 0) {
        // 현재 시간까지 도착한 작업을 힙에 추가
        while (index < jobs.length && jobs[index][0] <= currentTime) {
            minHeap.push(jobs[index]);
            index++;
        }

        // 힙에서 작업을 꺼내 처리
        if (minHeap.size() > 0) {
            const currentJob = minHeap.pop();
            currentTime += currentJob[1];  // 현재 시간 업데이트
            sumTime += currentTime - currentJob[0];  // 작업 소요 시간 계산
        } else {
            // 힙이 비어 있을 경우, 다음 작업이 도착할 때까지 현재 시간을 진행~~~
            currentTime = jobs[index][0];
        }
    }

    return Math.floor(sumTime / jobs.length);
}