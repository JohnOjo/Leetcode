/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
 var swapNodes = function(head, k) {
    let node = head
    let getEndNodeIndex = 1
    let nodeAddressFromBeginingToSwap
    let valueFromBeginingToSwap
    
    while(true){
        if(getEndNodeIndex === k){
            nodeAddressFromBeginingToSwap = node
            valueFromBeginingToSwap = node.val           
        }
        
        if(node.next){
            node = node.next
            getEndNodeIndex++
        }
        else {
            break
        }
    }
    const indexFromEndToSwap = getEndNodeIndex - k
    
    node = head
    for(let i = 0; i<indexFromEndToSwap; i++){
        node = node.next
    }
    const nodeAddressFromEndToSwap = node
    const valueFromEndToSwap = node.val
    
    nodeAddressFromEndToSwap.val = valueFromBeginingToSwap
    nodeAddressFromBeginingToSwap.val = valueFromEndToSwap
    
    return head
};