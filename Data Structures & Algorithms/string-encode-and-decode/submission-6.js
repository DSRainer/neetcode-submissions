class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let encoded_string = ""
        for(const word of strs){
            encoded_string += word.length + "#" + word
        }
        return encoded_string
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let result = []
        let i = 0
        while(i < str.length){
            const delimiter = str.indexOf("#", i)
            const length = Number(str.slice(i, delimiter))
            const word = str.slice(delimiter + 1, delimiter + 1 + length)
            result.push(word)
            i = delimiter + 1 + length
        }
        return result
    }
}
