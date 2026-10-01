class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        let left = 0
        let right = height.length - 1
        let maxLeft = height[left]
        let maxRight = height[right]
        let totalWater = 0

        while(left < right){
            if(height[left] < height[right]){
                maxLeft = Math.max(maxLeft, height[left])
                totalWater += maxLeft - height[left]
                left++
            }else{
                maxRight = Math.max(maxRight, height[right])
                totalWater += maxRight - height[right]
                right--
            }
        }
        return totalWater
    }
}
