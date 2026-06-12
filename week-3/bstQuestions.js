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
            } else if (target > curr.data) {
                curr = curr.right;
            } else {
                break;
            }
        }
        return false;
    }

    findClosest(target) {
        if (!this.root) return null; // Added quick safety check for empty tree
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

        return Math.max(left, right) + 1;
    }

    countNodes(node = this.root) {
        if (!node) {
            return 0;
        }
        return 1 + this.countNodes(node.left) + this.countNodes(node.right);
    }

    countLeafNodes(node = this.root) {
        if (!node) {
            return 0;
        }

        if (node.left === null && node.right === null) {
            return 1;
        }

        let left = this.countLeafNodes(node.left);
        let right = this.countLeafNodes(node.right);
        return left + right;
    }

    findMax(node = this.root) {
        if (!node) {
            return -Infinity;
        }
        let nodemax = node.data;
        let leftmax = this.findMax(node.left);
        let rightmax = this.findMax(node.right);

        return Math.max(leftmax, rightmax, nodemax);
    }

    findMin(node = this.root) {
        if (!node) {
            return Infinity;
        }
        let curr = node.data;
        let left = this.findMin(node.left);
        let right = this.findMin(node.right);

        return Math.min(curr, left, right);
    }

    findValue(target, node = this.root) {
        if (node === null) {
            return false;
        }

        if (node.data === target) {
            return true;
        }

        if (target < node.data) {
            return this.findValue(target, node.left);
        } else if (target > node.data) {
            return this.findValue(target, node.right);
        } else {
            return false;
        }
    }

    cloneTree(node = this.root) {
        if (node === null) {
            return null;
        }

        let newNode = new Node(node.data);

        newNode.left = this.cloneTree(node.left);
        newNode.right = this.cloneTree(node.right);

        return newNode;
    }

    mirrorTree(node = this.root) {
        if (node === null) {
            return null;
        }

        let newNode = new Node(node.data);

        newNode.left = this.mirrorTree(node.right);
        newNode.right = this.mirrorTree(node.left);

        return newNode;
    }
    
    levelOrder(){
        let queue = [this.root]
        while(queue.length){
            let curr = queue.shift()
            console.log(curr.data)
            
            if(curr.left !== null){
                queue.push(curr.left)
            }
            
            if(curr.right !== null){
                queue.push(curr.right)
            }
        }
    }

    isValid(node = this.root,min = -Infinity,max = Infinity){
        if(node === null){
            return true
        }

        if(node.data <= min || node.data >= max){
            return false 
        }

        return this.isValid(node.left,min,node.data) && this.isValid(node.right,node.data,max)
    }

    sumNodes(node = this.root){
        if(node === null){
            return 0
        }

        let curr = node.data
        let left = this.sumNodes(node.left)
        let right = this.sumNodes(node.right)

        return curr+left+right
    }

    removeCase1(node = this.root,target){
        if(node === null) return null

        if(target < node.data){
            node.left = this.removeCase1(node.left,target)
            return node
        }else if(target > node.data){
            node.right = this.removeCase1(node.right , target)
            return node 
        }else{
            //case 1

            if(node.left === null && node.right === null){
                return null
            }


            //case 2

            if(node.left === null){
                return node.right 
            }

            if(node.right === null){
                return node.left
            }

            //case 3

            let inorderSuccessor = this.findMin(node.right)
            node.data = inorderSuccessor
            node.right = this.removeCase1(node.right,inorderSuccessor)

            return node
        }
    }
}
// ==========================================
// THE ULTIMATE BST TEST SUITE
// ==========================================

const tr = new tree();

console.log("==========================================");
console.log("1. INSERTION & BUILDING");
console.log("==========================================");
// Building this tree:
//            50
//         /      \
//       25        75
//      /  \      /  \
//    10    30  60    85
//   /                  \
//  5                   100

const values = [50, 25, 75, 10, 30, 60, 85, 5, 100];
values.forEach(val => tr.insert(val));
console.log(`Inserted values: ${values.join(", ")}`);
console.log("Is it a valid BST right now? (Expected: true) =>", tr.isValid());


console.log("\n==========================================");
console.log("2. TRAVERSALS");
console.log("==========================================");
console.log("Level Order (Expected: 50, 25, 75, 10, 30, 60, 85, 5, 100):");
tr.levelOrder();

