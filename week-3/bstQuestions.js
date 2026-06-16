class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class tree {
    constructor() {
        this.root = null;
    }
    
    insert(data) {
        const newNode = new Node(data);
        if (!this.root) {
            this.root = newNode;
            return; 
        }
        let curr = this.root;
        while (true) {
            if (data < curr.data) {
                if (curr.left === null) {
                    curr.left = newNode;
                    return; 
                }
                curr = curr.left;
            } else {
                if (curr.right === null) {
                    curr.right = newNode;
                    return; 
                }
                curr = curr.right;
            }
        }
    }
    
    inorder(node = this.root) {
        if (node) {
            this.inorder(node.left);
            console.log(node.data);
            this.inorder(node.right);
        }
    }
    
    preorder(node = this.root) {
        if (node) {
            console.log(node.data);
            this.preorder(node.left);
            this.preorder(node.right);
        }
    }
    
    postorder(node = this.root) {
        if (node) {
            this.postorder(node.left);
            this.postorder(node.right);
            console.log(node.data);
        }
    }
    
    contains(target) {
        let curr = this.root;
        while (curr) {
            if (curr.data === target) {
                return true;
            }
            
            if (target < curr.data) {
                curr = curr.left;
            } else {
                curr = curr.right;
            }
        }
        
        return false;
    }
    
    findclosest(target) {
        if (!this.root) return null;
        let curr = this.root;
        let closest = this.root.data;
        
        while (curr) {
            if (Math.abs(target - curr.data) < Math.abs(target - closest)) {
                closest = curr.data;
            }
            
            if (target < curr.data) {
                curr = curr.left;
            } else if (target > curr.data) {
                curr = curr.right; 
            } else {
                break;
            }
        }
        
        return closest;
    }
    
    height(node = this.root) {
        if (!node) {
            return -1;
        }
        let left = this.height(node.left);
        let right = this.height(node.right);
        
        return 1 + Math.max(left, right);
    }
    
    countnodes(node = this.root) {
        if (node === null) {
            return 0;
        }
        
        return this.countnodes(node.left) + this.countnodes(node.right) + 1;
    }
    
    countleaf(node = this.root) {
        if (node === null) {
            return 0;
        }
        
        if (node.left === null && node.right === null) {
            return 1;
        }
        
        return this.countleaf(node.left) + this.countleaf(node.right);
    }
    
    findmax(node = this.root) {
        if (node === null) {
            return -Infinity;
        }
        
        let currNode = node.data;
        let left = this.findmax(node.left);
        let right = this.findmax(node.right);
        
        return Math.max(currNode, left, right);
    }
    
    findmin(node = this.root) {
        if (node === null) {
            return Infinity;
        }
        
        let curr = node.data;
        let left = this.findmin(node.left);
        let right = this.findmin(node.right);
        
        return Math.min(curr, left, right);
    }
    
    findvalue(target) {
        let curr = this.root;
        while (curr) {
            if (target === curr.data) {
                return curr.data;
            }
            
            if (target < curr.data) {
                curr = curr.left;
            } else {
                curr = curr.right;
            }
        }
        
        let status = "not found";
        return status;
    }
    
    clonetree(node = this.root) {
        if (node === null) {
            return null;
        }
        
        const newNode = new Node(node.data);
        newNode.left = this.clonetree(node.left);
        newNode.right = this.clonetree(node.right);
        
        return newNode;
    }
    
    mirrortree(node = this.root) {
        if (node === null) {
            return null;
        }
        
        const newNode = new Node(node.data);
        newNode.left = this.mirrortree(node.right);
        newNode.right = this.mirrortree(node.left);
        
        return newNode;
    }
    
    remove(target, node = this.root) {
        if (node === null) {
            return null;
        }
        
        if (target < node.data) {
            node.left = this.remove(target, node.left);
        } else if (target > node.data) {
            node.right = this.remove(target, node.right);
        } else {
            if (node.left === null && node.right === null) {
                return null;
            }
            
            if (node.left === null) {
                return node.right;
            }
            
            if (node.right === null) {
                return node.left;
            }
            
            const inorders = this.findmin(node.right);
            node.data = inorders;
            node.right = this.remove(inorders, node.right);
        }
        return node;
    }
    
    isvalidbst(node = this.root, min = -Infinity, max = Infinity) {
        if (!node) {
            return true;
        }
        
        if (node.data <= min || node.data >= max) {
            return false;
        }
        
        return this.isvalidbst(node.left, min, node.data) && this.isvalidbst(node.right, node.data, max);
    }
    
    kthlargest(k) {
        let count = 0;
        let result = null;
        
        function traverse(node) {
            if (!node || result !== null) return;
            
            traverse(node.right);
            count++;
            if (count === k) {
                result = node.data;
                return;
            }
            traverse(node.left);
        }
        traverse(this.root);
        return result;
    }
    
    kthsmallest(k) {
        let count = 0;
        let result = null;
        
        function traverse(node) {
            if (!node || result !== null) return;
            
            traverse(node.left);
            count++;
            if (count === k) {
                result = node.data;
                return;
            }
            traverse(node.right);
        }
        
        traverse(this.root);
        return result;
    }

    levelorder(){
        if(!this.root){
            return 
        }
        let queue = [this.root]
        while(queue.length){
            let curr = queue.shift()
            console.log(curr.data)

            if(curr.left){
                queue.push(curr.left)
            }

            if(curr.right){
                queue.push(curr.right)
            }
        }
    }

    findparent(target){
        if(!this.root || target === this.root.data){
            return null
        }
        let curr = this.root
        let parent = null
        
        while(curr){
            if(curr.left && curr.left.data === target || curr.right && curr.right.data === target){
                    return curr
            }
            
            if(target < curr.data){
                curr = curr.left
            }else{
                curr = curr.right
            }
        }
        
        return null
    }

    finddepth(target){
        let curr = this.root
        let depth = 0
        while(curr){
            if(curr.data === target){
                return depth
            }
            
            if(target < curr.data){
                depth++
                curr = curr.left
            }else{
                depth++
                curr = curr.right
            }
        }
        
        return -1
    }

    findinternalnode(node = this.root){
        if(node === null){
            return 0
        }
        
        if(node.left === null && node.right === null){
            return 0
        }
        
        return 1+ this.findinternalnode(node.left)+this.findinternalnode(node.right)
    }

    sum(node = this.root){
        if(node === null){
            return 0
        }
        
        let left = this.sum(node.left)
        let right = this.sum(node.right)
        let curr = node.data
        
        return left+right+curr
    }

    


}

