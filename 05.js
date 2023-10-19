// 피보나치 수 https://school.programmers.co.kr/learn/courses/30/lessons/12945
// 문제가 처음이 잘 이해되지 않았는데 자세히 보니 그냥 n번째 피보나치 수를 구하는 것이다.
// 정확히는 n번째 피보나치 수를 1234567으로 나눈 나머지
// 공식이 있겠지만 내가 풀어본 것은 일단 배열에 담자

// 수열 자체는 잘구했다 그런데 내가 문제를 잘 못 이해한 것인가?



function solution(n) {
    let arr = [0, 1]
    for (i = 2; i <= n; i++) {
        arr[i] = arr[i - 2] + arr[i - 1]
    }
    return arr[n] % 1234567;
}

// 이게 정답인 이유? 
function solution2(n) {
    let fib = [0, 1];
    for (let i = 2; i <= n; i++) {
        // 이렇게하면 피보나치 수열 자체가 틀려지는데
        fib[i] = (fib[i - 1] + fib[i - 2]) % 1234567;
    }
    return fib[n];
}
console.log(solution2(1000))


