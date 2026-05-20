class Node{
    constructor(data){
        this.data = data 
        this.next = null
    }
}

class LinkedList{
    constructor(){
        this.head = null
    }
    
    insertAtBeginning(data){
        const newNode = new Node(data)
        newNode.next = this.head
        this.head = newNode
    }
    
    insertAtEnd(data){
        const newNode = new Node(data)
        if(!this.head){
            this.head = newNode
            return
        }
        let curr = this.head
        while(curr.next){
            curr = curr.next 
        }
        
        curr.next = newNode
    }
    
    deleteByValue(value){
        if(!this.head) return null
        if(this.head.data === value){
            this.head = this.head.next
            return
        }
        
        let curr = this.head 
        let prev = null
        
        while(curr && curr.data !== value){
            prev = curr
            curr = curr.next
        }
        
        if(curr){
            prev.next = curr.next
        }else{
            console.log("Value Not Found!!")
        }
    }
    
    reverseList(){
        let curr = this.head
        let prev = null 
        let nextNode = null
        
        while(curr){
            nextNode = curr.next 
            curr.next = prev 
            prev = curr
            curr = nextNode
        }
        
        this.head = prev
    }
    
    findMiddle(){
        let fast = this.head 
        let slow = this.head 
        
        while(fast && fast.next){
            fast = fast.next.next
            slow = slow.next 
        }
        
        console.log(slow.data)
    }
    
    removeDuplicates(){
        if(!this.head) return null
        let curr = this.head 
        
        while(curr.next){
            if(curr.data === curr.next.data){
                curr.next = curr.next.next
            }else{
                curr = curr.next 
            }
        }
        
        
    }
    
    insertAt(data,index){
        if(index === 0){
            return this.insertAtBeginning(data)
        }
        const newNode = new Node(data)
        
        let curr = this.head 
        let prev = null 
        let posi = 0
        
        while(curr && posi < index){
            prev = curr 
            curr = curr.next 
            posi++
        }
        
        if(!curr){
            prev.next = newNode
        }else{
            prev.next = newNode
            newNode.next = curr
        }
    }
    
    insertAfter(target,data){
        if(!this.head) return 
        if(target===0){
            return this.insertAtBeginning(data)
        }
        
        const newNode = new Node(data)
        
        let curr = this.head 
        
        while(curr && curr.data!==target){
            curr = curr.next
        }
        
        if(curr){
            newNode.next = curr.next 
            curr.next = newNode
        }else{
            console.log("no such data found")
        }
    }
    
    insertBefore(target,data){
        if(!this.head) return 
        if(target===0){
            return this.insertAtBeginning(data)
        }
        
        const newNode = new Node(data)
        let curr = this.head
        let prev = null
        while(curr && curr.data !== target){
            prev = curr
            curr = curr.next
        }
        
        if(curr){
            prev.next = newNode 
            newNode.next = curr
        }else{
            console.log("no such data")
            return
        }
        
    }
    
    deleteByIndex(index){
        if(index===0){
            this.head = this.head.next
            return
        }
        let curr = this.head
        let prev = null
        let posi = 0
        
        while(curr && posi < index){
            prev = curr
            curr = curr.next 
            posi++
        }
        
        prev.next = curr.next
    }
    
    printList(){
        let curr = this.head 
        let result = []
        while(curr){
            result.push(curr.data)
            curr = curr.next
        }
        console.log("List :",result.join(" -> "))
    }
}

const myList = new LinkedList()
myList.insertAtBeginning(10)
myList.insertAtEnd(20)
myList.insertAtEnd(30)
myList.insertAtEnd(40)
myList.insertAtEnd(50)
myList.insertAtEnd(50)
myList.insertAtEnd(60)
myList.insertAtEnd(60)
myList.deleteByValue(20)
myList.reverseList()
myList.findMiddle()
myList.removeDuplicates()
myList.insertAt(100,2)
myList.insertAfter(60,100)
myList.insertBefore(10,150)
myList.deleteByIndex(0)
myList.printList()