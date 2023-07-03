const sheet = function() {
    // array
    let array = new Array()
    array.push(1) // array = [1]
    array.pop() // array  = []

    array.unshift(2) // array = [2]
    array.shift() // array = []

    array = [1, 2, 3]
    let max = Math.max(...array)
    let min = Math.min(...array)
    array.length // 3
    array.includes(1, 0) // true
    // second parameter of slice() is non-inclusive
    const arraySlice =  array.slice(0, 2) // [1, 2]

    array.reverse()
    array.sort((prev, next) => prev - next) // ascending order sort for numbers

    // sets
    const set = new Set(array)
    set.has(1) // true
    set.add(4) // set = {1, 2, 3, 4}
    set.delete(4) // set = {1, 2, 3}
    set.size // 3

    // maps
    const map = new Map([["a", 1], ["b", 2]])
    map.set("c", 3) // map = [["a", 1], ["b", 2], ["c", 3]]
    map.get("a") // 1
    map.has("a") // true
    map.delete("c") // [["a", 1], ["b", 2]]
    map.size // 2

    let string = "abc"
    string.includes("a") // true
    string = string.replace("c", "cd") // "abcd"
    let charCode = string.charCodeAt(1) // b
    string = string.concat(ef) // "abcdef"
}