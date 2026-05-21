class Queue{
    constructor(data){
        this.queue = []
    }
    
    enqueue(data){
        return this.queue.push(data)
    }
    
    dequeue(){
        if(this.isEmpty()){
            console.log("queue underflow")
            return 
        }
        
        return this.queue.shift()
    }
    
    peek(){
        if(this.isEmpty()){
            console.log("Stack underflow")
            return 
        }
        
        return this.queue[0]
    }
    
    isEmpty(){
        return this.queue.length === 0
    }
    
    display(){
        if(this.isEmpty()){
            console.log("Queue is empty!!!")
            return
        }
        
        console.log(this.queue)
        return
    }
    
    size(){
        return this.queue.length
    }
}

const mq = new Queue()
mq.enqueue(10)
mq.enqueue(20)
mq.enqueue(30)
mq.enqueue(40)
mq.display()
console.log("removed : ", mq.dequeue())
console.log("first element : ",mq.peek())
console.log("Is the queue is empty ?? : ", mq.isEmpty())
console.log("size of the queue : ",mq.size())
mq.display()






