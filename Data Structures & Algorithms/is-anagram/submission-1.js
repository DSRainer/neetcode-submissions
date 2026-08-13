class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length !== t.length) {
            return false;
        }
        let result = {};
        for(const char of s) {
            result[char] = (result[char] || 0) + 1;
        }
        for(const str of t) {
            if(!result[str]){
                return false
            }
            result[str]--
        }
        return true
    }
}
