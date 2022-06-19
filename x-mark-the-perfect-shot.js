const moves = ['north', 'north', 'west', 'west', 'north', 'east','north']

const finalPosition = function (moves) {
	return [
		moves.filter(x => x === 'east').length - moves.filter(x => x === 'west').length,
		moves.filter(x => x === 'north').length - moves.filter(x => x === 'south').length
	];
}

console.log(finalPosition(moves));
