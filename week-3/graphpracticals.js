class Graph {
  constructor() {
    this.list = {};
  }

  addVertex(vertex) {
    if (!this.list[vertex]) {
      this.list[vertex] = [];
    }
  }

  addEdge(v1, v2) {
    this.addVertex(v1);
    this.addVertex(v2);

    this.list[v1].push(v2);
    this.list[v2].push(v1);
  }

  display() {
    for (let vertex in this.list) {
      console.log(vertex + " -> " + this.list[vertex].join(", "));
    }
  }

  bfs(start) {
    let queue = [start];
    let visited = new Set();

    visited.add(start);

    while (queue.length) {
      let vertex = queue.shift();

      console.log(vertex);

      for (let neighbor of this.list[vertex]) {
        if (!visited.has(neighbor)) {
          visited.add(neighbor);
          queue.push(neighbor);
        }
      }
    }
  }

  dfs(start, visited = new Set()) {
    visited.add(start);

    console.log(start);

    for (let neighbor of this.list[start]) {
      if (!visited.has(neighbor)) {
        this.dfs(neighbor, visited);
      }
    }
  }

  removeEdge(v1, v2) {
    this.list[v1] = this.list[v1].filter((vertex) => vertex !== v2);

    this.list[v2] = this.list[v2].filter((vertex) => vertex !== v1);
  }

  removeVertex(vertex) {
    while (this.list[vertex].length) {
      let adjacent = this.list[vertex].pop();

      this.removeEdge(vertex, adjacent);
    }

    delete this.list[vertex];
  }
}

const g = new Graph();

g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addVertex("D");

g.addEdge("A", "B");
g.addEdge("A", "C");
g.addEdge("B", "D");
g.display();
g.bfs("A");
g.dfs("A");
g.removeEdge("A", "B");
g.removeVertex("C");
