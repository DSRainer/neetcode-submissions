class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length !== t.length) {
            return false
        }
        let seen = {};
        for(const char of s){
            seen[char] = (seen[char] || 0) + 1
        }
        for(const char of t) {
            if(!seen[char]){
                return false
            }
            seen[char]--
        }
        return true
    }
}