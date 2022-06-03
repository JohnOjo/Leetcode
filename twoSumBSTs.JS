/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @param {number} target
 * @return {boolean}
 */
 var twoSumBSTs = function(root1, root2, target) {
    const values1 = []
    const values2 = []
  
  if (root1) {
      recursiveFindTarget(root1, values1)
  }
  if (root2) {
      recursiveFindTarget(root2, values2)
  }
  
  let i = 0
  for (const value of values1) {
    if(values2.find((v, index) => v + value === target)){
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