// ==========================================
//            PROPER TEST CASES
// ==========================================

const bst = new tree();
bst.insert(30);
bst.insert(10);
bst.insert(22);
bst.insert(15);

console.log("--- 1. Depth-First Traversals ---");
console.log("INORDER (Expected: 10, 15, 22, 30):");
bst.inorder();

console.log("\nPREORDER (Expected: 30, 10, 22, 15):");
bst.preorder();

console.log("\nPOSTORDER (Expected: 15, 22, 10, 30):");
bst.postorder();


console.log("\n--- 2. Search & Value Retrieval ---");
console.log("contains(30) (Expected: true):", bst.contains(30));
console.log("contains(11) (Expected: false):", bst.contains(11));
console.log("findvalue(15) (Expected: 15):", bst.findvalue(15));
console.log("findvalue(99) (Expected: not found):", bst.findvalue(99));


console.log("\n--- 3. Math & Metric Calculations ---");
console.log("findclosest(100) (Expected: 30):", bst.findclosest(100));
console.log("findclosest(17) (Expected: 15):", bst.findclosest(17));
console.log("height() (Expected: 3):", bst.height());
console.log("countnodes() (Expected: 4):", bst.countnodes());
console.log("countleaf() (Expected: 1):", bst.countleaf());
console.log("findmax() (Expected: 30):", bst.findmax());
console.log("findmin() (Expected: 10):", bst.findmin());


console.log("\n--- 4. Tree Cloning & Verification ---");
const cloneroot = bst.clonetree();
const clonetreeInstance = new tree();
clonetreeInstance.root = cloneroot;
console.log("Cloned Tree Inorder (Expected: 10, 15, 22, 30):");
clonetreeInstance.inorder();


console.log("\n--- 5. Tree Mirroring & Verification ---");
const mirrorroot = bst.mirrortree();
const mirrortreeInstance = new tree();
mirrortreeInstance.root = mirrorroot;
console.log("Mirrored Tree Inorder (Expected Descending: 30, 22, 15, 10):");
mirrortreeInstance.inorder();


console.log("\n--- 6. BST Structural Validation ---");
console.log("Is Original Tree a Valid BST? (Expected: true):", bst.isvalidbst());
console.log("Is Mirrored Tree a Valid BST? (Expected: false):", mirrortreeInstance.isvalidbst());


console.log("\n--- 7. K-th Order Statistics ---");
console.log("1st Largest element (Expected: 30):", bst.kthlargest(1));
console.log("2nd Largest element (Expected: 22):", bst.kthlargest(2));
console.log("1st Smallest element (Expected: 10):", bst.kthsmallest(1));
console.log("2nd Smallest element (Expected: 15):", bst.kthsmallest(2));


console.log("\n--- 8. Node Deletion ---");
console.log("Removing Node 10 (Node with one right child subtree)...");
bst.root = bst.remove(10); // Capture the returned top-level reference update
console.log("Inorder After Deletion (Expected: 15, 22, 30):");
bst.inorder();
console.log("New Node Count (Expected: 3):", bst.countnodes());