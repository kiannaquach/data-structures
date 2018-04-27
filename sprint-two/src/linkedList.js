var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var node = Node(value) 
    

    if (!list.head) { //  equal to null
      list.head = node; // run this the first time
      list.tail = node;
    } else if (list.tail) { // if list.tail is not the last one
      
      list.tail.next = node;  // it keep moving to next node until reaching null                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            t = node;
    }

    list.tail = node;  //reached the end add node
  };

  list.removeHead = function() {
    var firstHead = list.head;
    list.head = firstHead.next;
    return firstHead.value;
  };

  list.contains = function(target) {
    var currentHead = list.head;
    
    while (currentHead) {
      if (currentHead.value === target) {
         return true;
      } 
       
      currentHead = currentHead.next; // go to next node
    }
    return false;
 
  };
  return list;

};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions? O(n) linear
 */
