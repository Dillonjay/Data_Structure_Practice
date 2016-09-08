
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

// Insert a key/value pair into the hashtable.
HashTable.prototype.insert = function(key,value) { 
	// First hash the key to get an index for storing the pair. 
	var index = hashFun(key, this.limit);
	// Either create a new bucket or get the bucket at the hashed index.
	var bucket = this.storage.get(index) || [];
	// Loop through the bucket to check if the key is already stored.
  	bucket.forEach(item => {
    	
    	// If the key is already sotred, replace the value with the new value.
    	if(item[0]=== key) {
     	 // Hold the old value.
     	 var old = item[1]
     	 // Replace the old value with the new.
     	 item[1] = value;
      	// Return the old value.
      	return old;
    	};
  	});
  	// If the key is not already stored, push the key and value into the bucket.
  	bucket.push([key, value]);
  	// Set the bucket in the storage array at the hashed index.
  	this.storage.set(index, bucket);
  	// Increase the size.
  	this.size++;
  	// Next, check and to see if you need to resize the storage. 
  	// If the storage is 75 percent full, resize.
  	if (this.size > this.limit * 0.75) {
    	this.resize(this.limit * 2);
  	};
  	// Finally, after all the work is done return undefined. s
  	return undefined;
};

HashTable.prototype.retrieve = function() {

};

HashTable.prototype.remove = function() {

};

HashTable.prototype.resize = function() {

};


