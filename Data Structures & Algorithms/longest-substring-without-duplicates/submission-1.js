class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let set = new Set()
        let left = 0
        let right = 0
        let maxString = 0

        while(right < s.length){
            if(!set.has(s[right])){
                set.add(s[right])
                right++
                maxString = Math.max(maxString, set.size)
            }else{
                set.delete(s[left])
                left++
            }
        }
        return maxString
    }
}
