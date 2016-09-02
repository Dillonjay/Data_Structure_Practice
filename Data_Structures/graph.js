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
graphMethods.removeNode = function(node) {
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
graphMethods.addEdge = function(fromNode, toNode) {
	// First, make sure both nodes are represented in the graph. If not, return.
	if(!this.nodes[fromNode] || this.nodes[toNode]) return;
	// Connect them both by adding eachother to their edges object.
	this.nodes[fronNode].edges[toNode] = toNode;
	this.nodes[toNode].edges[fromNode] = fromNode;
};
// Removes a connection between two nodes.
graphMethods.removeEdge = function(fromNode, toNode) {
	// Make sure both nodes are present. 
	if(!this.nodes[fromNode] || this.nodes[toNode]) return;
	// Remove the connection.
	delete this.nodes[fromNode].edges[toNode];
	delete this.nodes[toNode].edges[fromNode];
};