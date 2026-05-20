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

    insertAtIndex(data,index){
        const newNode = new Node(data)

        let curr = this.head
        let prev = null
        let posi = 0

        while(curr && posi < index){
            prev = curr
            curr = curr.next
            posi++
        }

        prev.next = newNode
        newNode.next = curr

    }

    printList(){
        let curr = this.head
        let result = []
        while(curr){
            result.push(curr.data)
            curr = curr.next
        }
        console.log("List :", result.join(" -> "))
    }

    
}

const MyList = new LinkedList()
MyList.insertAtBeginning(5)
MyList.insertAtEnd(15)
MyList.insertAtIndex(10,1)
MyList.insertAtBeginning(1)
MyList.insertAtEnd(20)
MyList.printList()