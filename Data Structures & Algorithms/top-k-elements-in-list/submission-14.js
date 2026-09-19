class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let seen = {}
        for(const num of nums){
            seen[num] = (seen[num] || 0) + 1
        }
        let buckets = new Array(nums.length + 1).fill(0).map(() => [])

        for(let key in seen){
            const freq = seen[key]
            buckets[freq].push(Number(key))
        }

        let result = []
        for(let i = buckets.length - 1; i >= 0; i--){
            for(let num of buckets[i]){
                result.push(num)
                
                if(result.length === k){
                    return result
                }
            }
        }
    }
}
