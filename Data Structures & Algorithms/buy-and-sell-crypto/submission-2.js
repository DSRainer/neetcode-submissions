class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let max = 0
        let i = 0
        let k = 1
        while(k < prices.length){
            const diff = prices[k] - prices[i]
            if(diff > 0){
                max = Math.max(max, diff)
                k++
            }else if(diff < 0){
                i = k
                k++
            }else{
                k++
            }
        }
        return max
    }
}
