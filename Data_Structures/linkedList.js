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
  // Create a new link.
	var newTail = link(value);
  // If the head is null, point the head to the new link.
	if(!this.head) this.head = newTail;
  // If the tail is not null, link the tails next variable to the new link.
	if(this.tail) this.tail.next = newTail;
  // Finally point the tail to the new link.
	this.tail = newTail;
};
// Remove the first link in the list.
linkedListMethods.removeHead = function() {
	// If list is empty return null.
	if(!this.head) return null;
	// Declare a holder variable for the head.
	var oldHead = this.head;
	// Point the head at the next item in the list.
	this.head = oldHead.next;
	// Return the old head. 
	return oldHead;
};
// Check to see if the list contains a value.
linkedListMethods.contains = function(target) {
	// Declare a link variable that points to the first link in the list.
	var link = this.head;
	// While there is a link, check if the links value is the target we are searching for.
	while(link){
		// If we find the target, return true.
		if(link.value === target) return true;
		// Point link to the next link in the list.
		link = link.next;
	}
	// If we dont find the target after looping through all the links, return false.
	return false;
};
// Display every value in the list.
linkedListMethods.display = function() {
	// Store the each links value.
	var answer = [];
	if(!this.head) return null;
	// If the list is empty, return null.
	var link = this.head;
	// While there is a link, push the links value into the answer array.
	while(link){
		answer.push(link.value);
		link = link.next;
	}
	// Return the answer array.
	return answer;
};


