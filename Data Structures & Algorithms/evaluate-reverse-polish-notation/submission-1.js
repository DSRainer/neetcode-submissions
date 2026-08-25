class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        let stack = [];
        for(let char of tokens){
            if(!isNaN(Number(char))){
                stack.push(Number(char))
            }else{
                let a = stack.pop()
                let b = stack.pop()
                let result;
                if(char === '+'){
                    result = b + a
                }else if(char === '-'){
                    result = b - a
                }else if(char === '*'){
                    result = b * a
                }else if(char === '/'){
                    result = Math.trunc(b / a)
                }
                stack.push(result)
            }
        }
        return stack[stack.length - 1]
    }
}
