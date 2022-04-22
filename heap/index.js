/**
 * 힙
 *  - 우선순위가 높은 요소가 먼저 나가는 특징을 가진다
 *  - 루트가 가장 큰 값이 되는 최대 힙(Max Heap)과 루트가 가장 작은 값이 되는 최소 힙(Min Heap)이 있다.
 *  - 아쉽게도 자바스크립트에선 직접 구현해서 사용해야 한다.
 *
 * 힙 요소 추가 알고리즘
 *  - 요소가 추가될 때는 트리의 가장 마지막에 정점에 위치한다.
 *  - 추가 후 부모 정점보다 우선순위가 높다면 부모 정점과 순서를 바꾼다.
 *  - 이 과정을 반복하면 결국 가장 우선순위가 높은 정점이 루트가 된다.
 *  - 완전 이진 트리의 높이는 log N 이기에 힙의 요소 추가 알고리즘은 O(log N) 시간 복잡도를 가진다.
 *
 * 힙 요소 제거 알고리즘
 *  - 요소 제거는 루트 정점만 가능하다.
 *  - 루트 정점이 제거된 후 가장 마지막 정점이 루트에 위치한다.
 *  - 루트 정점의 두 자식 정점 중 더 우선순위가 높은 정점과 바꾼다.
 *  - 두 자식 정점이 우선순위가 더 낮을 때 까지 반복한다.
 *  - 완전 이진 트리의 높이는 log N이기에 힙의 요소 제거 알고리즘은 O(log N) 시간복잡도를 가진다.
 *
 * 배상 비용 최소화 문제풀이
 * 배상 비용은 각 요소를 제곱하게 되므로 최대한 각 요소를 골고루 처리하는 것이 가장 배상 비용을 최소화 할 수 있는 방법
 * 매 루프마다 가장 큰 작업을 찾아서 치리. 매번 큰 값과 작은값을 알아야 한다면 무조건 heap을 사용하는것이 좋다.
 */

//최대 힙 구현
class MaxHeap {
  constructor() {
    this.heap = [null];
  }
  push(value) {
    this.heap.push(value);
    let currentIndex = this.heap.length - 1;
    let parentIndex = Math.floor(currentIndex / 2);

    while (parentIndex !== 0 && this.heap[parentIndex] < value) {
      const temp = this.heap[parentIndex];
      this.heap[parentIndex] = value;
      this.heap[currentIndex] = temp;

      currentIndex = parentIndex;
      parentIndex = Math.floor(currentIndex / 2);
    }
  }

  pop() {
    if (this.heap.length === 2) return this.heap.pop();

    const returnValue = this.heap[1];
    this.heap[1] = this.heap.pop();

    let currentIndex = 1;
    let leftIndex = 2;
    let rightIndex = 3;

    while (
      this.heap[currentIndex] < this.heap[leftIndex] ||
      this.heap[currentIndex] < this.heap[rightIndex]
    ) {
      if (this.heap[leftIndex] < this.heap[rightIndex]) {
        const temp = this.heap[currentIndex];
        this.heap[currentIndex] = this.heap[rightIndex];
        this.heap[rightIndex] = temp;
        currentIndex = rightIndex;
      } else {
        const temp = this.heap[currentIndex];
        this.heap[currentIndex] = this.heap[leftIndex];
        this.heap[leftIndex] = temp;
        currentIndex = leftIndex;
      }
      leftIndex = currentIndex * 2;
      rightIndex = currentIndex * 2 + 1;
    }
    return returnValue;
  }
}

function solution(no, works) {
  // 모든 작업의 합보다 no가 크면 배상 비용을 낼 필요가 없다.
  if (works.reduce((a, b) => a + b) <= no) {
    return 0;
  }
  const heap = new MaxHeap();
  for (const work of works) {
    heap.push(work);
  }
  //no 만큼 루프 돌면서 가장 큰 값을 빼서 처리후 다시 push
  for (let i = 0; i < no; i += 1) {
    heap.push(heap.pop() - 1);
  }
  //남은 요소에 제곱한 값들의 합을 구한 후 반환
  return heap.heap.reduce((a, b) => a + b * b);
}
