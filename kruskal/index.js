/**
 * 최소신장 트리(Kruskal)
 *
 * 섬 연결하기
 * n 개의 섬 사이에 다리를 건설하는 비용이 주어질 때,
 * 최소의 비용으로 모든 섬이 서로 통행 가능하도록 만들 때 필요한 최소 비용 return 하기
 *
 */

function find(parent, x) {
  if (parent[x] === x) {
    return x;
  }

  return (parent[x] = find(parent, parent[x]));
}

function union(parent, a, b) {
  a = find(parent, a);
  b = find(parent, b);
  if (a < b) {
    parent[b] = a;
  } else {
    parent[a] = b;
  }
}

function compare(parent, a, b) {
  a = find(parent, a);
  b = find(parent, b);
  return a === b;
}

function solution(n, costs) {
  let answer = 0;
  const sortedCosts = costs.sort((a, b) => a[2] - b[2]);
  const parent = Array.from({ length: n }, (_, i) => i);

  for (const [a, b, cost] of sortedCosts) {
    if (!compare(parent, a, b)) {
      answer += cost;
      union(parent, a, b);
    }
  }

  return answer;
}
