class Stack{
    constructor(data){
        this.stack = []
    }
    
    push(data){
        return this.stack.push(data)
    }
    
    pop(){
        if(this.isEmpty()){
            console.log("Stack underFlow")
            return
        }
        
        return this.stack.pop()
    }
    
    peek(){
        if(this.isEmpty()){
            console.log("Stack underflow")
            return
        }
        
        return console.log(this.stack[this.stack.length-1])
        
    }
    
    size(){
        return console.log(this.stack.length)
    }
    
    isEmpty(){
        return this.stack.length === 0
    }
    
    display(){
        return console.log(this.stack)
    }
}

const mystack = new Stack()
mystack.push(10)
mystack.push(20)
mystack.push(30)
mystack.display()
console.log("removed : ",mystack.pop())  
mystack.display()
mystack.peek()
mystack.size()