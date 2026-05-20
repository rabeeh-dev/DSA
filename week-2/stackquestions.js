function rString(str){
    let stack = []
    for(let x of str){
        stack.push(x)
    }
    
    let reversed = ""
    
    while(stack.length>0){
        reversed += stack.pop()
    }
    
    return reversed
}

console.log(rString("rabeeh"))


//2 

function isBalanced(str){
    let stack = []
    
    let pairs = {
        ")":"(",
        "]":"[",
        "}":"{"
    };
    
    for(let x of str){
        if(x === "[" || x === "(" || x=== "{"){
            stack.push(x)
        }else{
            let top = stack.pop()
            if(top !== pairs[x]){
                return false
            }
        }
        
        
    }
    
    return stack.length===0
}

console.log(isBalanced("([]}{})"))

