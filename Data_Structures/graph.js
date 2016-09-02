// Undirected graph implementation.

// Prototypal
function Graph() {
	var graph = Object.create(graphMethods);
	graph.nodes = {};
	return graph;
};

var graphMethods = {};

graphMethods.addNode = function() {
	// Add the node as a property on the graph.
	// Each node in the graph will have an object to store edges. 
	this.nodes[node] = { edges : {} }
}
