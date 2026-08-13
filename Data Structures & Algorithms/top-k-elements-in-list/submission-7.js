class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let seen = {}
        for(const num of nums){
            seen[num] = (seen[num] || 0) + 1;
        }
        const entries = Object.entries(seen)
        entries.sort((a,b) => b[1] - a[1])

        return entries.slice(0, k).map((entry) => Number(entry[0]))

    }
}
