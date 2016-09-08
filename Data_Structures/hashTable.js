
// Hashing function for creating a hash.
// Took Hash function from the internet.  
var hashFun = function(str, max) {
	var hash = 0;
	for (var i = 0; i < str.length; i++) {
    	hash = (hash << 5) + hash + str.charCodeAt(i);
    	hash = hash & hash; // Convert to 32bit integer
    	hash = Math.abs(hash);
  	};
	return hash % max;
};

//The special storage array for buckets.
var storageArray = function(limit) {
	// Storage for storing buckets.
	var storage = [];

	// Methods for interacting with the sorage array.
	var storageArray = {};

	// Return the bucket at index.
	storageArray.get = function(index) {
  		checkLimit(index);
  		//return the bucket.
  		return storage[index];	
    };

    // Set a bucket.
	storageArray.set = function(index, value) {
   		checkLimit(index);
   		// Set bucket at the appropriate index.
   		storage[index] = value;
    };

    // Run a callback on each bucket. 
	storageArray.each = function(callback) {
  		storage.forEach((item, index, storage) => {
  			// Call the callback on the bucket the, index and the storage array.
      		callback(item, index, storage);
    	})
    };

	var checkLimit = function(index) {
  		// Make sure that the index is actually a number.
  		if(index.constructor !== Number) throw new Error('Argument must be a number');
  		// Make sure the index is below the storage limit. 
  		if(index >= limit) throw new Error('Error, trying to access an index that is over the limit');
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


