var findTarget = function(root, k) {
  const values = []
  
  if (root) {
      recursiveFindTarget(root, values)
  }
  
  let i = 0
  for (const value of values) {
    if(values.find((v, index) => v + value === k && index !== i)){
      return true
    }
    i++
  }

  return false
};

var recursiveFindTarget = function(node, values) {
  values.push(node.val)

  if(node.left) {
    recursiveFindTarget(node.left, values)
  }

  if(node.right) {
    recursiveFindTarget(node.right, values)
  }

  if(!node.left && !node.right) {
    return
  }
};

console.log(findTarget(null, 1))