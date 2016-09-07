
// Hashing function for creating a hash.
// Took Hash function from the internet.  
var hashFun = function(str, max) {
  var hash = 0;
  for (var i = 0; i < str.length; i++) {
    hash = (hash << 5) + hash + str.charCodeAt(i);
    hash = hash & hash; // Convert to 32bit integer
    hash = Math.abs(hash);
  }
  return hash % max;
};

//The special storage array for buckets.
var storageArray = function(limit) {
  var storage = [];

  var storageArray = {};

  storageArray.get = function(index) {
  
  };
  storageArray.set = function(index, value) {
   
  };
  storageArray.each = function(callback) {
  
   
  };

  var checkLimit = function(index) {
  
  };

  return storageArray;
};
// Pseudoclassical instantiation
var HashTable = function() {
	this.size = 0;
	this.limit = 8;
	this.storage = storageArray(this.limit)
};


HashTable.prototype.insert = function() { 

};

HashTable.prototype.retrieve = function() {

};

HashTable.prototype.remove = function() {

};

HashTable.prototype.resize = function() {

};


