class MaxHeap{

    constructor(){
        this.heap = []
    }

    insert(value){

        this.heap.push(value)
        this.bubbleUp()
    }

    bubbleUp(){

        let i = this.heap.length - 1

        while(i > 0){

            let parent = Math.floor((i-1)/2)

            if(this.heap[i] > this.heap[parent]){

                let temp = this.heap[i]
                this.heap[i] = this.heap[parent]
                this.heap[parent] = temp

                i = parent
            }
            else{
                break
            }
        }
    }

    remove(){

        // empty heap
        if(this.heap.length === 0){
            return null
        }

        // only one element
        if(this.heap.length === 1){
            return this.heap.pop()
        }

        let max = this.heap[0]

        // move last element to root
        this.heap[0] = this.heap.pop()

        // restore heap
        this.bubbleDown()

        return max
    }

    bubbleDown(){

        let i = 0

        while(true){

            let left = 2*i + 1
            let right = 2*i + 2

            let largest = i

            if(
                left < this.heap.length &&
                this.heap[left] > this.heap[largest]
            ){
                largest = left
            }

            if(
                right < this.heap.length &&
                this.heap[right] > this.heap[largest]
            ){
                largest = right
            }

            if(largest === i){
                break
            }

            let temp = this.heap[i]
            this.heap[i] = this.heap[largest]
            this.heap[largest] = temp

            i = largest
        }
    }

    display(){
        console.log(this.heap)
    }
}


const heap = new MaxHeap()

heap.insert(100)
heap.insert(70)
heap.insert(95)
heap.insert(20)
heap.insert(50)
heap.insert(80)
heap.insert(90)

heap.display()

console.log("Removed :", heap.remove())

heap.display()