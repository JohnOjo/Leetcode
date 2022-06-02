var kClosest = function(points, k) {
    var values = []
    var newCoordiantes = []
    points.forEach(coordiantes => {
      values.push(Math.sqrt((0-coordiantes[0])**2 + (0-coordiantes[1])**2))
    });
    for (let i = 0; i < k; i++) {
      const minimum = Math.min(...values)
        const index = values.indexOf(minimum)
        newCoordiantes.push(...points.splice(index, 1));   
        values.splice(index, 1)        
    }
    
    console.log(newCoordiantes)
    return newCoordiantes;
}

kClosest([[3,3],[5,-1],[-2,4]], 2)