const fs = require('fs');
const alfy = require('alfy');
const {splitInput, enrichOptions} = require('./helper');

const readmePath = './node_modules/alfy/readme.md';
const githubUrl = 'https://github.com/sindresorhus/alfy/#';
const index = {
	uid: 'index',
	title: 'Alfy index example',
	subtitle: 'Example snippet using api fetch',
	quicklookurl: githubUrl + 'example',
	arg: `const alfy = require('alfy');

const API_URL='https://jsonplaceholder.typicode.com/posts'
const data = await alfy.fetch(API_URL);

const items = alfy
	.inputMatches(data, 'title')
	.map(element => ({
		title: element.title,
		subtitle: element.body,
		arg: element.id
	}));

alfy.output(items);
  `,
	mods: {
		cmd: {
			subtitle: 'Show source documentation',
			arg: githubUrl + 'example'
		}
	}
};

const handler = {
	uid: 'handler',
	title: 'JS handler',
	subtitle: 'Handle alfy arguments in a node environment',
	arg: `const query = process.argv[2]; // query
const {BASE_URL} = process.env; // environment variables

(async () => {
	try {
		console.log(query); // Pass query back to alfred
	} catch (error) {
		console.log('err', err);
	}
})();`,
	mods: {
		cmd: {
			subtitle: 'Show source documentation',
			arg: 'https://github.com/sindresorhus/alfy/issues/47#issuecomment-284176650'
		}
	}
};

const item = {
	uid: 'item',
	title: 'Alfy item',
	subtitle: 'An item to be shown in the alfy output',
	arg: `{
    title: '{cursor}',
    subtitle: '',
    arg: ''
  }`,
	quicklookurl: githubUrl + 'outputlist-options',
	mods: {
		cmd: {
			subtitle: 'Show source documentation',
			arg: 'https://github.com/sindresorhus/alfy/issues/47#issuecomment-284176650'
		}
	}
};

const script = {
	title: 'Script Filter Properties',
	arg: `{
        "uid": "desktop",
        "type": "file",
        "title": "Desktop",
        "subtitle": "~/Desktop",
        "arg": "~/Desktop",
        "autocomplete": "Desktop",
        "icon": {
            "type": "fileicon",
            "path": "~/Desktop"
        }
    }`,
	quicklookurl: 'https://www.alfredapp.com/help/workflows/inputs/script-filter/json/',
	mods: {
		cmd: {
			subtitle: 'Show source documentation',
			arg: 'https://github.com/sindresorhus/alfy/issues/47#issuecomment-284176650'
		}
	}
};

const readme = {
	title: 'Alfy Readme',
	arg: 'https://github.com/sindresorhus/alfy/',
	quicklookurl: '/Users/dm/dotfiles/alfred/workflows/alfred-workflow/node_modules/alfy/readme.md'
};

const snippets = enrichOptions([index, handler, item, script, readme], {quicklookurl: githubUrl});

const items = alfy.inputMatches(snippets, 'title');

alfy.output(items);
