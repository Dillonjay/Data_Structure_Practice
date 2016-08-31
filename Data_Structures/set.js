var Set = function() {
	// Create and return an object with the set prototype.
	var set = Object.create(setPrototype);
	set.storage = {};
	return set;
};

setPrototype = {};

setPrototype.insert = function(value) {
	// add the the value as a property on the storage object.
	this.storage[value] = true;
}
