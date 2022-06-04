/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
 var isSubtree = function(root, subRoot) {
    const rootValues = []
    isSubtreeRecursive(root, rootValues)
    const subRootValues = []
    isSubtreeRecursive(subRoot, subRootValues)
    console.log(rootValues.toString())
    console.log(subRootValues.toString())
    return rootValues.toString().includes(subRootValues.toString())
};

var isSubtreeRecursive = function(node, nodeValues) {
    nodeValues.push(node.val)

    if(node.left)
        isSubtreeRecursive(node.left, nodeValues)
    if(node.right)
        isSubtreeRecursive(node.right, nodeValues)

    if(node.left == null && node.right == null ){
        return
    }
};

isSubtree(null, null)