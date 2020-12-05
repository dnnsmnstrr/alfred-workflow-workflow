const alfy = require('alfy');
const {splitInput} = require('./helper');

const [input, URL] = splitInput();

const DOCUMENTATION = 'cmd';

const index = {
	uid: 'index',
	title: 'Alfy index example',
	autocomplete: 'index',
	subtitle: 'Example snippet using api fetch',
	arg: `const alfy = require('alfy');

const API_URL='${URL}'
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
		[DOCUMENTATION]: {
			subtitle: 'Show source documentation',
			arg: 'https://github.com/sindresorhus/alfy#example'
		}
	}
};

const handler = {
	uid: 'handler',
	title: 'JS handler',
	autocomplete: 'handler',
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
		[DOCUMENTATION]: {
			subtitle: 'Show source documentation',
			arg: 'https://github.com/sindresorhus/alfy/issues/47#issuecomment-284176650'
		}
	}
};

const item = {
	uid: 'item',
	title: 'Alfy item',
	autocomplete: 'item',
	subtitle: 'An item to be shown in the alfy output',
	arg: `{
    title: '{cursor}',
    subtitle: '',
    arg: ''
  }`,
	mods: {
		[DOCUMENTATION]: {
			subtitle: 'Show source documentation',
			arg: 'https://github.com/sindresorhus/alfy/issues/47#issuecomment-284176650'
		}
	}
};

const match = {
	uid: 'matchInput',
	title: 'Alfy input matching & handling',
	autocomplete: 'input',
	subtitle: 'An item to be shown in the alfy output',
	arg: `const items = alfy.inputMatches(options, 'key')`,
	mods: {
		[DOCUMENTATION]: {
			subtitle: 'Show source documentation',
			arg: 'https://github.com/sindresorhus/alfy#inputmatcheslist-item'
		}
	}
};

const snippets = [index, handler, item, match];

const items = alfy.matches(input, snippets, 'title');

alfy.output(items);
