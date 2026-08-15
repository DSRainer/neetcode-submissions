class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let encodedString = '';
        for(const word of strs){
            encodedString += word.length + "#" + word;
        }
        return encodedString;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let output = [];
        let i = 0;
        while(i < str.length){
            const delimiter = str.indexOf("#", i)
            const length = Number(str.slice(i, delimiter))
            const word = str.slice(delimiter + 1, delimiter + 1 + length)
            output.push(word)
            i = delimiter + 1 + length
        }
        return output
    }
}
