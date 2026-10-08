class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        let need = {}
        let left = 0
        let matches = 0
        let minStart = 0
        let minLength = Infinity

        if(t.length > s.length) return "";

        for(let char of t){
            need[char] = (need[char] || 0 ) + 1
        }

        for(let right = 0; right < s.length; right++){
            let char = s[right]
            if(need[char] !== undefined){
                need[char]--

                if(need[char] >= 0){
                    matches++
                }
            }

            while(matches === t.length){
                if((right - left) + 1 < minLength){
                    minLength = (right - left) + 1
                    minStart = left
                }
                let leftChar = s[left]
                if(need[leftChar] !== undefined){
                    need[leftChar]++

                    if(need[leftChar] > 0){
                        matches--
                    }
                }
                left++
            }
        }
        return minLength === Infinity ? "" : s.slice(minStart, minStart + minLength)
    }
}
