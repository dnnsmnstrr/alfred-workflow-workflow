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

function splitInput(input = alfy.input, splitter = ' ') {
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
	readData,
	getOptions,
	capitalize,
	splitInput,
	isValidUrl
};

/*
USAGE:
const {splitInput} = require('./helper');
const [command, domain, ...restInput] = splitInput(alfy.input)
*/
