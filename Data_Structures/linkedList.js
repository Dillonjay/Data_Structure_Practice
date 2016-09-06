// Basic Linked List

// Function for creating links. 
function link(value) {
	var link = {}
	link.value = value;
	link.next = null;
	return link;
};

// Prototypal Instantiation.
function LinkedList() {
	var list = Object.create(linkedListMethods);
	list.head = null;
	list.tail = null;
	return list;
};

linkedListMethods = {};
// Add a new link to tail. 
linkedListMethods.addToTail = function(value) {

};
// Remove the first link in the list.
linkedListMethods.removeHead = function() {

};
// Check to see if the list contains a value.
linkedListMethods.contains = function(target) {

};
// Display every value in the list.
linkedListMethods.display = function() {

};



