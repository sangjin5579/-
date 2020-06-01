function solution(genres, plays) {
    const sumGenres = genres.reduce((sum, gen, idx)=>{
        if(!sum[gen]){
            sum[gen] = {
                play:0,
                list:[]
            };
        }
        sum[gen].play += plays[idx];
        sum[gen].list.push([idx, plays[idx]]);
    
        return sum
    },{})

    //내림차순정렬
    //Object.values()는 열거가능한 속성의 값들로 이루어진 배열 return
    const sumGenList = Object.values(sumGenres).sort((gen1, gen2) => {
        return gen2.play - gen1.play;
    })
    
    const answer = sumGenList.reduce((ans, genres) => {
        //장르 내에서 플레이수가 많은 순서로 정렬
        genres.list.sort((a,b) => b[1]-a[1]);

        ans.push(genres.list[0][0]);
        //장르당 1~2개만 넣을수 있음
        if(genres.list.length > 1) {
            ans.push(genres.list[1][0]);
        }

        return ans
    },[])

    return answer;
  }

  console.log(solution(['classic', 'pop', 'classic', 'classic', 'pop'], [500, 600, 150, 800, 2500]))