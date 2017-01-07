
var fontCarrier = require('font-carrier');

function ttf2svg(buffer) {

	var transFont = fontCarrier.transfer(buffer);
	
	var output = transFont.output({
	  types:['svg']
	});

	return output.svg.toString();
}

module.exports = ttf2svg;
