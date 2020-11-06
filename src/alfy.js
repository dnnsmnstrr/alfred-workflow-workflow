const alfy = require('alfy');
const {splitInput} = require('./helper');

const index = {
	uid: 'index',
	title: 'Alfy index example',
	subtitle: 'Example snippet using api fetch',
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
			arg: 'https://github.com/sindresorhus/alfy#example'
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
	mods: {
		cmd: {
			subtitle: 'Show source documentation',
			arg: 'https://github.com/sindresorhus/alfy/issues/47#issuecomment-284176650'
		}
	}
};

const snippets = [index, handler, item];

const items = alfy.inputMatches(snippets, 'title');

alfy.output(items);
