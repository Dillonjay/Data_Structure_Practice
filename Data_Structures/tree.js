// Prototypal instantiation.
var Tree = function(value) {
	var newTree = Object.create(treeMethods);
	newTree.children = [];
	newTree.value = value;
	return newTree;
};

var treeMethods = {};
// Adds a child to a tree.
treeMethods.addChild = function(value) {
	// Push a brand new tree into the children array. 
	this.children.push(Tree(value));
};
// Checks if the tree contains a value you are looking for. 
treeMethods.contains = function(target) {
	// If the current trees value === target return true.
	if (this.value === target) return true;
	// Set an answer variable to false and return it at the end.
	var answer = false;
	// Loop through the current trees children.
	this.children.forEach(tree => {
		// Recurse with the contains method. If the target is found, set the answer to true.
		tree.contains(target) ? answer = true : null;
	})
	return answer;
};