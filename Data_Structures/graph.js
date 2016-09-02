// Undirected graph implementation.

// Prototypal Instantiation.
function Graph() {
	var graph = Object.create(graphMethods);
	graph.nodes = {};
	return graph;
};

var graphMethods = {};
// Add a node to the graph.
graphMethods.addNode = function(node) {
	// Each node in the graph will have an object to store edges. 
	this.nodes[node] = { edges : {} };
};
// Check to see if the graph contains a specific node.
graphMethods.contains = function(node) {
	// Return the boolean value for weather or not the node we are searching for exists.
	return Boolean(this.nodes[node]);
};
// Removes a node completely from the graph. 
graphMethod.removeNode = function(node) {
	//first we check to see if the node exists.
	if(this.nodes[node]){
		//If it does then we wil remove all connections to any other nodes before deleting. 
		for(var otherNode in this.nodes[node].edges) {
			this.removeEdge(node, otherNode);
		};
		// Then delete.
		delete this.nodes[node];
	};
};
// Check to see if two nodes are connected.
graphMethods.hasEdge = function(fromNode, toNode) {
	// Does fromNode exist ? If so, see if toNode is one of its edges.
	if(this.nodes[fromNode]) return Boolean(this.nodes[fromNode].edges[toNode])
};
// Adds a connection between two nodes.
