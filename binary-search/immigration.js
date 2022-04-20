/**
 * 입국심사
 *
 * 로그시간 = 이진탐색
 * times -> 선형 로그 시간으로 충분히 가능
 *
 * 이진탐색에서 특정 값을 찾는 문제가 아니라, 최소 몇분에 심사가 끝나는가?
 * 결정문제 = 이진탐색 = 파라메트릭 서치(parametric search)라고도 한다.
 *
 * 최소 1분에서 10억분 * n 사이
 * 면접관들이 몇명을 처리하는가?
 * 처리 가능한 입국자 n보다 작다면, 분을 올려야 되고, 입국자가 n보다 크다면 분을 낮춰야 한다.
 * 면접관이 시간대비 몇 명을 처리할 수 있는가?
 * 시간/심사시간 = 심사관 당 처리 가능한 입국자 수
 *
 */

function solution(n, times) {
  //먼저 시간을 정렬
  const sortedTimes = times.sort((a, b) => a - b);
  let left = 1;
  let right = sortedTimes[sortedTimes.length - 1] * n;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const sum = times.reduce((acc, time) => acc + Math.floor(mid / time), 0);
    if (sum < n) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return left;
}
