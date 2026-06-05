class graph {
    constructor() {
        this.list = {};
    }
    
    addvertex(vertex) {
        if (!this.list[vertex]) {
            this.list[vertex] = [];
        }
    }
    
    addedges(v1, v2) {
        this.addvertex(v1);
        this.addvertex(v2);
        
        this.list[v1].push(v2);
        this.list[v2].push(v1); 
    }

    display() {
        for (let x in this.list) { 
            console.log(x, "->", this.list[x].join(", "));
        }
    }
}

const g = new graph();

// 1. Add Vertices
g.addvertex("Alice");
g.addvertex("Bob");
g.addvertex("Charlie");

// 2. Add Edges (Connections)
g.addedges("Alice", "Bob");
g.addedges("Bob", "Charlie");
g.addedges("Charlie", "Alice");

// 3. Display the Adjacency List
console.log("--- Graph Structure ---");
g.display();