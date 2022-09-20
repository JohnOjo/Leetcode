/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
 var isSameTree = function(p, q) {
    const pValues = []
    const qValues = []
    
    p && isSameTreeRecursive(p, pValues)
    q && isSameTreeRecursive(q, qValues)
    
    const pValuesSize = pValues.length
    const qValuesSize = qValues.length
    console.log(pValues)
    console.log(qValues)
    
    if(pValuesSize !== qValuesSize){
       return false
    }
    
    for(let i = 0; i<pValuesSize; i++){
        if(pValues[i] !== qValues[i]){
           return false
        }
    }
    return true
};

const isSameTreeRecursive = function(node, values) {
    values.push(node.val)
    
    if(node.right && !node.left){
        values.push(null)
    }
    
    if(node.right){
        isSameTreeRecursive(node.right, values)
    }
    
    if(node.left){
        isSameTreeRecursive(node.left, values)
    }
    
    if(!node.left && !node.right){
        return
    }
}