// Pseudoclassical instantiation pattern using an array as storage.

function Queue() {
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

Queue.prototype.size = function() {
	// Return the length of our queue.
	return this.storage.length;
};


// Prototypal instantiation pattern using an object as storage.

function Queue() {
	var queue = Object.create(queueMethods);
	this.storage = {};
	queue.end = 0;
	queue.start = 0;
	return queue;
}

var queueMethods = {};

queueMethods.enqueue = function(value) {
	// Store the value at the incremented number. (The end of the line).
	this.storage[this.end] = value;
	this.end++
};

queueMethods.dequeue = function() {
	// Take off and return the front of the line.
	var deleted = this.storage[this.start];
	delete this.storage[this.start];
	// Only increment start if the queue is not empty.
	this.size() && this.start--;
	return deleted;
};

