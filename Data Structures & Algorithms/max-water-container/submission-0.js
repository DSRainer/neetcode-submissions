class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let left = 0
        let right = heights.length - 1  
        let maxArea = 0

        while(left < right){
            let length = Math.min(heights[left], heights[right])
            let breadth = right - left
            let currArea = length * breadth
            maxArea = Math.max(maxArea, currArea)

            if(heights[left] < heights[right]) left++
            else right--
        }
        return maxArea
    }
}
