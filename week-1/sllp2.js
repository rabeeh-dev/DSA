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
        while(curr.next){
            curr = curr.next
        }
        curr.next = newNode
    }

    insertAtindex(data,index){
        const newNode = new Node(data)

        if(index === 0){
            return this.insertAtBeginning(data)
        }

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

const MyList = new LinkedList
MyList.insertAtBeginning(10)
MyList.insertAtEnd(20)
MyList.insertAtEnd(30)
MyList.insertAtindex(5,0)
MyList.printList("Step 1 : ")
MyList.insertAtindex(35,0)
MyList.printList("Step 2 : ")
MyList.insertAtindex(25,2)
MyList.printList("Step 3 : ")
MyList.insertAtindex(40,5)
MyList.printList("Step 4 : ")