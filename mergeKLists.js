/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
 var mergeKLists = function(lists) {
    const listsArray = []
    lists.forEach((list) => {
        if(list){
            const listArray = []
            while(list.next){
                listArray.push(list.val)
                list = list.next 
            }
            listArray.push(list.val)

            listsArray.push(listArray)
        }
    })
    
	const arraysLength = listsArray.length

	let arraysCombined = []
	if(arraysLength > 0){
		arraysCombined = listsArray[0]
		for(let i = 1; i<arraysLength; i++){
			arraysCombined = mergeSortedArrays(arraysCombined, listsArray[i])
		}
	}
    
    let result = new ListNode(null, null)
	
    if(arraysCombined.length > 0)
        result = new ListNode(arraysCombined[0], new ListNode(null, null))
    else
        return null
    
    let node = result
    const arraysCombinedSize = arraysCombined.length
    for(let i = 1; i<arraysCombined.length; i++){
        node.next = new ListNode(arraysCombined[i], new ListNode(null, null))
        node = node.next
    }
    node.next = null    
    
    return result
};

const mergeSortedArrays = function(array1, array2) {
	let combinedArray = []
	
	//ask on how to handle exceptions and base cases
	switch(true){
		case (array1 == null && array2 == null):{
			return null
		}
		case (array1 == null):{
			return array2
			break
		}
		case (array2 == null ):{
			return array1
			break
		}
		default:{
			const array1Length = array1.length
			const array2Length = array2.length
			
			if(array1[0]>= array2[array2Length-1]){
				return [...array2, ...array1]
			}
			else if(array2[0]>= array1[array1Length-1]){
				return [...array1, ...array2]
			}
			else {			
				for(let i = 0, j  = 0; ;){
					if(array1Length == i){
						combinedArray.push(...array2.slice(j, array2Length+1))
						break
					}
					if(array2Length == j){
						combinedArray.push(...array1.slice(i, array1Length+1))
						break
					}
					
					const array1Value = array1[i]
					const array2Value = array2[j]				
					
					if(array1Value <= array2Value){
						combinedArray.push(array1Value)
						
						i++
					}
					else{
						combinedArray.push(array2Value)
						
						j++
					}
				}
			}
			break
		}
	}
	
	return combinedArray
}