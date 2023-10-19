// 영어 끝말잇기 https://school.programmers.co.kr/learn/courses/30/lessons/12981
// 다시 나오는 단어 찾기 - 새로운 배열에 담고 indexOf로 찾아야할까? 
// 탈락한 사람은 몇번째인지 - 탈락했을 때 배열의 길이를 n으로 나눈 나머지 +1
// 사람 수대로 사이클 돌아가면 카운트 배열의 길이를 나눈 몫

function solution(n, words) {
    var answer = [];
    let failNumber, failCount
    for (i = 0; i < words.length; i++) {
        if (answer.indexOf(words[i]) !== -1) break
        if (i > 0 && words[i - 1][words[i - 1].length - 1] !== words[i][0]) break
        answer.push(words[i])
    }
    failNumber = answer.length % n + 1
    failCount = Math.floor(answer.length / n + 1)

    return answer.length === words.length ? [0, 0] : [failNumber, failCount];
}

let n = 2, words = ["hello", "one", "even", "never", "now", "world", "draw"]
console.log(solution(n, words))


function solution2(n, words) {
    var answer = new Map()
    let arr = []
    let count
    for (i = 0; i < words.length; i++) {
        answer.set((i + 1) % n, (answer.get((i + 1) % n) || 0) + 1)
        if (arr.indexOf(words[i]) !== -1) {
            return count = [(i + 1) % n === 0 ? n : (i + 1) % n, answer.get((i + 1) % n)]
        }
        if (i > 0 && words[i - 1][words[i - 1].length - 1] !== words[i][0]) {
            return count = [(i + 1) % n === 0 ? n : (i + 1) % n, answer.get((i + 1) % n)]
        }
        arr.push(words[i])
    }


    return [0, 0];
}

function solution3(n, words) {
    let answer = 0;
    words.reduce((prev, now, idx) => {
        answer = answer || ((words.slice(0, idx).indexOf(now) !== -1 || prev !== now[0]) ? idx : answer);
        return now[now.length-1];
    }, "")

    return answer ? [answer%n+1, Math.floor(answer/n)+1] : [0,0];
}