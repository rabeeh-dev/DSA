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
    
    collectWord(node,currWord,result){
        if(node.isEnd){
            result.push(currWord)
        }
        
        for(let x in node.child){
            this.collectWord(node.child[x],currWord+x,result)
        }
    }
    
    autoComplete(prefix){
        let curr = this.root
        for(let x of prefix){
            if(!curr.child[x]){
                return []
            }
            
            curr = curr.child[x]
        }
        
        let result = []
        
        this.collectWord(curr,prefix,result)
        return result
    }
}

// --- TEST RUNNER ---

const myTrie = new trie();

console.log("--- 1. Testing Insertion and Search ---");
myTrie.insert("apple");
myTrie.insert("app");
myTrie.insert("apricot");
myTrie.insert("banana");

console.log(myTrie.search("apple"));   // Expected: true
console.log(myTrie.search("app"));     // Expected: true (checks if short words work alongside longer prefixes)
console.log(myTrie.search("apr"));     // Expected: false (prefix exists, but not the full word)
console.log(myTrie.search("orange"));  // Expected: false (completely missing word)


console.log("\n--- 2. Testing startWith (Prefix Matching) ---");
console.log(myTrie.startWith("app"));  // Expected: true (matches 'apple' and 'app')
console.log(myTrie.startWith("apr"));  // Expected: true (matches 'apricot')
console.log(myTrie.startWith("ban"));  // Expected: true (matches 'banana')
console.log(myTrie.startWith("cat"));  // Expected: false


console.log("\n--- 3. Testing autoComplete ---");
// Should return both 'apple' and 'app'
console.log("Autocomplete 'app':", myTrie.autoComplete("app")); 
// Expected: [ 'app', 'apple' ] (order depends on object key insertion order)

// Should return all words starting with 'ap'
console.log("Autocomplete 'ap':", myTrie.autoComplete("ap"));  
// Expected: [ 'app', 'apple', 'apricot' ]

// Should return ['banana']
console.log("Autocomplete 'ban':", myTrie.autoComplete("ban")); 
// Expected: [ 'banana' ]

// Should return [] since no words start with 'z'
console.log("Autocomplete 'z':", myTrie.autoComplete("z"));   
// Expected: []


console.log("\n--- 4. Edge Cases ---");
myTrie.insert(""); // Inserting an empty string
console.log("Search empty string:", myTrie.search("")); // Expected: true
console.log("Autocomplete empty string:", myTrie.autoComplete("")); 
// Expected: [ '', 'app', 'apple', 'apricot', 'banana' ] (returns everything in the trie)













