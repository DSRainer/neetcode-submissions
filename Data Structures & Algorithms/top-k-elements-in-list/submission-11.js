class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let count = {};
        for(const num of nums){
            count[num] = (count[num] || 0) + 1;
        }
        const entries = Object.entries(count)
        entries.sort((a, b) => b[1] - a[1])

        return entries.slice(0, k).map((entry) => Number(entry[0]))
    }
}
