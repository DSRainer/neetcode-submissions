class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let j = 0
        let longest = 0
        let seen = {}
        let result = 0

        for(let i = 0; i < s.length; i++){
            seen[s[i]] = (seen[s[i]] || 0) + 1
            longest = Math.max(longest, seen[s[i]])

            while(((i - j) + 1) - longest > k){
                seen[s[j]]--
                j++
            }
            result = Math.max(result, (i-j) + 1)
        }
        return result
    }
}
