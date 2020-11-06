const alfy = require('alfy');

const getAppIcon = (appName = 'Alfred') => {
	return {
		type: 'fileicon',
		path: `/Applications/${appName}.app`
	};
};

const getIcon = (icon = 'AlertCautionIcon') => {
	return {
		path: alfy.icon.get(icon)
	};
};

const getAsset = assetName => {
	return {
		path: `./assets/${assetName}.png`
	};
};

function splitInput(splitter = ' ', input = alfy.input) {
	return input.split(splitter);
}

function capitalize(str) {
	return str[0].toUpperCase() + str.slice(1);
}

function isValidUrl(string) {
	try {
		new URL(string);
	} catch (_) {
		return false;
	}

	return true;
}

module.exports = {
	getIcon,
	getAppIcon,
	getAsset,
	capitalize,
	splitInput,
	isValidUrl
};

/*
IMPORT:
const {splitInput} = require('./helper');

USAGE:
const [command, ...restInput] = splitInput()
const [input, query, ...restInput] = splitInput(':') // Custom splitter
*/
