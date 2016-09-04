// Prototypal instantiation.
var Tree = function(value){
	var newTree = Object.create(treeMethods);
	newTree.children = [];
	newTree.value = value;
	return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value){
	this.children.push(Tree(value));
};

