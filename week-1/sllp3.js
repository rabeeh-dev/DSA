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
            return this.insertAtBeginning(data)
        }

        let curr = this.head
        let result = []
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
            console.log("value not found")
        }
    }

    printList(step){
        let curr = this.head
        let result = []
        while(curr){
            result.push(curr.data)
            curr = curr.next
        }
        console.log(step,result.join(" -> "))
    }
}

const MyList = new LinkedList()
MyList.insertAtBeginning(5)
MyList.insertAtEnd(10)
MyList.insertAtEnd(15)
MyList.insertAtEnd(10)
MyList.insertAtEnd(20)
MyList.deleteByValue(10)
MyList.printList("Step 1 : ")
MyList.deleteByValue(5)
MyList.printList("Step 2 : ")
MyList.deleteByValue(99)
MyList.printList("Step 3 : ")