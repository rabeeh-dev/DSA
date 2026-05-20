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

    insert(data){
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

    deletebyvalue(value){
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
            console.log("no value found")
        }
    }

    deleteDuplicates(){
        if(!this.head || !this.head.next) return 

        let curr = this.head 
        while(curr && curr.next){
            if(curr.data === curr.next.data){
                curr.next = curr.next.next
            }else{
                curr = curr.next 
            }
        }
    }

    printList(){
        let curr = this.head
        let result = [] 
        while(curr){
            result.push(curr.data)
            curr=curr.next
        }
        console.log("List: ",result.join(" -> "))
    }

}

const MyList = new LinkedList()
MyList.insert(10)
MyList.insert(120)
MyList.insert(130)
MyList.insert(160)
MyList.insert(160)
MyList.insert(160)
MyList.printList()
MyList.deletebyvalue(10)
MyList.printList()
MyList.deleteDuplicates()
MyList.printList()

