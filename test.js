/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
 var asteroidCollision = function(asteroids) {
    const asteroidsSize = asteroids.map((a) => Math.abs(a))
    const asteroidsLength = asteroids.length
    for (let i = 0; i < asteroids.length;) {
        const currentAsteroid = asteroids.find((a) => a != null)
        const nextAsteroid = asteroids.find((a, index) => a != null && index > i);
        const currentAsteroidSize = asteroidsSize.find((a) => a != null)
        const nextAsteroidSize = asteroidsSize.find((a, index) => a != null && index > i);

        if(currentAsteroid > 0 && nextAsteroid < 0) {
            if (currentAsteroidSize > nextAsteroidSize) {
                const indexToRemove = asteroids.slice(i, asteroidsLength).indexOf(nextAsteroid)
                asteroids[i+indexToRemove] = null
                asteroidsSize[i+indexToRemove] = null
                i = i + indexToRemove            
            }
            else if (currentAsteroidSize < nextAsteroidSize) {
                const indexToRemove = asteroids.indexOf(currentAsteroid)
                asteroids[indexToRemove] = null
                asteroidsSize[indexToRemove] = null
                i = indexToRemove + 1
            }
            else if (currentAsteroidSize === nextAsteroidSize) {
                asteroids[i] = null
                asteroidsSize[i] = null
                const indexToRemove = asteroids.slice(i, asteroidsLength).indexOf(nextAsteroid)
                asteroids[i+indexToRemove] = null
                asteroidsSize[i+indexToRemove] = null
                i = i + indexToRemove  
            }
        } 
        else {
            i++
        }
    }

    const output = asteroids.filter((asteroid) => asteroid != null);

    return output;
};

asteroids = [10,2,-5]
console.log(asteroidCollision(asteroids))