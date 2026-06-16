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
                [this.heap[i],this.heap[parent]] = 
                [this.heap[parent],this.heap[i]]
                
                i = parent
            }else{
                break
            }
        }
    }
    
    remove(){
        if(this.heap.length === 0){
            return null
        }
        
        if(this.heap.length === 1){
            return this.heap.pop()
        }
        
        let root = this.heap[0]
        this.heap[0] = this.heap.pop()
        this.bubbledown()
        return root
    }
    
    bubbledown(){
        let i = 0
        let length = this.heap.length
        while(2*i+1 < length){
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
                [this.heap[i],this.heap[largest]] = 
                [this.heap[largest],this.heap[i]]
                
                i = largest
            }else{
                break
            }
        }
    }
    
    insertTask(task,pr){
        const newTask = {'task' : task,'priority':pr}
        this.heap.push(newTask)
        this.bubbleupt()
    }
    
    heapSort(){
        let length = this.heap.length
        for(let i=length-1;i>0;i--){
            [this.heap[0],this.heap[i]] =
            [this.heap[i],this.heap[0]]
            
            length--
            this.bubbledownt(length)
        }
    }
    
    bubbleupt(){
        let i = this.heap.length-1
        while(i > 0){
            let parent = Math.floor((i-1)/2)
            if(this.heap[i].priority > this.heap[parent].priority){
                [this.heap[i],this.heap[parent]] = 
                [this.heap[parent],this.heap[i]]
                
                i = parent 
            }else{
                break
            }
        }
    }
    
    bubbledownt(length){
        let i = 0
        while(2*i+1 < length){
            let left = 2*i+1
            let right = 2*i+2
            let largest = i
            
            if(left < length && this.heap[left].priority > this.heap[largest].priority){
                largest = left
            }
            
            if(right < length && this.heap[right].priority > this.heap[largest].priority){
                largest = right
            }
            
            if(largest !== i){
                [this.heap[i],this.heap[largest]] = 
                [this.heap[largest],this.heap[i]]
                
                i = largest
            }else{
                break
            }
            
        }
    }
    

    
    display(){
        console.log(this.heap)
    }
}

const hp1 = new heap();
console.log("=== TESTING PRIMITIVES (MAX-HEAP ENGINE) ===");

// 1. Basic In-Order Insertion Test
hp1.insert(10);
hp1.insert(20);
hp1.insert(15);
hp1.insert(30);
hp1.insert(40);
hp1.insert(50);
console.log("Initial Max-Heap array structure:");
hp1.display(); 
// Expected array mapping tree levels: [50, 40, 20, 10, 30, 15]

// 2. Sequential Extraction Test (Should pop from largest to smallest)
console.log("\nExtracting root (Expected: 50) ->", hp1.remove());
console.log("Array after extracting 50:");
hp1.display(); // Expected: [40, 30, 20, 10, 15]

console.log("\nExtracting root (Expected: 40) ->", hp1.remove());
console.log("Array after extracting 40:");
hp1.display(); // Expected: [30, 15, 20, 10]

// 3. Emptying Edge Case Verification
hp1.remove(); // Removes 30
hp1.remove(); // Removes 20
hp1.remove(); // Removes 15
hp1.remove(); // Removes 10 (Last element)
console.log("\nExtracting from completely empty heap (Expected: null) ->", hp1.remove());



const hp2 = new heap();
console.log("\n=== TESTING TASK PRIORITIES & HEAP SORT ===");

// 1. Load an unarranged, mixed priority task list
hp2.insertTask('write read', 1);
hp2.insertTask('write code', 2);
hp2.insertTask('read code', 3);
hp2.insertTask('task 4', 4);
hp2.insertTask('vscode task', 5);

console.log("Heap Tree Object Structure (Before Sorting):");
hp2.display();
/* Expected Tree Layout:
[
  { task: 'vscode task', priority: 5 },
  { task: 'task 4', priority: 4 },
  { task: 'read code', priority: 3 },
  { task: 'write read', priority: 1 },
  { task: 'write code', priority: 2 }
]
*/

// 2. Execute Heap Sort Engine
console.log("\nExecuting Heap Sort...");
hp2.heapSort();

console.log("\nFinal Array Structure (Expected Ascending Priority Order):");
hp2.display();
/* Expected Sorted Order:
[
  { task: 'write read', priority: 1 },
  { task: 'write code', priority: 2 },
  { task: 'read code', priority: 3 },
  { task: 'task 4', priority: 4 },
  { task: 'vscode task', priority: 5 }
]
*/