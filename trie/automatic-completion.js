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
  const root = {}; //루트 노드
  for (const word of words) {
    //trie를 구성하기 위한 루프
    let current = root;
    for (const letter of word) {
      //단어의 글자 하나씩 추출
      if (!current[letter]) current[letter] = [0, {}]; //값을 넣는다. 첫번째는 학습된 단어가 몇개인지, 두번째는 트리구조로 이용할 노드 값 사용
      current[letter][0] = 1 + (current[letter][0] || 0); // 카운팅 +1
      current = current[letter][1]; // current는 letter에 해당하는 노드로 이동
    }
  }
  return root;
}
function solution(words) {
  let answer = 0;
  const trie = makeTrie(words); //trie 자료구조 생성

  for (const word of words) {
    let count = 0;
    let current = trie; //루트부터 시작
    for (const [index, letter] of [...word].entries()) {
      count += 1;
      if (current[letter][0] <= 1) {
        //단어가 하나 이하로 남을경우 종료
        break;
      }
      current = current[letter][1]; // 다음노드로 이동
    }
    answer += count;
  }
  return answer;
}
