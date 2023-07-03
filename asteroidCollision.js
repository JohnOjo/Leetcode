/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
 var asteroidCollision = function(asteroids) {
    const asteroidsSize = asteroids.map((a) => Math.abs(a))
    const asteroidsLength = asteroids.length
    for (let i = 0; i < asteroids.length;) {
        const currentAsteroid = asteroids[i]
        const nextAsteroid = asteroids.find((a, index) => a != null && index > i);
        const currentAsteroidSize = asteroidsSize[i]
        const nextAsteroidSize = asteroidsSize.find((a, index) => a != null && index > i);

        if(currentAsteroid > 0 && nextAsteroid < 0) {
            if (currentAsteroidSize > nextAsteroidSize) {
                const indexToRemove = asteroids.slice(i, asteroidsLength).indexOf(nextAsteroid)
                asteroids[i+indexToRemove] = null
                asteroidsSize[i+indexToRemove] = null
                i = i + indexToRemove            
            }
            else if (currentAsteroidSize < nextAsteroidSize) {
                asteroids[i] = null
                asteroidsSize[i] = null
                const reversedSlice = asteroids.slice(0, i+1).reverse()
                const astroidIndexToGoBackTo = reversedSlice.indexOf(reversedSlice.find((a) => a != null))
                i = reversedSlice.length - astroidIndexToGoBackTo -1
            }
            else if (currentAsteroidSize === nextAsteroidSize) {
                asteroids[i] = null
                asteroidsSize[i] = null
                const indexToRemove = asteroids.slice(i, asteroidsLength).indexOf(nextAsteroid)
                asteroids[i+indexToRemove] = null
                asteroidsSize[i+indexToRemove] = null
                const reversedSlice = asteroids.slice(0, i+1).reverse()
                const astroidIndexToGoBackTo = reversedSlice.indexOf(reversedSlice.find((a) => a != null))
                i = reversedSlice.length - astroidIndexToGoBackTo -1
            }
        } 
        else {
            i++
        }
    }

    const output = asteroids.filter((asteroid) => asteroid != null);

    return output;
};