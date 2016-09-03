// Prototypal instantiation.
var Tree = function(value){
	var newTree = Object.create(treeMethods);
	newTree.children = [];
	newTree.value = value;
	return newTree;
}