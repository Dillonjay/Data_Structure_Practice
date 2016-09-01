// Pseudoclassical instantiation pattern using an array as storage.

function Queue(){
	this.storage = [];
};

Queue.prototype.enqueue = function(value) {
	// Place value at the front of our storage array.
	this.storage.unshift(value);
};



// Prototypal instantiation pattern using an object as storage.
