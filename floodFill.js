/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
 var floodFill = function(image, sr, sc, color) {
    const oldColor = image[sr][sc]
    if(oldColor === color){
       return image
    }
    
    if(image[0].length === 1 && image.length === 1){
        image[sr][sc] = color
        return image
    }
    
    floodFillRecursive(image, sr, sc, oldColor, color, 0)
    
    return image
};

const floodFillRecursive = function(image, sr, sc, oldColor, color, timesEndHit) {
    const increment = 1
    const rowLength = image.length
    const columnLength = image[0].length
    image[sr][sc] = color
    
    if(sr+increment < rowLength && image[sr+increment][sc] === oldColor){
        floodFillRecursive(image, sr+increment, sc, oldColor, color, timesEndHit)
    }
    else{
        timesEndHit++
    }
    
    if(sr-increment >= 0 && image[sr-increment][sc] === oldColor){
        floodFillRecursive(image, sr-increment, sc, oldColor, color, timesEndHit)        
    }
    else{
        timesEndHit++
    }
    
    if(sc+increment < columnLength && image[sr][sc+increment] === oldColor){
        floodFillRecursive(image, sr, sc+increment, oldColor, color, timesEndHit)
    }
    else{
        timesEndHit++
    }
    
    if(sc-increment >= 0 && image[sr][sc-increment] === oldColor){
        floodFillRecursive(image, sr, sc-increment, oldColor, color, timesEndHit)        
    }
    else{
        timesEndHit++
    }
    
    if(timesEndHit === 4){
       return
    }
}