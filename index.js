'use strict';
const alfy = require('alfy');
const {splitInput} = require('./src/helper');

const [option, query] = splitInput();

const options = [
	{
		title: 'App Icon',
		subtitle: 'Get Icons from macOS Apps',
		arg: `icon:${query}`
	},
	{
		title: 'Favicon',
		subtitle: 'Get favicons from websites',
		arg: 'favicon'
	},
	{
		title: 'Atom',
		subtitle: 'Open Workflows in Atom',
		arg: 'atom'
	},
	{
		title: 'System Icons',
		subtitle: 'Get Icons for Alfy Workflows',
		arg: `icns:${query}`
	},
	{
		title: 'Search',
		subtitle: 'Search Alfred Workflows',
		arg: `search:${query}`
	}
].map(item => {
	return {
		...item,
		uid: item.title,
		autocomplete: item.title.split(' ')[0]
	};
});

const items = alfy
	.matches(option, options, 'title');
alfy.output(items);
