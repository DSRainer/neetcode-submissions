class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        let closing = {'}': '{', ']': '[', ')': '('}
        let ans = []
        
        for(let c of s){
            if(closing[c]){
                if(ans.length > 0 && ans[ans.length - 1] === closing[c]){
                    ans.pop()
                }else return false
            } else{
                ans.push(c)
            }
        }
        return ans.length === 0
    }
}
