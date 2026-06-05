class Node{
    constructor(data){
        this.data = data 
        this.left = null
        this.right = null
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
    
    contains(data){
        let curr = this.root
        while(curr){
            if(curr.data === data){
                return true
            }
            
            if(data < curr.data){
                curr = curr.left
            }else{
                curr = curr.right
            }
        }
        return false
    }
    
    findclosest(target){
        let curr = this.root
        let closest = this.root.data
        
        while(curr){
            if(Math.abs(target - curr.data) < Math.abs(target-closest)){
                closest = curr.data
            }
            
            if(target < curr.data){
                curr = curr.left
            }else if(target > curr.data){
                curr = curr.right 
            }else{
                break
            }
        }
        return closest
    }
    
    isValid(node = this.root , min = -Infinity , max = Infinity){
        if(node === null){
            return true 
        }
        if(node.data <= min || node.data >= max){
            return false
        }
        
        return this.isValid(node.left,min,node.data) && this.isValid(node.right,node.data,max)
    }
    
    
}

const bst = new BST()
bst.insert(10)
bst.insert(29)
bst.insert(40)
bst.insert(5)
console.log("----INORDER---")
bst.inorder()
console.log("----INORDER---")
console.log("----PREORDER---")
bst.preorder()
console.log("----PREORDER---")
console.log("----POSTORDER---")
bst.postorder()
console.log("----POSTORDER---")
console.log("STATUS : ",bst.contains(990))
console.log("Closest value : ",bst.findclosest(55))
console.log("BST Valid ?? : ",bst.isValid())






