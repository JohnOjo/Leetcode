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
 * @return {number}
 */
 var deepestLeavesSum = function(root) {
    const sumObject = {
        sum: 0
    }
    printLevelOrder(root, sumObject)
    
    return sumObject.sum
};

function height(root) {
    if (root == null){
        return 0;
    }
    else {
        const lheight = height(root.left);
        const rheight = height(root.right);

        if (lheight > rheight)
            return (lheight + 1);
        else
            return (rheight + 1);
    }
}

function printCurrentLevel(root , level, sumObject) {
    if (root == null)
        return;
    if (level == 1)
        sumObject.sum += root.val
    else if (level > 1) {
        printCurrentLevel(root.left, level - 1, sumObject);
        printCurrentLevel(root.right, level - 1, sumObject);
    }
}

function printLevelOrder(root, sumObject) {
    const h = height(root);
    printCurrentLevel(root, h, sumObject);
}