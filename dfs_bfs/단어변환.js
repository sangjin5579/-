function bfs(search, target, words, count, result) {
    count++
    let queue = []
    //words형제 순회
    for (let i = 0; i < words.length; i++) {
      //일치하지 않는 단어개수 탐색
      let unmatch = [...words[i]].reduce((acc, word, idx) => {
        return word !== search[idx] ? acc + 1 : acc
      }, 0)
  
      //words중 search의 다음단계가 될 수 있다면
      if (unmatch === 1) {
        if (target === words[i]) {
          //다음단계의 글자가 target인 경우 result 배열에 단계 추가
          result.push(count)
        }
        let clone = words.slice()
        clone.splice(1, i)
        //다음단계가 될 모든 word정보를 queue에 담는다.
        queue.push({
          search: words[i],
          words: clone,
        })
      }
    }
  
    //이후 아래로 내려감
    if (queue.length) {
        // count++
      for (let i = 0; i < queue.length; i++) {
        bfs(queue[i].search, target, queue[i].words, count, result)
      }
    }
  }
  
  function solution(begin, target, words) {
    //result를 배열로 선언한 이유는 target에 도달할 수 있는 경우의 수가 다양하기 때문에 각각 도달단계를 담기 위함
    var result = []
    //target이 단어중에 존재하지 않아 바꿀 수 없는 경우
    if (words.findIndex(word => word === target) < 0) {
      return 0
    }
    //너비우선탐색 시행(재귀함수)
    bfs(begin, target, words, 0, result);
    return Math.min.apply(null, result);
  }

  console.log(solution('hit', 'cog', ['hot', 'dot', 'dog', 'lot', 'log', 'cog']))