const fs = require('fs');

async function readData(path) {
	const rawData = fs.readFileSync(path);
	const data = await JSON.parse(rawData);
	return data;
}

function getOptions(path = './src/options.json') {
	const options = readData(path);
	return options;
}

function capitalize(str) {
	return str[0].toUpperCase() + str.slice(1);
}

function splitInput(input = '', splitter = ' ') {
	return input.split(splitter);
}

module.exports = {
	readData,
	getOptions,
	capitalize,
	splitInput
};

/*
USAGE:
const {splitInput} = require('./helper');
const [command, domain, ...restInput] = splitInput(alfy.input)
*/
