class Node{
    constructor(data){
        this.left = null
        this.right = null
        this.data = data
    }
}

class BST{
    constructor(){
        this.root = null
    }
    
    insert(data){
        const newNode = new Node(data)
        if(!this.root){
            this.root = newNode
            return
        }
        
        let curr = this.root
        while(true){
            if(curr.data > data){
                
                if(curr.left === null){
                    curr.left = newNode
                    return
                }
                curr = curr.left
            }else{
                if(curr.right === null){
                    curr.right = newNode
                    return 
                }
                curr = curr.right
            }
        }
    }
    
    
    contains(value){
        let curr = this.root
        while(curr){
            if(curr.data === value){
                return true
            }
            
            if(curr.data > value){
                curr = curr.left
            }else{
                curr = curr.right
            }
        }
        return false
    }
    
    inorder(node = this.root){
        if(node){
            this.inorder(node.left)
            console.log(node.data)
            this.inorder(node.right)
        }
    }
    
    preorder(node = this.root){
        if(node){
            console.log(node.data)
            this.preorder(node.left)
            this.preorder(node.right)
        }
    }
    
    postorder(node = this.root){
        if(node){
            this.postorder(node.left)
            this.postorder(node.right)
            console.log(node.data)
        }
    }
    
    height(node = this.root){
        if(node === null){
            return -1
        }  
        
        let left = this.height(node.left)
        let right = this.height(node.right)
        
        return Math.max(left,right)+1
    }
    
    countNode(node = this.root){
        if(node === null){
            return 0
        }
        
        return this.countNode(node.left)+this.countNode(node.right) + 1
    }
    
    countLeaf(node = this.root){
        if(node === null){
            return 0
        }
        
        if(node.left === null && node.right === null){
            return 1
        }
        
        return this.countLeaf(node.left)+this.countLeaf(node.right)
    }
    
    isValid(node = this.root , min = -Infinity , max = Infinity){
        if(node === null){
            return true
        }
        
        if(node.data <= min && node.data >= max){
            return false
        }
        
        return this.isValid(node.left,min,node.data) && this.isValid(node.right,node.data,max)
    }
    
    closestValue(target){
        let curr = this.root
        let closest = this.root.data
        while(curr){
        if(Math.abs(target-curr.data) < Math.abs(target-closest)){
            closest = curr.data
        }
        
        if(curr.data > target){
            curr = curr.left
        }else if(curr.data < target){
            curr = curr.right
        }else{
            break
        }
        }
        
        return closest
    }
    
    
    
    
    
    
    
}

// ==========================================
//          NORMAL TESTING SCRIPT
// ==========================================

const bst = new BST();

// 1. Testing Insert
console.log("Inserting values: 10, 5, 20, 2, 7, 50, 40");
bst.insert(10);
bst.insert(5);
bst.insert(20);
bst.insert(2);
bst.insert(7);
bst.insert(50);
bst.insert(40);

// 2. Testing Traversals
console.log("\n--- Inorder (Should be: 2, 5, 7, 10, 20, 40, 50) ---");
bst.inorder();

console.log("\n--- Preorder (Should be: 10, 5, 2, 7, 20, 50, 40) ---");
bst.preorder();

console.log("\n--- Postorder (Should be: 2, 7, 5, 40, 50, 20, 10) ---");
bst.postorder();

// 3. Testing Contains
console.log("\n--- Testing Contains ---");
console.log("Contains 40? (Should be true):", bst.contains(40));
console.log("Contains 99? (Should be false):", bst.contains(99));

// 4. Testing Tree Metrics
console.log("\n--- Testing Metrics ---");
console.log("Tree Height (Should be 3):", bst.height());
console.log("Total Nodes (Should be 7):", bst.countNode());
console.log("Total Leaves (Should be 3):", bst.countLeaf());

// 5. Testing Validation & Closest Value
console.log("\n--- Testing Advanced Methods ---");
console.log("Is Valid BST? (Should be true):", bst.isValid());
console.log("Closest value to 12? (Should be 10):", bst.closestValue(12));
console.log("Closest value to 4? (Should be 5):", bst.closestValue(4));
