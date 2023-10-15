// 최소값 구하기 https://school.programmers.co.kr/learn/courses/30/lessons/12941?language=javascript
// 예시를 보니 가장 작은 값과 큰 값을 곱하는 것 같다.
// sort로 정렬 계산

function solution(A, B) {
    var answer = 0;
    A.sort((a, b) => a - b);
    B.sort((a, b) => b - a);
    for (i = 0; i < A.length; i++) {
        answer += A[i] * B[i]
    }

    return answer;
}
let A = [15, 2, 1]
let B = [10, 10, 12]
console.log(solution(A, B)) 