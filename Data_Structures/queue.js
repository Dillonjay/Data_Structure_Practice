// Pseudoclassical instantiation pattern using an array as storage.

function Queue(){
	this.storage = [];
};

Queue.prototype.enqueue = function(value) {
	// Place value at the front of our storage array.
	this.storage.unshift(value);
};

Queue.prototype.dequeue = function() {
	// Take the last value out of our queue and return it. 
	return this.storage.pop();
};



// Prototypal instantiation pattern using an object as storage.
