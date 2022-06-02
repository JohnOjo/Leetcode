var synonym = function(synonyms, text) {
    var output = []
    var d1 = []
    var d2 = []
    synonyms.forEach((synonym, index) => {
        synonyms.forEach((synonym2, index2) => {
            if (index !== index2) {
                if(synonym.includes(synonym2[0])) {
                    d1.push(...synonym, synonym2[1])
                }
                else if(synonym.includes(synonym2[1])) {
                    d1.push(...synonym, synonym2[0])
                }
            }
        })
    });
    console.log(d1)
    synonyms.forEach(synonym => {
        if(text.includes(synonym[0])) {
            output.push(text.replace(synonym[0], synonym[1]))
        }
        else if(text.includes(synonym[1])) {
            output.push(text.replace(synonym[1], synonym[0]))
        }
    });
    
    //console.log(output)
}
var synonyms = [["happy","joy"],["sad","sorrow"],["joy","cheerful"]]
var text = "I am happy today but was sad yesterday"
synonym(synonyms, text)