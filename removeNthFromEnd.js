/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
 var removeNthFromEnd = function(head, n) {
    let node = head
    const values = [node.val]
    while(node.next){
        node = node.next
        values.push(node.val)
    }
    
    const valuesLength = values.length
    if(valuesLength === 1)
        return null
    
    node = head
    
    let count = 0
    if(count !== valuesLength-n){
        for(let i = 0; i<valuesLength; i++){     
            if(i === valuesLength-2){
                node.next = null
            }
            if(i !== valuesLength-n){
                node.val = values[i]
                node = node.next
            }
        }
    }    
    else{
        count++
        node.val = values[count]    
        while(node.next){
            if(count === valuesLength-n){
                count += 2
            }
            else{
                count++
            }
            if(count >= valuesLength){
                node.next = null
                break
            }
            node = node.next
            node.val = values[count]
            if(count === valuesLength-2){
                node.next = null
            }
        }
    }
     
    return head
};