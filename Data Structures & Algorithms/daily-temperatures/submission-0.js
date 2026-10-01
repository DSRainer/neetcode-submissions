class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        let stack = []
        let answer = Array(temperatures.length).fill(0)

        for(let i = 0; i < temperatures.length; i++){
            while(stack.length > 0 && temperatures[i] > temperatures[stack[stack.length - 1]]){
                const prevIndex = stack.pop()
                answer[prevIndex] = i - prevIndex
            }
            stack.push(i)
        }
        return answer
    }
}
