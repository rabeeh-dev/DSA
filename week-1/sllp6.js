function arraytolinkedlist(arr){
    class Node{
        constructor(data){
            this.data = data
            this.next = null
        }
    }

    class LinkedList{
        constructor() {
            this.head = null
        }

        insert(data){
            const newNode = new Node(data)
            newNode.next = this.head
            this.head = newNode
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

    const MyList = new LinkedList()

    for(let i=arr.length;i>=0;i--){
        MyList.insert(arr[i])
    }

    MyList.printList()
}

arraytolinkedlist([1,2,3,4])