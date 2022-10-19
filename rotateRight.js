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
 var rotateRight = function(head, k) {
    if(!head)
        return head
    
    if(k === 0)
        return head
    
    let node = head
    const values = [node.val]
    
    while(node.next){
        node = node.next
        values.push(node.val)
    }
    
    const numberOfElements = values.length
    const rotateBy = k % numberOfElements
    
    if(rotateBy === 0)
        return head    
    
    node = head
    for(let i = numberOfElements - rotateBy; ; i++){
        if(i === numberOfElements){
            i = 0
        }
        node.val = values[i]
        node = node.next
        
        if(!node)
            break
    }
        
    return head
};

// Solved in 30 minutes