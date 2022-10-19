/**
 * @param {number[]} prices
 * @return {number}
 */
 var maxProfit = function(prices) {
    const pricesLength = prices.length
    if(pricesLength === 1){
       return 0
    }
    
    let maxProfit = 0
    
    for(let i = 0; i<pricesLength-1; i++){
        if(prices[i+1]>prices[i]){
            maxProfit += prices[i+1] - prices[i]
        }
    }
    
    return maxProfit
};
//solve in 18 min