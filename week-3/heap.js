class heap{
    constructor(){
        this.heap = []
    }
    
    insert(data){
        this.heap.push(data)
        this.bubbleup()
    }
    
    bubbleup(){
        let i = this.heap.length-1
        while(i > 0){
            let parent = Math.floor((i-1)/2)
            if(this.heap[i]>this.heap[parent]){
                let temp = this.heap[i]
                this.heap[i] = this.heap[parent]
                this.heap[parent] = temp
                
                i = parent
            }else{
                break
            }
        }
    }
    
    remove(){
        if(this.heap.length === 0) return null
        if(this.heap.length === 1) return this.heap.pop()
        let root = this.heap[0]
        this.heap[0] = this.heap.pop()
        this.bubbledown()
        return root
    }
    
    bubbledown(length = this.heap.length){
        let i = 0
        
        while(true){
            let left = 2*i+1
            let right = 2*i+2
            let largest = i
            
            if(left < length && this.heap[left] > this.heap[largest]){
                largest = left 
            }
            
            if(right < length && this.heap[right] > this.heap[largest]){
                largest = right
            }
            
            if(largest !== i){
                let temp = this.heap[i]
                this.heap[i] = this.heap[largest]
                this.heap[largest] = temp 
                
                i = largest
            }else{
                break
            }
        }
    }
    
    heapSort(){
        let length = this.heap.length
        while(length > 1){
            [this.heap[0],this.heap[length-1]] = 
            [this.heap[length-1],this.heap[0]]
            
            length--
            this.bubbledown(length)
        }
        return this.heap
    }
    
    
    display(){
        console.log(this.heap)
    }
}


const hp = new heap();

console.log("--- 1. INSERTING ELEMENTS ---");
console.log("Inserting: 10, 20, 15, 30, 60");
hp.insert(10);
hp.insert(20);
hp.insert(15);
hp.insert(30);
hp.insert(60);

// Should output: [ 60, 30, 15, 10, 20 ]
console.log("Heap after insertions:");
hp.display(); 
console.log("\n");


console.log("--- 2. REMOVING MAX ELEMENT ---");
const extractedMax = hp.remove();
console.log(`Removed max element: ${extractedMax}`);

// Should output: [ 30, 20, 15, 10 ]
console.log("Heap after removal:");
hp.display(); 
console.log("\n");


console.log("--- 3. HEAP SORT ---");
console.log("Executing in-place heap sort...");
const sortedData = hp.heapSort();

// Should output: [ 10, 15, 20, 30 ]
console.log("Heap sorted:", sortedData);
console.log("==========================================");
hp.display()
hp.remove()
hp.display()
hp.heapSort()
hp.display()






