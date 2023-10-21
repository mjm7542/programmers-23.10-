// 구명보트 https://school.programmers.co.kr/learn/courses/30/lessons/42885
// 리미트를 초과하지 않는 최대의 무게를 구하고
// 리미트를 초과하면 구명보트는 그만큼 더 필요하다
// 일단 정렬해서 가장 작은 거와 가장 리미트에 가까운 것을 탈출 시킨다

let people = [0, 1, 2, 3, 4], limit = 4;
console.log(solution(people, limit))

//? 초안
// function solution(people, limit) {
//     people.sort((a, b) => a - b)
//     let idx = 1, answer = 0;

//     while (people.length < 1) {

//         if (people[0] + people[idx] > limit) {
//             people.splice(idx - 1, 1)
//             people.splice(0, 1)
//             answer++
//             idx = 1
//         }
//         idx++
//     }

//     return answer;
// }
//! 여기서 하나의 수가 리미트를 초과한 경우, 두 개를 더하는 첫 시도부터 리미트를 초과한 경우 추가 

//? 수정안 
// function solution(people, limit) {
//     people.sort((a, b) => a - b)
//     let idx = people.length - 1, answer = 0;
//     while (people.length > 1) {
//         if (people[0] + people[idx] < limit) {
//             people.splice(idx, 1)
//             people.shift()
//             answer++
//             idx = people.length - 1

//         } else { idx-- }
//     }

//     return people.length === 0 ? answer : answer + 1;
// }
//! 결과는 맞음 시간이 초과됨
//! 원인은 정렬하는 시간?, 반복문 시간? 

//? 보완
// function solution(people, limit) {
//     people.sort((a, b) => a - b)
//     let idx = 1, answer = 0;
//     while (people.length > 1 && people[0] + people[1] <= limit) {
//         if (people[0] + people[idx] > limit) {
//             if (idx === 1) {
//                 people.shift()
//                 answer++
//             } else {
//                 people.splice(idx - 1, 1)
//                 people.shift()
//                 answer++
//                 idx = 1
//             }
//         } else { idx++ }
//     }

//     return people.length === 0 ? answer : answer + people.length;
// }
//! 불필요한 반복문 시간을 줄였다
//! 조금 나아졌는데 시간이 초과된다

//! shift가 시간을 많이 잡아먹는다 배열을 땡겨야 하니까

//? 이건 정답
function solution(people, limit) {
    var answer = 0;
    people.sort((a, b) => b - a)
    for (var i = 0, j = people.length - 1; i <= j; i++) {
        console.log(people[j])
        if (people[i] + people[j] <= limit) j--
        answer++
    }
    return answer;
}
// 가장 작은 값과 더 했을 때 두명이 탈 수 있는 경우면 같이 빠지고, 한 명만 탈 수 있으면 가장 큰 값만 빠진다
// 하나만 남은 경우 answer++ 종료, i=j
// 남은 두 숫자가 리미트보다 작은 경우엔  i=j가 없음
// 핵심은 배열을 재정렬 하지 않는다. 그렇게 하기 위해서 가장 작은 값부터 가장 큰 값을 더해가며 교차 시킨다. 

//? 정답 변형 
function solution(people, limit) {
    var answer = 0;
    people.sort((a, b) => a - b)
    for (i = 0, j = people.length - 1; i <= j; j--) {
        console.log(answer)
        console.log('i:', i, 'j:', j)
        if (people[i] + people[j] <= limit) i++
        answer++
    }
    return answer;
}
