/**
 * 트라이
 *  - 문자열을 저장하고 효율적으로 탐색하기 위한 트리 형태의 자료구조
 *  - 검색어 자동완성, 사전 찾기 등에 응용 될 수 있다.
 *  - 문자열을 탐색할 때 단순하게 비교하는 것보다 효율적으로 찾을 수 있다.
 *  - L이 문자열의 길이일 때 탐색, 삽이비은 O(L) 만큼 걸린다.
 *  - 대신 각 정점이 자식에 대한 링크를 전부 가지고 있기에 저장 공간을 더 많이 사용한다.
 *
 * 구조
 *  - 루트는 비어있다.
 *  - 각 간선(링크)은 추가될 문자를 키로 가진다.
 *  - 각 정점은 이전 정점의 값 + 간선의 키를 값으로 가진다.
 *  - 해시 테이블과 연결 리스트를 이용하여 구현할 수 있다.
 */
function makeTrie(words) {
  const root = {};
  for (const word of words) {
    let current = root;
    for (const letter of word) {
      if (!current[letter]) current[letter] = [0, {}];
      current[letter][0] = 1 + (current[letter][0] || 0);
      current = current[letter][1];
    }
  }
  return root;
}
function solution(words) {
  let answer = 0;
  const trie = makeTrie(words);

  for (const word of words) {
    let count = 0;
    let current = trie;
    for (const [index, letter] of [...word].entries()) {
      count += 1;
      if (current[letter][0] <= 1) {
        break;
      }
      current = current[letter][1];
    }
    answer += count;
  }
  return answer;
}
