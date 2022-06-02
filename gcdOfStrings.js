var gcdOfStrings = function(str1, str2) {
  
    let t1, t2
    if(str1.includes(str2)) {
      t1 = str1
      t2 = str2
    }
    else if(str2.includes(str1)) {
      t1 = str2
      t2 = str1
    }
    else {
      return ''
    }
    
    let x = ''
    if(t1.length % t2.length === 0){
      return t2
    }
  
    let index = 0
    for (const t of t1) {
      if(index+1 !== t2.length && !(t2.charAt(index) === t2.charAt(0) && t2.charAt(index+1) !== t2.charAt(0))) {
        x += t
      }
      else{
        return x
      }
      index++
    }
    
    // let t1Set = new Set(str1.split(''))
    // let t2Set = new Set(str2.split(''))
    // if(Array.from(t1Set).join('') === Array.from(t2Set).join('')){
    //   return Array.from(t1Set).join('');
    // }
    // else {
    //   return ''
    // }
  };
  
  str1 = "TAUXXTAUXXTAUXXTAUXXTAUXX"
  str2 ="TAUXXTAUXXTAUXXTAUXXTAUXXTAUXXTAUXXTAUXXTAUXX"
  console.log(gcdOfStrings(str1, str2))