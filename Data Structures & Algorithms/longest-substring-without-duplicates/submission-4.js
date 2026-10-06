class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let left = 0
        let right = 0
        let longest = 0
        let seenSet = new Set()

        while(right < s.length){
            if(!seenSet.has(s[right])){
                seenSet.add(s[right])
                right++
                longest = Math.max(longest, seenSet.size)
            }else{
                seenSet.delete(s[left])
                left++
            }
        }
        return longest
    }
}
