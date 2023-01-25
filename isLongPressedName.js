/**
 * @param {string} name
 * @param {string} typed
 * @return {boolean}
 */
 var isLongPressedName = function(name, typed) {
    const nameLength = name.length
    const typedLength = typed.length
    const invalid = false
    if(nameLength > typedLength){
       return invalid
    }
    
    const namePartitions = [[name[0]]]
    let partitionIndex = 0
    for(let index = 0; index<nameLength-1; index++){
        if(name[index] !== name[index+1]){
            partitionIndex++
            namePartitions[partitionIndex] = []
        }
        namePartitions[partitionIndex].push(name[index+1])
    }
    
    const typedPartitions = [[typed[0]]]
    partitionIndex = 0
    for(let index = 0; index<typedLength-1; index++){
        if(typed[index] !== typed[index+1]){
            partitionIndex++
            typedPartitions[partitionIndex] = []
        }
        typedPartitions[partitionIndex].push(typed[index+1])
    }
    
    if(namePartitions.length !== typedPartitions.length){
       return invalid
    }
    
    for(let index = 0; index<namePartitions.length; index++){
        if(namePartitions[index].length > typedPartitions[index].length || namePartitions[index][0] !== typedPartitions[index][0]){
            return invalid
        }
    }
    
    return true
};