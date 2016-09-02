// Undirected graph implementation.

// Prototypal
function Graph() {
	var node = Object.create(graphMethods)
	return node
};

var graphMethods = {};
