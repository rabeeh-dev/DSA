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

    deleteByIndex(index){
        if(!this.head){
            let status 
            return status = "list is empty"
        }
        if(index === 0){
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
        
        if(curr){
            prev.next = curr.next
        }else{
            return console.log("beyond length")
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
MyList.insertAtBeginning(10)
MyList.insertAtEnd(20)
MyList.insertAtEnd(30)
MyList.insertAtEnd(40)
MyList.printList("Default : ")
MyList.deleteByIndex(0)
MyList.printList("step 1 : ")
MyList.deleteByIndex(2)
MyList.printList("step 2 : ")
MyList.deleteByIndex(10)
MyList.printList("step 3 : ")
