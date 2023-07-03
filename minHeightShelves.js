/**
 * @param {number[][]} books
 * @param {number} shelfWidth
 * @return {number}
 */
 var minHeightShelves = function(books, shelfWidth) {
    const numberOfBooks = books.length
    if(numberOfBooks === 1){
        return books[0][1]
    }
    
    books.sort((a, b) => b[1] - a[1])
    const shelf = [books[0][0]]
    let minHeight = books[0][1]
    let level = 0

    for(let index = 1; index<numberOfBooks; ){
        if(books[index] != null){
            const book = books[index]
            const bookThickness = book[0]

            if(bookThickness+shelf[level] > shelfWidth){
                let foundFittingBook = false
                for(let j = index+1; j<numberOfBooks; j++){
                    if(books[j][0]+shelf[level] <= shelfWidth){
                        shelf[level] += books[j][0]
                        books[j] = null
                        foundFittingBook = true
                    }
                }

                minHeight += book[1]
                level++

                if(shelf[level] == null)
                    shelf[level] = 0

                shelf[level] += bookThickness               
            }
            else {
                shelf[level] += bookThickness
            }
        }
        index++
    }

    return minHeight
};