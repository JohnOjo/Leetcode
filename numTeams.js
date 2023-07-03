/**
 * @param {number[]} rating
 * @return {number}
 */
 var numTeams = function(rating) {
    const ratingLength = rating.length
    let numberOfTeams = 0
    
    for(let i = 1; i<ratingLength-1; i++){        
        const pivot = rating[i]
        let leftSlice = rating.slice(0,i)        
        let rightSlice = rating.slice(i+1,ratingLength)
        
        let validLeftSliceRatings = leftSlice.filter((r) => r < pivot)
        let validRightSliceRatings = rightSlice.filter((r) => r > pivot)        
        
        if(validLeftSliceRatings.length > 0 && validRightSliceRatings.length > 0){
            validLeftSliceRatings.forEach((leftRating) => {
                validRightSliceRatings.forEach((rightRating) => {
                    numberOfTeams++
                })
            })
        }
        
        validLeftSliceRatings = leftSlice.filter((r) => r > pivot)
        validRightSliceRatings = rightSlice.filter((r) => r < pivot)  
        leftSlice = null
        rightSlice = null
        
        if(validLeftSliceRatings.length > 0 && validRightSliceRatings.length > 0){
            validLeftSliceRatings.forEach((leftRating) => {
                validRightSliceRatings.forEach((rightRating) => {
                    numberOfTeams++
                })
            })
        }
    }
    
    return numberOfTeams
};