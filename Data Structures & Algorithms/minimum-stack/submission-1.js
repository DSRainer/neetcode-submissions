class MinStack {
    constructor(){
        this.stack = [];
        this.minStack = []
    }

    push(value){
        this.stack.push(value);

        if(this.minStack.length === 0 || value <= this.minStack[this.minStack.length - 1]){
            this.minStack.push(value)
        }
    }

    pop(){
        const val = this.stack.pop()

        if(val === this.minStack[this.minStack.length - 1]){
            this.minStack.pop()
        }
    }

    top(){
        return this.stack[this.stack.length - 1]
    }

    getMin(){
        return this.minStack[this.minStack.length - 1]
    }
}
