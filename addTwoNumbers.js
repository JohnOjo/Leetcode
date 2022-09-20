/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
 var addTwoNumbers = function(l1, l2) {
    let node1 = l1
    let node2 = l2
    const digitsArray = []
    let index = 0
    let carryOver = false
    
    while(node1 || node2){
        let digitSum = 0
        if(node1){
            digitSum += node1.val
            node1 = node1.next
        }   
        
        if(node2){
            digitSum += node2.val
            node2 = node2.next
        }
        
        if(digitSum < 10){
            if(carryOver && digitsArray[index] + digitSum>=10){
                const digitSumString = (digitsArray[index] + digitSum).toString()
                digitsArray[index] = parseInt(digitSumString[1])
                digitsArray.push(parseInt(digitSumString[0]))
                carryOver = true
            }
            else if(carryOver && digitsArray[index] + digitSum<10){
                digitsArray[index] = digitsArray[index] + digitSum
                carryOver = false
            }
            else{
                digitsArray[index] = digitSum
                carryOver = false
            }
        }
        else{
            const digitSumString = digitSum.toString()
            digitsArray[index] = carryOver ? digitsArray[index] + parseInt(digitSumString[1]) : parseInt(digitSumString[1])
            digitsArray.push(parseInt(digitSumString[0]))
            carryOver = true
        }
        
        index++
    }
    
    const sumStringSize = digitsArray.length
    let result = new ListNode(parseInt(digitsArray[0]), null)
    let node = result
    
    for(let i = 1; i<sumStringSize; i++){
        node.next = new ListNode(parseInt(digitsArray[i]), null)
        node = node.next
    }
    
    return result
};