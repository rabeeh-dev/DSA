class trieNode{
    constructor(){
        this.child = {}
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
            if(!curr.child[x]){
                curr.child[x] = new trieNode()
            }
            curr = curr.child[x]
        }
        curr.isEnd = true
    }
    
    search(word){
        let curr = this.root
        for(let x of word){
            if(!curr.child[x]){
                return false
            }
            curr = curr.child[x]
        }
        return curr.isEnd
    }
    
    startWith(prefix){
        let curr = this.root
        for(let x of prefix){
            if(!curr.child[x]){
                return false
            }
            curr = curr.child[x]
        }
        return true
    }
    
    collectwords(node,currWord,result){
        if(node.isEnd){
            result.push(currWord)
        }
        
        for(let x in node.child){
            this.collectwords(node.child[x],currWord+x,result)
        }
    }
    
    autocomplete(prefix){
        let curr = this.root
        for(let x of prefix){
            if(!curr.child[x]){
                return []
            }
            curr = curr.child[x]
        }
        
        let result = []
        this.collectwords(curr,prefix,result)
        return result
    }
    
    display() {
        let result = [];
        this.collectwords(this.root, "", result);
        console.log("Stored Words:", result);
    }
    
    
}


const myTrie = new trie();
myTrie.insert("apple");
myTrie.insert("app");

console.log("--- Exact Word Search Tests ---");
console.log("Search 'apple' (Expected: true) ->", myTrie.search("apple"));
console.log("Search 'app'   (Expected: true) ->", myTrie.search("app"));
console.log("Search 'ap'    (Expected: false) ->", myTrie.search("ap"));

console.log("\n--- Prefix Search Tests ---");
console.log("StartsWith 'ap'   (Expected: true) ->", myTrie.startWith("ap"));
console.log("StartsWith 'appl' (Expected: true) ->", myTrie.startWith("appl"));
console.log("StartsWith 'b'    (Expected: false) ->", myTrie.startWith("b"));

// Add these to your existing test calls at the bottom of the script
console.log("\n--- Autocomplete Suggestions Tests ---");

// Test Case 1: Multiple matches
console.log("Autocomplete 'ap' (Expected: ['apple', 'app']) ->", myTrie.autocomplete("ap"));

// Test Case 2: Exact match that branches further
console.log("Autocomplete 'app' (Expected: ['apple', 'app']) ->", myTrie.autocomplete("app"));

// Test Case 3: Missing path scenario
console.log("Autocomplete 'ban' (Expected: []) ->", myTrie.autocomplete("ban"));
myTrie.display()