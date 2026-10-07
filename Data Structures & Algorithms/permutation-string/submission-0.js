class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        let need = {}
        let have = {}
        let left = 0

        if(s1.length > s2.length) return false

        for(let i = 0; i < s1.length; i++){
            need[s1[i]] = (need[s1[i]] || 0) + 1
        }

        for(let right = 0; right < s2.length; right++){
            have[s2[right]] = (have[s2[right]] || 0) + 1

            if((right - left) + 1 > s1.length){
                have[s2[left]]--
                left++
            }
            if((right - left) + 1 === s1.length){
                let match = true
                for(let key in need){
                    if(need[key] != have[key]){
                        match = false
                        break;
                    }
                }
                if(match) return true
            }
        }
        return false

    }
}
