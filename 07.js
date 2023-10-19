// 점프와 순간 이동 https://school.programmers.co.kr/learn/courses/30/lessons/12980
// 어떤 규칙일까 발견했다
// 홀수면 -1하고 짝수는 2로 계속 나눈다. 
// 총 -1을 몇번 했는지와 마지막에 1을 더하면 되겠다.


function solution1(n) {
    var ans = 0;

    if (n === 1) return n

    while (n > 1) {
        if (n % 2 !== 0) {
            ans++
            n = n - 1
        }
        n = n / 2
    }

    return ans + 1;
}

// 어떠한 수를 2로 나누고, 그 몫을 또 2로 계속해서 나누면서 나오는 나머지들의 모든 합은 어떠한 수를 이진수로 변환한 수의 1의 개수와 같다
function solution2(n){
    if(n === 1) return 1;
    const nArr = Array.from(n.toString(2));
    return nArr.reduce((a,b)=>(+a)+(+b));
}

// 위에를 한 줄로 
function solution3(n)
{
    return n.toString(2).replace(/0/g,"").length
}
