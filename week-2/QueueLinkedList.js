class Node{
    constructor(data){
        this.data = data
        this.next = null
    }
}

class LinkedList{
    constructor(){
        this.front = null
        this.rear = null
    }
    
    isEmpty(){
        return this.front === null
    }
    
    enqueue(data){
        const newNode = new Node(data)
        if(this.isEmpty()){
            this.front = newNode
            this.rear = newNode
            return
        }
        this.rear.next = newNode
        this.rear = newNode
    }
    
    dequeue(){
        if(this.isEmpty()){
            console.log("Queue is Empty!!")
            return 
        }
        let removed = this.front.data
        this.front = this.front.next 

        if(this.front === null){
            this.rear = null
        }
        
        return removed
    }
    
    peek(){
        if(this.isEmpty()){
            console.log("Queue is empty!!")
            return 
        }
        return this.front.data
    }
    
    size(){
        let curr = this.front 
        let count = 0
        while(curr){
            count++
            curr = curr.next
        }
        return count 
    }
    
    display(){
        let curr = this.front 
        let result = []
        while(curr){
            result.push(curr.data)
            curr = curr.next
        }
        console.log("List : ", result.join(" -> "))
    }
    
}

const mq = new LinkedList()
mq.enqueue(10)
mq.enqueue(20)
mq.enqueue(30)
mq.enqueue(40)
console.log("Removed : ",mq.dequeue())
console.log("Peek Element :",mq.peek())
console.log("Size of the queue : ", mq.size())
mq.display()












