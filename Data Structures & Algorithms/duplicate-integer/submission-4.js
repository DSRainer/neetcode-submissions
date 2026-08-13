class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let ans = new Set();
        for(let num of nums){
            if(ans.has(num)){
                return true;
            }
            ans.add(num);
        }
        return false;
    }
}
