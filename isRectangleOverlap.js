/**
 * @param {number[]} rec1
 * @param {number[]} rec2
 * @return {boolean}
 */
 var isRectangleOverlap = function(rec1, rec2) {    
    let rec1Corners = [[rec1[0], rec1[1]], [rec1[2], rec1[3]], [rec1[0], rec1[3]], [rec1[2], rec1[1]]]
    let rec2Corners = [[rec2[0], rec2[1]], [rec2[2], rec2[3]], [rec2[0], rec2[3]], [rec2[2], rec2[1]]]
    //console.log(rec1Corners)
    //console.log(rec2Corners)
    for (const rec1Corner of rec1Corners) {
        if(inside(rec1Corner, rec2Corners)){
            //console.log(true)
            return true
        }
    }
    for (const rec2Corner of rec2Corners) {
        if(inside(rec2Corner, rec1Corners)){
            //console.log(true)
            return true
        }
    }

    return false
};

var inside = function(point, vertices) {
    const x = point[0]
    const y = point[1]
    
    let inside = false
    for (let i = 0, j = vertices.length - 1; i < vertices.length; j = i++) {
      const xi = vertices[i][0],
        yi = vertices[i][1]
      const xj = vertices[j][0],
        yj = vertices[j][1]
    
      const intersect = yi > y != yj > y && x < ((xj - xi) * (y - yi)) / (yj - yi) + xi
      if (intersect) inside = !inside
    }
    return inside
}

rec1 = [0,0,2,2], rec2 = [1,1,3,3]
//console.log(isRectangleOverlap(rec1, rec2))