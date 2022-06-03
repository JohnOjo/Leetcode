/**
 * @param {number[]} rec1
 * @param {number[]} rec2
 * @return {boolean}
 */
 var isRectangleOverlap = function(rec1, rec2) {  
  if (rec1[0]>=rec2[2] || rec2[0]>=rec1[2]) return false;
  if (rec1[1]>=rec2[3] || rec2[1]>=rec1[3]) return false;
  return true;  
    /*let rec1Corners = [[rec1[0], rec1[1]], [rec1[2], rec1[3]], [rec1[0], rec1[3]], [rec1[2], rec1[1]]]
    let rec2Corners = [[rec2[0], rec2[1]], [rec2[2], rec2[3]], [rec2[0], rec2[3]], [rec2[2], rec2[1]]]
    let rec1Center = [
      Math.max(rec1[0], rec1[2])-Math.min(rec1[0], rec1[2]),
      Math.max(rec1[1], rec1[3])-Math.min(rec1[1], rec1[3])
    ]
    let rec2Center = [
      Math.max(rec2[0], rec2[2])-Math.min(rec2[0], rec2[2]),
      Math.max(rec2[1], rec2[3])-Math.min(rec2[1], rec2[3])
    ]
    
    if (rec1Center[0] <= Math.max(rec2[0], rec2[1]) &&
    rec1Center[0] >= Math.min(rec2[0], rec2[1]) &&
    rec1Center[1] <= Math.max(rec2[1], rec2[3]) &&
    rec1Center[1] >= Math.min(rec2[1], rec2[3]))
    {
        return true;
    }
    if (rec2Center[0] <= Math.max(rec1[0], rec1[1]) &&
    rec2Center[0] >= Math.min(rec1[0], rec1[1]) &&
    rec2Center[1] <= Math.max(rec1[1], rec1[3]) &&
    rec2Center[1] >= Math.min(rec1[1], rec1[3]))
    {
        return true;
    }
                
    for (let index = 0; index < rec1Corners.length; index++) {
      if(inside(rec1Corners[index], rec2)) {
        return true
      }
      if(inside(rec2Corners[index], rec1)) {
        return true
      }  
    }

    return false*/
};

var inside = function(point, rectangle) {
    /*const x = point[0]
    const y = point[1]

    let yInBoundsCheck1 = false
    for (let index = y; index < Math.max(rectangle[1], rectangle[3]); index++) {
      yInBoundsCheck1 = true      
    }
    let yInBoundsCheck2 = false
    for (let index = y; index > Math.min(rectangle[1], rectangle[3]); index--) {
      yInBoundsCheck2 = true      
    }
    let xInBoundsCheck1 = false
    for (let index = x; index < Math.max(rectangle[0], rectangle[2]); index++) {
      xInBoundsCheck1 = true      
    }
    let xInBoundsCheck2 = false
    for (let index = x; index > Math.min(rectangle[0], rectangle[2]); index--) {
      xInBoundsCheck2 = true      
    }

    return (yInBoundsCheck1 && yInBoundsCheck2 && xInBoundsCheck1 && xInBoundsCheck2)*/

    // let inside = false
    // for (let i = 0, j = vertices.length - 1; i < vertices.length; j = i++) {
    //   const xi = vertices[i][0],
    //     yi = vertices[i][1]
    //   const xj = vertices[j][0],
    //     yj = vertices[j][1]
    
    //   const intersect = yi >= y != yj >= y && x <= ((xj - xi) * (y - yi)) / (yj - yi) + xi
    //   if (intersect) inside = !inside
    // }
    // return inside
}

rec1 = [7,8,13,15]
rec2 = [10,8,12,20]
console.log(isRectangleOverlap(rec1, rec2))