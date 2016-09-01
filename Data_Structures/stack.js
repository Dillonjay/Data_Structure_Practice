// Pseudoclassical instantiation pattern using an array as storage.

function Stack(){
	this.storage = [];
}

Stack.prototype.push = function(value){
	// Push the value into the storage array. 
	this.storage.push(value);
}

Stack.prototype.pop = function(){
	// Return the value of the item that is taken out of the storage array.
	return this.storage.pop();
}

Stack.prototype.size = function() {
	// Return the length of our storage. 
	return this.storage.length;
}

// Prototypal instantiation pattern using an object as storage.

function Stack(){
	var stack = Object.create(stackMethods);
	stack.storage = {};
	stack.size = 0;
	return stack;
}

var stackMethods = {};

stackMethods.size = function() {
	// Return the size.
	return this.size;
}





