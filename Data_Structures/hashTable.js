
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
	// Create an answer variable to return at the end. 
	var answer = undefined;
	// Loop through the bucket to check if the key is already stored.
  	bucket.forEach(item => {
    	
    	// If the key is already sotred, replace the value with the new value.
    	if(item[0]=== key) {
     		// Hold the old value.
     		var old = item[1]
     		// Replace the old value with the new.
     		item[1] = value;
      		// Point the answer variable to the old value.
      		answer = old;
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
  	return answer;
};

// Retrieve a value of a specific key.
HashTable.prototype.retrieve = function(key) {
	// Hash the key so we know what bucket to look in. 
	var index = hashFun(key, this.limit);
  	// Grab the bucket at the appropriate index.
  	var bucket = this.storage.get(index) || [];
  	// Create an answer variable to return at the end.
  	var answer = undefined;
  	// Loop through the bucket and search for the key. 
  	bucket.forEach( item => {
    	// If it is found, store the value in the answer variable. 
    	if(item[0] === key) {
     		answer = item[1];
    	};
  	})
  	// Return the answer variable. Will either be undefined or the value of the key.
  	return answer;
};

// Remove a specific key/value pair from your hashtable.
HashTable.prototype.remove = function(key) {
	// Hash the key so we know what bucket to look in. 
	var index = hashFun(key, this.limit);
	// Grab the bucket at the appropriate index.
  	var bucket = this.storage.get(index) || [];
  	// Create an answer variable to return at the end.
  	var answer = undefined;
  	// Loop through the bucket and search for the key we want to remove. 
	bucket.forEach(item => {
      if(item[0] === key) {
    	// If it is found, splice the key and value out of the bucket.
        bucket.splice(bucket.indexOf(item),1);
        // Decrease the hashtable size.
        this.size--;
        // If the size is now less than 25 percent of the limit, resize.
        if (this.size < this.limit * 0.25) {
        	// Resize by half of the current limit.
        	this.resize(Math.floor(this.limit / 2));
        }
        answer = item[1];
      }
    })
    // Return the answer variable. Will either be undefined or the value of the key.
  	return answer;
};

// Resize your hashtables storage when needed. 
// Double size limit when the hash table is 75 precent full.
// Down size by half of limit when hash table is less than 25 precent full. 
HashTable.prototype.resize = function(newLimit) {
	// Hold on to the old storage before you resize.
	var old = this.storage;
	// In this case we are going to have a minimum limit of 8.
	newLimit = Math.max(newLimit, 8);
	// If the newLimit is equal to 8 return.
	if(newLimit === this.limit) return; 
	// Otherwise we change the hash tables limit to the newLimit.
	this.limit = newLimit;
	// Create a new storage array with the new size limit.
	this.storage = storageArray(this.limit);
	// Reset the size of the hash table.
	this.size = 0;

	// Loop through the old storage using the storageArray each method.
	old.forEach(bucket => {
		// Loop through each bucket. 
		bucket.each( item => {
			// Insert all of the key value pairs into the new storage.
			this.insert(item[0], item[1])
		})
	})
};


