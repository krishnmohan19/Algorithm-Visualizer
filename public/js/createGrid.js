// variables
export var rowsize = 20;
export var colsize = 50;

// Returns a random number between min (inclusive) and max (exclusive)
function getRandomArbitrary(max) {
	return (Math.random() * (max - 1)) % max;
} // End getRandomArbitrary

// Create a Node
function createNode(row, col, weight) {
	var node = document.createElement('div');
	node.setAttribute('class', 'node');
	node.setAttribute('row', row);
	node.setAttribute('col', col);
	node.setAttribute('wall', 0);
	node.setAttribute('cost', Number.POSITIVE_INFINITY);
	node.setAttribute('parent', null);
	node.setAttribute('weight', weight);
	node.innerText = weight.toString();
	return node;
} // End createNode

// Create Board and insert into HTML
export function createBoard() {
	var grid = document.querySelector('.container');
	grid.innerHTML = '';
	for (var row = 0; row < rowsize; row++) {
		for (var col = 0; col < colsize; col++) {
			let weight = Math.round(getRandomArbitrary(9));
			let temp = createNode(row, col, weight);
			let shadow = weight / 10;
			grid.appendChild(temp);
		}
	}

	// Set start and end node
	var startNode = document.querySelector("div[row='0'][col='0']");
	var endNode = document.querySelector(`div[row='${rowsize-1}'][col='${colsize-1}']`);
	startNode.setAttribute('cost', 0);
	startNode.innerHTML = '>';
	endNode.innerHTML = '@';
} // End createBoard