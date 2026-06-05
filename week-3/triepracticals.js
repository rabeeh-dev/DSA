class trieNode{
    constructor(){
        this.children = {}
        this.isEnd = false
    }
}

class trie{
    constructor(){
        this.root = new trieNode()
    }
    
    insert(word){
        let curr = this.root
        
        for(let x of word){
            if(!curr.children[x]){
                curr.children[x] = new trieNode()
            }
            curr = curr.children[x]
        }
        curr.isEnd = true
    }
    
    search(word){
        let curr = this.root
        for(let x of word){
            if(!curr.children[x]){
                return false
            }
            curr = curr.children[x]
        }
        return curr.isEnd
    }
    
    startWith(prefix){
        let curr = this.root
        for(let x of prefix){
            if(!curr.children[x]) return false 
            curr = curr.children[x]
        }
        
        return true
    }
}

const myTrie = new trie();

// 1. Insert words
myTrie.insert("apple");
myTrie.insert("app");

// 2. Exact word search tests
console.log("Search 'apple':", myTrie.search("apple")); // Expected: true
console.log("Search 'app':", myTrie.search("app"));     // Expected: true
console.log("Search 'ap':", myTrie.search("ap"));       // Expected: false

console.log("-----------------------");

// 3. Prefix search tests (startWith)
console.log("Starts with 'ap':", myTrie.startWith("ap"));   // Expected: true
console.log("Starts with 'appl':", myTrie.startWith("appl")); // Expected: true
console.log("Starts with 'b':", myTrie.startWith("b"));       // Expected: false





