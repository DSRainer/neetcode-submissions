class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let output  = []
        let product1 = 1;
        for(let i = 0; i < nums.length; i++){
            output[i] = product1
            product1 *= nums[i]
        }
        let product2 = 1;
        for(let i = nums.length - 1; i >= 0; i--){
            output[i] *= product2
            product2 *= nums[i]
        }
        return output

    }
}
