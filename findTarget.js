var findTarget = function(root, k) {
    const values = []
  
    if (root) {
        recursiveFindTarget(root, values)
    }
  
    for (const value of values) {
      if(values.filter((v) => v + value === k).length > 0){
        return true
      }
    }
  
    return false
  };
  
  var recursiveFindTarget = function(node, values) {
    node.val != null && values.push(node.val)
  
    if(node.left) {
      findTarget(node.left, values)
    }
  
    if(node.right) {
      findTarget(node.right, values)
    }
  
    if(!node.left && !node.right) {
      return
    }
  };