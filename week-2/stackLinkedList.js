class Node{
    constructor(data){
        this.data = data
        this.next = null
    }
}

class Stack{
    constructor(){
        this.top = null
    }
    
    isEmpty(){
        return this.top === null
    }
    
    push(data){
        const newNode = new Node(data)
        newNode.next = this.top
        this.top = newNode
    }
    
    pop(){
        if(this.isEmpty()){
            console.log("Stack underflow")
            return
        }
        
        let removed = this.top.data
        this.top = this.top.next 
        return removed
    }
    
    peek(){
        if(this.isEmpty()){
            console.log("Stack is empty")
            return 
        }
        
        return this.top.data
    }
    
    size(){
        let curr = this.top
        let count = 0
        while(curr){
            count++
            curr = curr.next
        }
        return count
    }
    
    display(){
        let curr = this.top
        let result = []
        
        while(curr){
            result.push(curr.data)
            curr = curr.next
        }
        console.log("List: ",result.join(" / "))
    }
    
    
}

const ms = new Stack()

console.log(ms.isEmpty())
ms.push(10)
ms.push(20)
ms.push(30)
ms.display()
console.log("Removed : ",ms.pop())
console.log(ms.peek())
console.log(ms.size())

