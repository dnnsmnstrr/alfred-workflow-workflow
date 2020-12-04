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

const enrichOptions = (options, properties) => {
	return options.map((item, index) => {
		let {title, arg, autocomplete} = item;
		if (!title) {
			title = capitalize(arg);
		}
  	return {
		  title,
  		uid: title || index,
  		autocomplete: title.split(' ')[0].toLowerCase(),
		  ...properties,
		  ...item
  	};
	});
};

module.exports = {
	getIcon,
	getAppIcon,
	getAsset,
	capitalize,
	splitInput,
	isValidUrl,
	enrichOptions
};

/*
IMPORT:
const {splitInput} = require('./helper');

USAGE:
const [command, ...restInput] = splitInput()
const [input, query, ...restInput] = splitInput(':') // Custom splitter
*/
