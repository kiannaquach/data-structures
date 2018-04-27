var BinarySearchTree = function(value) {
  var binarySearchTree = {};
  
  binarySearchTree.left = null;
  binarySearchTree.right = null;
  binarySearchTree.value = value;
  
  _.extend(binarySearchTree, bstMethods)

  return binarySearchTree;
};

var bstMethods = {};

bstMethods.insert = function(value) {
  if (value < this.value) {
    if (this.left === null) {
       this.left = BinarySearchTree(value);
    } else {
      this.left.insert(value);
    }
   
  }
  if (value > this.value) {
    if (this.right === null) {
      this.right = BinarySearchTree(value);
    } else {
      this.right.insert(value);
    }
  }
  
};

bstMethods.contains = function() {

};

bstMethods.depthFirstLog = function() {

};


/*
 * Complexity: What is the time complexity of the above functions?
 */
