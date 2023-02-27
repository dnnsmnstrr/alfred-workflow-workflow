'use strict';
const alfy = require('alfy');
const {splitInput} = require('./src/helper');

const [option, query = ''] = splitInput();

const options = [
	{
		title: 'App Icon',
		subtitle: 'Get Icons from macOS Apps',
		arg: `icon:${query}`
	},
	{
		title: 'Favicon',
		subtitle: 'Get favicons from websites',
		arg: `favicon:${query}`
	},
	{
		title: 'Atom',
		subtitle: 'Open Workflows in Atom',
		arg: 'atom'
	},
	{
		title: 'icns',
		subtitle: 'Get system icons for Alfy Workflows',
		arg: `icns:${query}`
	},
	{
		title: 'Search',
		subtitle: 'Search Alfred Workflows',
		arg: `search:${query}`
	},
  {
    title: 'JSON Example',
    subtitle: 'Show documentation for JSON Script Filter format',
    arg: 'json'
  }
].map(item => {
	return {
		...item,
		uid: item.uid || item.title.replaceAll(' ', '').toLowerCase(),
		autocomplete: item.title
	};
});

const items = alfy
	.matches(option, options, 'title');
alfy.output(items);
