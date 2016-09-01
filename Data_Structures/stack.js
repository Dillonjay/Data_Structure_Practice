// Pseudoclassical instantiation pattern using an array as storage.

function Stack(){
	this.storage = [];
}

Stack.prototype.push = function(value){
	// push the value into the storage array. 
	this.storage.push(value);
}

Stack.prototype.pop = function(){
	// return the value of the item that is taken out of the storage array.
	return this.storage.pop();
}

Stack.prototype.size = function() {
	// return the length of our storage. 
	return this.storage.length;
}

// Pseudoclassical instantiation pattern using an object as storage.






