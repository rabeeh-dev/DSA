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

    reverseList(){
        let prev = null 
        let curr = this.head 
        let next = null

        while(curr!==null){
            next = curr.next 
            curr.next = prev
            prev = curr 
            curr = next 
        }
        this.head = prev
    }

    findMiddle(){
        let slow = this.head
        let fast = this.head 

        while(fast !== null && fast.next !== null){
            slow = slow.next 
            fast = fast.next.next 
        }

        console.log(slow.data) 

    }

    deletefromnth(index){
        let fast = this.head
        let slow = this.head 

        for(let i=0;i<index;i++){
            if(fast===null) return
            fast = fast.next 
        }
   
        if(fast===null){
            this.head = this.head.next
            return 
        }
        
        while(fast.next !== null){
            slow = slow.next 
            fast = fast.next 
        }

        if(slow.next!==null){
            slow.next = slow.next.next 
        }
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
MyList.insertAtBeginning(50)
MyList.insertAtBeginning(40)
MyList.insertAtBeginning(30)
MyList.insertAtBeginning(20)
MyList.insertAtBeginning(10)
MyList.reverseList()
MyList.findMiddle()
MyList.deletefromnth(5)
MyList.printList()