class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let count = {};
        for(const num of nums) {
            count[num] = (count[num] || 0) + 1
        }
        const buckets = Array.from({length: nums.length + 1}, ()=> [])
        for(const key in count){
            const freq = count[key]
            buckets[freq].push(Number(key))
        }
        const result = [];
        for(let i = buckets.length - 1; i >= 0; i--){
            for(const num of buckets[i]){
                result.push(num)

                if(result.length === k) {
                    return result
                }
            }
        }
    }
}
