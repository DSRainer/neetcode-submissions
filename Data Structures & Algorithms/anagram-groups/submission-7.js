class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let result = {}

        for(const word of strs){
            let key = word.split("").sort().join("")
            if(!result[key]){
                result[key] = []
            }
            result[key].push(word)
        }
        return Object.values(result)
    }
}
