// 숫자의 표현 https://school.programmers.co.kr/learn/courses/30/lessons/12924
// 주어진 자연수를 연속되는 자연수들의 합으로 표현할 수 있는 방법의 수는 주어진 자연수의 약수 중에서 홀수인 수의 개수와 같다.
// 이 공식이 핵심이네 
// 이게 아니면 1부터 순서대로 더하는 2중 반복문 사용.

function solution(n) {
    var answer = 0;
    for (i = 3; i <= n; i += 2){
        if(n%i===0) answer++
    }
        return answer+1;
}

console.log(solution(30))