console.log("\nInorder (Expected: 5, 10, 25, 30, 50, 60, 75, 85, 100):");
tr.inorder();

console.log("\nPreorder (Expected: 50, 25, 10, 5, 30, 75, 60, 85, 100):");
tr.preorder();

console.log("\nPostorder (Expected: 5, 10, 30, 25, 60, 100, 85, 75, 50):");
tr.postorder();


console.log("\n==========================================");
console.log("3. SEARCHING & CLOSEST VALUES");
console.log("==========================================");
console.log("contains(60)     (Expected: true)  =>", tr.contains(60));
console.log("contains(999)    (Expected: false) =>", tr.contains(999));
console.log("findValue(30)    (Expected: true)  =>", tr.findValue(30));
console.log("findValue(1)     (Expected: false) =>", tr.findValue(1));
console.log("findClosest(28)  (Expected: 30)    =>", tr.findClosest(28));
console.log("findClosest(80)  (Expected: 75)    =>", tr.findClosest(80)); // 75 and 85 are both 5 away, but it hits 75 first


console.log("\n==========================================");
console.log("4. TREE STATISTICS (MATH & COUNTS)");
console.log("==========================================");
console.log("height()         (Expected: 3)   =>", tr.height());
console.log("countNodes()     (Expected: 9)   =>", tr.countNodes());
console.log("countLeafNodes() (Expected: 4)   =>", tr.countLeafNodes()); // 5, 30, 60, 100
console.log("findMin()        (Expected: 5)   =>", tr.findMin());
console.log("findMax()        (Expected: 100) =>", tr.findMax());
console.log("sumNodes()       (Expected: 440) =>", tr.sumNodes()); // 50+25+75+10+30+60+85+5+100 = 440


console.log("\n==========================================");
console.log("5. CLONING & MIRRORING");
console.log("==========================================");
const clonedRoot = tr.cloneTree();
console.log("Cloned Root Value       (Expected: 50) =>", clonedRoot.data);
console.log("Cloned Left Child Value (Expected: 25) =>", clonedRoot.left.data);

const mirroredRoot = tr.mirrorTree();
console.log("Mirrored Root Left Child (Expected: 75, was 25) =>", mirroredRoot.left.data);
console.log("Mirrored Root Right Child (Expected: 25, was 75) =>", mirroredRoot.right.data);

// Prove original tree wasn't destroyed by mirroring
console.log("Original Tree valid after mirroring? (Expected: true) =>", tr.isValid());


console.log("\n==========================================");
console.log("6. DELETIONS (ALL CASES)");
console.log("==========================================");
// CASE 1: Leaf Node
console.log("-- Deleting Leaf Node (5) --");
tr.root = tr.removeCase1(tr.root, 5);
console.log("contains(5)?     (Expected: false) =>", tr.contains(5));
console.log("findMin() is now (Expected: 10)    =>", tr.findMin());

// CASE 2: One Child
console.log("\n-- Deleting Node with One Child (85) --");
// 85 has a right child (100). Once 85 is deleted, 100 should attach directly to 75.
tr.root = tr.removeCase1(tr.root, 85);
console.log("contains(85)?    (Expected: false) =>", tr.contains(85));
console.log("contains(100)?   (Expected: true)  =>", tr.contains(100)); // Prove we didn't lose the child

// CASE 3: Two Children
console.log("\n-- Deleting Node with Two Children (25) --");
// 25 has children 10 and 30. Its in-order successor is 30.
tr.root = tr.removeCase1(tr.root, 25);
console.log("contains(25)?    (Expected: false) =>", tr.contains(25));
console.log("Is the tree still valid? (Expected: true) =>", tr.isValid());

// THE FINAL BOSS: Deleting the Root
console.log("\n-- Deleting The Root Node (50) --");
tr.root = tr.removeCase1(tr.root, 50);
console.log("contains(50)?    (Expected: false) =>", tr.contains(50));
console.log("Is the tree STILL valid? (Expected: true) =>", tr.isValid());

console.log("\nFinal Inorder Print to prove tree is perfectly sorted:");
tr.inorder(); 
// Expected final print: 10, 30, 60, 75, 100