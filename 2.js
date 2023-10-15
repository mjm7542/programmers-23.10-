// 올바른 괄호 https://school.programmers.co.kr/learn/courses/30/lessons/12909
// 시작은 반드시 "("
// "(" 와 ")" 갯수가 맞아야 한다. 카운터를 계산해서 0이면 true

function solution(s) {
    if (s[0] === ")" || s.length % 2 !== 0) return false

    let arr = s.split("")
    let count = 0
    for (i = 0; i < arr.length; i++) {
        if (count === 0 && arr[i] === ")") return false
        if (arr[i] === "(") {
            count++
        } else { count-- }
    }

    return count === 0 ? true : false
}


// 다른 사람 풀이 
function solution2(s) {
    let cum = 0
    // 이터러블이니까 for of 문으로 처리
    for (let paren of s) {
        cum += paren === '(' ? 1 : -1
        // ")" 로 시작하면 음수가 되어 false
        if (cum < 0) {
            return false
        }
    }
    return cum === 0 ? true : false;
}

// 깔끔하다 