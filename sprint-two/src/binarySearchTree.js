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

bstMethods.contains = function(target) {

  if (this.value === target) {
    return true;
  }
  
  if (this.value > target) {
    if (this.left) {
      return this.left.contains(target);
    } else {
      return false;
    }
  }

  if (this.value < target) {
    if (this.right) {
      return this.right.contains(target);
    } else {
      return false;
    }
  }
  
};


bstMethods.depthFirstLog = function(func) {
  // if this.value exist
    // cb(this.value)

  if (this.value) {
    func(this.value);
  }

  if (this.left) {
    this.left.depthFirstLog(func);
  }

  if (this.right) {
    this.right.depthFirstLog(func);
  }
  
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
