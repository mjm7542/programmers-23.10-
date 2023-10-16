// 다음 큰 숫자 https://school.programmers.co.kr/learn/courses/30/lessons/12911
// 숫자를 이진법으로 바꾸고 
// 숫자를 1씩 증가시키면서 이진법일 때 1의 숫자를 비교

function solution(n) {
    var answer = 0;
    let number = n.toString(2)
    let count = number.split('1').length - 1
    for (i = n + 1; ; i++) {
        if (count === i.toString(2).split('1').length - 1) {
            answer = i
            break
        }
    }
    return answer;
}
console.log(solution(78))