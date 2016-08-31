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

setPrototype.contains = function(value) {
	// Check for the search value in the storage object. 
	// Will return true or false as when we add values we add them as properties. 
	return this.storage.hasOwnProperty(value);
}

setPrototype.delete = function (value) {
	// We simply delete the desired value.
	delete storage[value]
}