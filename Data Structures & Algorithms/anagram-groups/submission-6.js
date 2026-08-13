class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let seen  = {};
        for(const word of strs) {
            const key = word.split("").sort().join("")

            if(!seen[key]){
                seen[key] = [];
            }
            seen[key].push(word)
        }

        return Object.values(seen)
    }
}
