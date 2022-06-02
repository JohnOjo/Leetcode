/**
 * @param {number[][]} dominoes
 * @return {number}
 */
 var numEquivDominoPairs = function(dominoes) {
    let dominoesSortedInternally = dominoes.map((domino)=>{
      return domino.sort().toString()
    })
  
    let sum = 0;
    let dominoSet = new Set(dominoesSortedInternally)
    dominoSet.forEach(domino => {
      const size = dominoes.filter((d) => d.toString() === domino).length
      let n = size - 1
      sum += (n**2+n)/2
    });
    return sum
  };
  
  dominoes = [[1,2],[1,2],[1,1],[1,2],[2,2]]
  
  console.log(numEquivDominoPairs(dominoes))