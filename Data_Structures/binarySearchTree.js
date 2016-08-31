var BinarySearchTree = function(value) {
  // create a new tree object which inherites methods from the binaryTreePrototype.
  var binaryTree = Object.create(binaryTreePrototype);
  binaryTree.value = value;
  binaryTree.left = null;
  binaryTree.right = null;

  return binaryTree;
};

var binaryTreePrototype = {};

binaryTreePrototype.insert = function(value) {
	// First, check to see if the insert value is greater than current trees value.
	if(this.value < value){
		// if it is we know that we are going to insert to the right.
		// check if the current trees right value is null. If it is, asign it to a new 
		// tree with the insert value. If not, recurse until we find a spot.
		this.right === null ? this.right = BinarySearchTree(value) : this.right.insert(value);
		// else we do the same to on the left.
	} else {
		this.left === null ? this.left = BinarySearchTree(value) : this.left.insert(value);
	}
}
