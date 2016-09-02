// Undirected graph implementation.

// Prototypal
function Graph() {
	var graph = Object.create(graphMethods);
	graph.nodes = {};
	return graph;
};

var graphMethods = {};
// Add a node to the graph.
graphMethods.addNode = function(node) {
	// Each node in the graph will have an object to store edges. 
	this.nodes[node] = { edges : {} }
};
// Check to see if the graph contains a specific node.
graphMethods.contains = function(node) {
	// Return the boolean value for weather or not the node we are searching for exists.
	return Boolean(this.nodes[node]);
}
