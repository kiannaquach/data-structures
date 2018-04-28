

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  
  var bucket = this._storage.get(index);

  if (!bucket) {
    bucket = [];
    this._storage.set(index, bucket);
  }


  // isFound will be updated
  var isFound = false;

  // iterate through bucket
  for (var i = 0; i < bucket.length; i++) {
    // look at that bucket's tuple
    // check to see bucket's tuple is same as key provided
    if (bucket[i][0] === k) {
      // set that tuple at index 1 to the value
      bucket[i][1] = v;
      // update isFound 
      isFound = true;
    }
  }
  
  // if that key is not found
  if (!isFound) {
    // push the tuple into bucket
    bucket.push([k, v]); 
  }

};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);

  var bucket = this._storage.get(index);
  
  for (var i = 0; i < bucket.length; i++) {
    if (bucket[i][0] === k) {
      return bucket[i][1];
    }
  }
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);

  var bucket = this._storage.get(index);
  var value;
  
  for (var i = 0; i < bucket.length; i++) {
    if (bucket[i][0] === k) {
      value = bucket[i][1];
      bucket[i].splice(1, 1);
      return value;
    }
  }
};

// var hashTable = new HashTable();

// hashTable.insert('Steven', 'Seagal');
// console.log(hashTable.retrieve('Steven'))

// var v1 = 'val1';
// var v2 = 'val2';
// hashTable.insert(v1, v1);
// hashTable.insert(v2, v2);
// hashTable.retrieve(v1)
// hashTable.retrieve(v2)


/*
 * Complexity: What is the time complexity of the above functions?
 */


