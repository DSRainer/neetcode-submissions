class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        let left = 0
        let right = height.length - 1
        let leftMax = height[left]
        let rightMax = height[right]
        let totalWater = 0

        while(left < right){
            if(height[left] < height[right]){
                left++
                leftMax = Math.max(leftMax, height[left])
                totalWater += leftMax - height[left]
            }else{
                height[left] > height[right]
                right--
                rightMax = Math.max(rightMax, height[right])
                totalWater += rightMax - height[right]
            }
        }
        return totalWater
    }
}
