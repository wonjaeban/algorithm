class MinHeap {
    constructor() {
        this.heap = [];
    }
    
    push(value) {
        this.heap.push(value);
        let currentIndex = this.heap.length - 1;
        while (currentIndex > 0) {
            let parentIndex = Math.floor((currentIndex - 1) / 2);
            if (this.heap[parentIndex] > this.heap[currentIndex]) {
                [this.heap[parentIndex], this.heap[currentIndex]] = [this.heap[currentIndex], this.heap[parentIndex]];
            } else {
                break;
            }
            currentIndex = parentIndex;
        }
    }
    
    pop() {
        if (this.heap.length === 0) return null;
        if (this.heap.length === 1) return this.heap.pop();
        const minValue = this.heap[0];
        this.heap[0] = this.heap.pop();
        let currentIndex = 0;
        while (true) {
            let leftChildIndex = 2 * currentIndex + 1;
            let rightChildIndex = 2 * currentIndex + 2;
            let smallest = currentIndex;

            if (leftChildIndex < this.heap.length && this.heap[leftChildIndex] < this.heap[smallest]) {
                smallest = leftChildIndex;
            }
            if (rightChildIndex < this.heap.length && this.heap[rightChildIndex] < this.heap[smallest]) {
                smallest = rightChildIndex;
            }
            if (smallest === currentIndex) break;

            [this.heap[currentIndex], this.heap[smallest]] = [this.heap[smallest], this.heap[currentIndex]];
            currentIndex = smallest;
        }
        return minValue;
    }
    
    size() {
        return this.heap.length;
    }
    
    removeMaxLeaf() {
        if (this.size() === 0) return null;

        const startIndex = Math.floor(this.heap.length / 2); // 리프 노드가 시작하는 인덱스
        let maxLeafIndex = startIndex;
        let maxLeafValue = this.heap[startIndex];

        // 리프 노드들 중에서 최대값 찾기
        for (let i = startIndex + 1; i < this.heap.length; i++) {
            if (this.heap[i] > maxLeafValue) {
                maxLeafValue = this.heap[i];
                maxLeafIndex = i;
            }
        }

        // 최대 리프 노드를 제거하고 마지막 노드를 그 자리에 옮김
        [this.heap[maxLeafIndex], this.heap[this.heap.length - 1]] = [this.heap[this.heap.length - 1], this.heap[maxLeafIndex]];
        this.heap.pop(); // 마지막 요소 제거

        return maxLeafValue;
    }
}


function solution(operations) {
    const minHeap = new MinHeap();
    for (let oper of operations) {
        if (oper.includes("I")) {
            const [op, number] = oper.split(" ");
            minHeap.push(Number(number));
        } else if (oper.includes("D")) {
            const [op, number] = oper.split(" ");
            if (number === "1") { 
                minHeap.removeMaxLeaf(number);
            } else { 
                minHeap.pop();
            }
        }
    }
    if(minHeap.size() === 0) {
        return [0,0]
    } else {
        const minValue = minHeap.pop();
        if (minHeap.size() === 0) {
            return [minValue, minValue];
        } else {
            return [minHeap.removeMaxLeaf(), minValue]
        }
    }
}
