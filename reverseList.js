/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var reverseList = function(head) {
    if(!head)
        return head
    
    let node = head
    const nodeArray = [head.val]
    while(node.next) {
        node = node.next
        nodeArray.push(node.val)
    }    
    
    nodeArray.reverse()
    node = head
    nodeArray.forEach((nodeValue) => {
        node.val = nodeValue
        node = node.next        
    })
    
    return head
};