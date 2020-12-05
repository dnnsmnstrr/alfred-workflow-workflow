const alfy = require('alfy');

// Input
function splitInput(splitter = ' ', input = alfy.input) {
	return input.split(splitter);
}

function capitalize(str = '') {
	if (!str || !str.length) {
		return '';
	}
	return str[0].toUpperCase() + str.slice(1);
}

// Validation
function isValidUrl(string) {
	return /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/.test(string);
}

const validateUrl = url => {
	try {
		url = new URL(url);
	} catch (_) {
		return false;
	}
	return url;
};

// Icons
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

// Output
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
