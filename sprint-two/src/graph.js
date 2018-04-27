

// Instantiate a new graph
var Graph = function() {
  this.nodes = [];
  this.edges = [];
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(value) {
  var node = {};
  node.value = value;
  this.nodes.push(node.value);
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(value) {
  for (var i = 0; i < this.nodes.length; i++) {
    if (this.nodes[i] === value) {
      return true;
    }
  }
 
  return false; 
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(value) {
  var result;
  
  for (var i = 0; i < this.nodes.length; i++) {
    if (this.nodes[i] === value) {
      result = this.nodes.splice(i, 1)
    }
  }

  return result;
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  for (var i = 0; i < this.edges.length; i++) {
    if (this.edges[i][0] === fromNode && this.edges[i][1] === toNode) {
      return true;
    }  
  }
  
  return false;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  this.edges.push([fromNode, toNode])
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  var result;

    for (var i = 0; i < this.edges.length; i++) {
      if (this.edges[i][0] === fromNode && this.edges[i][1] === toNode) {
        this.edges[i].splice(i, 1)
      }
    }

};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


