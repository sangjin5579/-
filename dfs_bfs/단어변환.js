function bfs(search, target, words, count, result) {
    let queue = []
    //형제부터 우선 탐색
    for (let i = 0; i < words.length; i++) {
      let unmatch = [...words[i]].reduce((acc, word, idx) => {
        return word !== search[idx] ? acc + 1 : acc
      }, 0)
  
      //search를 words중 하나로 바꿀 수 있는 경우
      if (unmatch === 1) {
        if (target === words[i]) {
          //바꾼글자가 target인 경우 result에 추가
          result.push(count + 1)
        }
        //얕은복사인데 클론을 제거하면 원본은 남아있나??
        let clone = words.slice()
        clone.splice(1, i)
        queue.push({
          search: words[i],
          words: clone,
        })
      }
    }
  
    //이후 아래로 내려감
    if (queue.length) {
      count++
      for (let i = 0; i < queue.length; i++) {
        bfs(queue[i].search, target, queue[i].words, count, result)
      }
    }
  }
  
  function solution(begin, target, words) {
    var result = []
    //target이 단어중에 존재하지 않아 바꿀 수 없는 경우
    if (words.findIndex(word => word === target) < 0) {
      return 0
    }
    //너비우선탐색 시행(재귀함수)
    bfs(begin, target, words, 0, result);
    //min 메소드는 배열을 매개변수로 받을 수 없기 때문에 apply를 사용해서 받는다.
    return Math.min.apply(null,result)
  }

  console.log(solution('hit', 'cog', ['hot', 'dot', 'dog', 'lot', 'log', 'cog']))